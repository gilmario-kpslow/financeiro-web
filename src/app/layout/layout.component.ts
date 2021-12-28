import { Component, OnInit, ViewChild } from '@angular/core';
import { SegurancaService } from '../core/seguranca/seguranca.service';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AplicacaoService } from '../core/application/aplicacao.service';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  // constructor(private service: SegurancaService, private router: Router, private appService: AplicacaoService) { }

  // ngOnInit(): void {
  // }

  // logout() {
  //   this.service.remove()
  //   this.router.navigate(this.appService.menuConsts.login.rota)
  // }

  mobileQuery: MediaQueryList
  open = true
  mode: MatDrawerMode = 'side'
  fixed = false
  mobile: MediaQueryList
  animation: string = ""
  @ViewChild(MatSidenav) nav!: MatSidenav

  constructor(private media: MediaMatcher, private service: SegurancaService, private router: Router, private appService: AplicacaoService) {
    this.mobileQuery = media.matchMedia('(min-width: 1024px)')
    this.mobileQuery.onchange = ve => this.verifiMedia()
    this.mobile = media.matchMedia('(min-width: 576px)')
  }

  ngOnInit() {
    this.verifiMedia()

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     this.animation = event.url
    //   }
    // })
  }

  toogleNav() {
    this.nav.toggle()
  }

  private verifiMedia() {
    this.open = this.mobileQuery.matches
    this.mode = !this.mobileQuery.matches ? 'over' : 'side'
  }

  prepareRoute(outlet: RouterOutlet) {
    return this.animation
  }

  logout() {
    this.service.remove()
    this.router.navigate(this.appService.menuConsts.login.rota)
  }

}
