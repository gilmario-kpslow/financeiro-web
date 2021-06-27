import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './core/seguranca/LoginGuard';
import { LogadoGuard } from './core/seguranca/logado.guard';

const routes: Routes = [
  { path: '', component: LayoutComponent, canActivate: [LogadoGuard], children: [

  ]},
  { path: 'login', canActivate: [LoginGuard], loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  { path: 'cadastro', canActivate: [LoginGuard], loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)},
  { path: '*', redirectTo: '/login', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
