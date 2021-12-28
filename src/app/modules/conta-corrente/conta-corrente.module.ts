import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaCorrenteRoutingModule } from './conta-corrente-routing.module';
import { ContaCorrenteHomeComponent } from './conta-corrente-home/conta-corrente-home.component';
import { ContaCorrenteCadastroComponent } from './conta-corrente-cadastro/conta-corrente-cadastro.component';
import { ContaCorrenteListComponent } from './conta-corrente-list/conta-corrente-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { ContaCorrenteService } from '../../core/conta-corrente/conta-corrente.service';
import { AuthInterceptor } from '../../core/seguranca/token-http.interceptor';


@NgModule({
  declarations: [
    ContaCorrenteHomeComponent,
    ContaCorrenteCadastroComponent,
    ContaCorrenteListComponent
  ],
  imports: [
    CommonModule,
    ContaCorrenteRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [
    ContaCorrenteService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class ContaCorrenteModule { }
