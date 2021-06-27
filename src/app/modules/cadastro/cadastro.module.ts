import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../core/usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [
    UsuarioService
  ]
})
export class CadastroModule { }
