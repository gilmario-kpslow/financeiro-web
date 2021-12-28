import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './core/seguranca/LoginGuard';
import { LogadoGuard } from './core/seguranca/logado.guard';
import { Erro404Component } from './pages/erro404/erro404.component';
import { Erro403Component } from './pages/erro403/erro403.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, canActivate: [LogadoGuard], children: [
    { path: '', canActivate: [LogadoGuard], loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
    { path: 'conta-corrente', canActivate: [LogadoGuard], loadChildren: () => import('./modules/conta-corrente/conta-corrente.module').then(m => m.ContaCorrenteModule)},
  ]},
  { path: 'cadastro', canActivate: [LoginGuard], loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)},
  { path: 'login', canActivate: [LoginGuard], loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  { path: '404', component: Erro404Component },
  { path: '403', component: Erro403Component },
  { path: '**', redirectTo: '/404', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
