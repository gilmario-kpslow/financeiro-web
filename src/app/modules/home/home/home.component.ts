import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [
    {nome: "Conta corrente", link: "conta-corrente"},
    {nome: "Despesa", link: "despesa"},
    {nome: "Receita", link: "receita"},
    {nome: "Fatura", link: "fatura"}
  ]
  constructor() { }

  ngOnInit(): void {
  }



}
