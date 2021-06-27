import { Component, OnInit } from '@angular/core';
import { SegurancaService } from '../core/seguranca/seguranca.service';
import { Router } from '@angular/router';
import { AplicacaoService } from '../core/application/aplicacao.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private service: SegurancaService, private router: Router, private appService: AplicacaoService) { }

  ngOnInit(): void {
  }

  logout() {
    this.service.remove()
    this.router.navigate(this.appService.menuConsts.login.rota)
  }

}
