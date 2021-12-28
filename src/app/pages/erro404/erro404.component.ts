import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro404',
  templateUrl: './erro404.component.html',
  styleUrls: ['./erro404.component.css']
})
export class Erro404Component implements OnInit {

  constructor(private nav: Location) { }

  ngOnInit(): void {
  }

  voltar() {
    this.nav.back();
  }

}
