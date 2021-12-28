import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro403',
  templateUrl: './erro403.component.html',
  styleUrls: ['./erro403.component.css']
})
export class Erro403Component implements OnInit {

  constructor(private nav: Location) { }

  ngOnInit(): void {
  }

  voltar() {
    this.nav.back();
  }


}
