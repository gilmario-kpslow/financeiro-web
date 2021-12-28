import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SegurancaService } from '../../core/seguranca/seguranca.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clickEvent = new EventEmitter()
  logado: boolean
  constructor(private sessao: SegurancaService) {
    this.logado = this.sessao.isLogado
  }

  ngOnInit() {
    // this.sessao.alteraSessao.subscribe((e: boolean) => this.logado = e)
  }

  onClick() {
    this.clickEvent.emit()
  }

  isLogado() {
    return this.logado
  }

}
