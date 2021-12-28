import { Component, OnInit } from '@angular/core';
import { VersaoService } from '../../core/application/versao.service';
import { version } from '../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  versao = version
  versaoApi!: any
  constructor(private service: VersaoService) { }

  ngOnInit() {
    this.service.getVersaoApi().subscribe((v: any) => this.versaoApi = v)
    // this.versaoApp = this.service.getVersaoApp();
  }
}
