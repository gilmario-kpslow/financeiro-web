import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaCorrenteHomeComponent } from './conta-corrente-home/conta-corrente-home.component';
import { ContaCorrenteListComponent } from './conta-corrente-list/conta-corrente-list.component';
import { ContaCorrenteCadastroComponent } from './conta-corrente-cadastro/conta-corrente-cadastro.component';

const routes: Routes = [
  {path: '', component: ContaCorrenteHomeComponent},
  {path: 'list', component: ContaCorrenteListComponent},
  {path: 'cadastro', component: ContaCorrenteCadastroComponent},
  {path: 'cadastro/:id', component: ContaCorrenteCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaCorrenteRoutingModule { }
