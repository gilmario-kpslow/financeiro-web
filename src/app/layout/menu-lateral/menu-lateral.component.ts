import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model'
import { SegurancaService } from '../../core/seguranca/seguranca.service'
import { AplicacaoService } from '../../core/application/aplicacao.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  menu: MenuItem[] = MENU
  logado = false
  treeControl = new NestedTreeControl<MenuItem>(node => node.filhos);
  dataSource = new MatTreeNestedDataSource<MenuItem>();
  constructor(private service: SegurancaService, private applicacaoService: AplicacaoService) {
    this.menu = applicacaoService._menuDisponivel
    this.logado = service.isLogado
  }

  ngOnInit() {
    this.service.getLogoutEvent((e: any) => {
      this.logado = e
    })
    this.applicacaoService.menuEvent.subscribe(menu => {
      this.menu = menu
    })
    this.dataSource.data = MENU;
  }

  isLogado() {
    return this.logado
  }

  hasChild = (_: number, node: MenuItem) => !!node.filhos && node.filhos.length > 0;

}

const MENU = [
  new MenuItem({
    nome: 'Cadastrar', rota: [''], filhos: [
      new MenuItem({ nome: 'Conta corrente', rota: [''] }),
      new MenuItem({ nome: 'Faturas', rota: [''] })
    ]
  }),

]


