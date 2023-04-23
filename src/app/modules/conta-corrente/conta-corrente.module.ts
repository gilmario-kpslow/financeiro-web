import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaCorrenteRoutingModule } from './conta-corrente-routing.module';
import { ContaCorrenteHomeComponent } from './conta-corrente-home/conta-corrente-home.component';
import { ContaCorrenteCadastroComponent } from './conta-corrente-cadastro/conta-corrente-cadastro.component';
import { ContaCorrenteListComponent } from './conta-corrente-list/conta-corrente-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { ContaCorrenteService } from '../../core/conta-corrente/conta-corrente.service';
import { CrudModule } from 'src/app/components/crud/crud.module';


@NgModule({
  declarations: [
    ContaCorrenteHomeComponent,
    ContaCorrenteCadastroComponent,
    ContaCorrenteListComponent
  ],
  imports: [
    CommonModule,
    ContaCorrenteRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    CrudModule
  ],
  providers: [
    ContaCorrenteService,
  ],
})
export class ContaCorrenteModule { }
