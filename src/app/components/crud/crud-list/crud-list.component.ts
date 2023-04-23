import { Component, ContentChild, EventEmitter, Injector, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coluna } from 'src/app/generics/coluna.model';
import { CardConsultaConfig } from '../dto/card-consulta-config';
import { GenericEntity } from 'src/app/generics/generic-entity';
import { QueryOptions } from '../dto/query.options';
import { MenuItem } from 'src/app/layout/menu-lateral/menu-item.model';
import { Subscription } from 'rxjs';
import { MensagemService } from '../../mensagens/mensagem.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit, OnDestroy {

  @Input() titulo: string = "";
  @Input() colunas: Coluna[] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onNew = new EventEmitter<any>();
  @Output() list = new EventEmitter<any>();
  @Output() select = new EventEmitter<any>();
  @ContentChild(NgForm) form: NgForm | undefined;
  @Input() config: CardConsultaConfig = new CardConsultaConfig();
  @Input() sizeOptions = [5, 10, 25, 50, 100, 200];
  lista: GenericEntity[] = [];
  loading: boolean = false;
  rows = 10;
  sortColumn: string = "";
  query: QueryOptions = new QueryOptions();
  totalRecords: number = 0;
  items: MenuItem[] = [];
  selecionado: GenericEntity | undefined;
  subscription: Subscription[] = [];
  @Input() tituloRelatorio: string = "";
  @Input() urlRelatorio: string = "";
  dataSource: MatTableDataSource<any>;


  constructor(
    private messageService: MensagemService,
    private injector: Injector,
    private router: Router,
    private dialogService: MatDialog,
    // private confirmationService: ConfirmationService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    if (!this.config.actions) {
      this.config.actions = [];
    }

    this.items.push({ nome: 'Editar', icone: 'pi pi-fw pi-pencil', visivel: this.config.showEditar, command: (e: any) => this.editar(e), rota: [] });
    this.items.push({ nome: 'Remover', icone: 'pi pi-fw pi-trash', visivel: this.config.showExcluir, command: (e: any) => this.onDeleteConfirm(e), rota: [] });

    this.config.actions.forEach(a => {
      this.items.push({ nome: a.label, icone: a.icon, command: a.action, rota: [] });
    });
  }

  load(data: any) {
    this.dataSource = new MatTableDataSource(data.content);
    this.lista = data.content;
    this.totalRecords = data.totalElements;
    this.loading = false;
  }

  pesquisar() {
    this.list.emit(this.query);
  }

  editar(event: any) {
    this.onEdit.emit(this.selecionado);
  }

  novo() {
    this.onNew.emit();
  }

  deletar() {
    this.onDelete.emit(this.selecionado);
  }

  onDeleteConfirm(event: any) {
    console.log(event)
    // this.confirmationService.confirm({
    //   message: 'Deseja excluir o registro?',
    //   accept: () => {
    //     this.deletar();
    //   }
    // });
  }

  onSort(sortEvent: any): void {
    if (sortEvent.field) {
      this.query.sortOrder = sortEvent.field;
      this.query.sortDirection = sortEvent.order === 1 ? 'ASC' : "DESC";
    } else {
      this.query.sortOrder = "";
      this.query.sortDirection = "";
    }
  }

  processaConsulta(data: any) {
    this.lista = data.content;
    this.totalRecords = data.totalElements;
    this.loading = false;
  }

  paginarList(event: any) {
    this.query.pageNumber = event.first / event.rows;
    this.query.pageSize = event.rows;
    this.rows = event.rows;
    if (event.sortField) {
      this.query.sortOrder = event.sortField;
      this.query.sortDirection = event.sortOrder === 1 ? 'ASC' : "DESC";
    }
    this.pesquisar();
  }

  getValueColuna(entity: any, coluna: Coluna) {
    const colunas = coluna.campo.split(`\.`);
    if (entity && colunas.length > 0) {
      const valor = this.trataColuna(entity, colunas, 0);
      if (coluna.pipe) {
        const pipeInstance = this.injector.get(coluna.pipe);
        if (coluna.parametros instanceof Array) {
          return pipeInstance.transform(valor, ...coluna.parametros);
        } else {
          return pipeInstance.transform(valor, coluna.parametros);
        }
      }
      return valor;
    }
    return "";
  }

  private trataColuna(entity: any, colunas: string[], i: number): any {
    const valor = entity[colunas[i]];
    if (valor && colunas.length > i + 1) {
      return this.trataColuna(valor, colunas, i + 1);
    }
    return valor;
  }

  limpar() {
    this.form?.reset();
    this.query = new QueryOptions();
    this.query.pageNumber = 0;
    this.query.pageSize = 10;
    this.rows = 10;
    this.query.sortOrder = this.colunas[0].campo;
    this.query.sortDirection = "ASC";
    this.list.emit(this.query);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

  showMenu(entity: GenericEntity) {
    this.selecionado = entity;
    this.select.emit(entity);
    if (this.config.selectCallback) {
      this.config.selectCallback(entity);
    }
  }

  getColunasVisiveis() {
    return this.colunas.map(c => c.campo);
  }

  imprimir() {
    const relatorioData: any = {
      url: this.urlRelatorio,
      titulo: `Relatorio :: ${this.tituloRelatorio}`,
      orderOptions: this.colunas.filter(c => c.ordenar).map(c => {
        return { label: c.nome, field: c.campo };
      })
    }

    // this.dialogService.open(SimpleReportComponent, {
    //   data: relatorioData,
    //   header: relatorioData.titulo,
    //   width: '60%'
    // }).onClose.subscribe(rep => {
    //   console.log(rep);

    //   if (rep) {
    //     this.dialogService.open(ShowPdfComponent, {
    //       data: rep,
    //       header: relatorioData.titulo,
    //       width: '60%',
    //       height: '400'
    //     }).onClose.subscribe(rep => {
    //       console.log(rep);
    //     });
    //   }
    // });
  }

}
