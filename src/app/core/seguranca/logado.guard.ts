import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SegurancaService } from './seguranca.service';
import { AplicacaoService } from '../application/aplicacao.service';
import { Observable } from 'rxjs';
import { LoginComponent } from '../../modules/login/login/login.component';

@Injectable()
export class LogadoGuard implements CanActivate {

  constructor(private segurancaService: SegurancaService, private router: Router, private appService: AplicacaoService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    if(this.segurancaService.isLogado) {
      return true
    }
    this.router.navigate(this.appService.menuConsts.login.rota)
    return false;
  }

}
