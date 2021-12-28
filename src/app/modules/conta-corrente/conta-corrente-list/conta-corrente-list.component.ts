import { Component, OnInit } from '@angular/core';
import { ContaCorrente } from '../../../core/conta-corrente/conta-corrente';
import { ContaCorrenteService } from '../../../core/conta-corrente/conta-corrente.service';

@Component({
  selector: 'app-conta-corrente-list',
  templateUrl: './conta-corrente-list.component.html',
  styleUrls: ['./conta-corrente-list.component.css']
})
export class ContaCorrenteListComponent implements OnInit {

  lista: ContaCorrente[] = []
  constructor(private service:ContaCorrenteService) { }

  ngOnInit(): void {
    this.pesquisar()
  }

  pesquisar() {
    this.service.pesquisar().subscribe((lista: any) => this.lista = lista)
  }
}
