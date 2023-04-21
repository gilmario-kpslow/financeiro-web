import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDefaultComponent } from './input-default/input-default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MensagensComponent } from './mensagens/mensagens.component';
import { MensagemContainerComponent } from './mensagens/mensagem-container/mensagem-container.component';
import { LoaderComponent } from './loader/loader.component';
import { SectionComponent } from './section/section.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    LoaderComponent,
    // DialogoComponent,
    // BaseListComponent,
    // BaseCadastroComponent,
    // MesanoDirective,
    // MaskDirective,
    // IndicadorErrosComponent,
    // TimeDirective,
    MensagemContainerComponent,
    MensagensComponent,
    // ActionButtonComponent,
    // DateParseDirective,
    InputDefaultComponent,
    SectionComponent,
    CardComponent
    // RapidPaginatorComponent,
    // CardListComponent,
    // CardListInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ], exports: [
    InputDefaultComponent,
    MensagemContainerComponent,
    LoaderComponent,
    SectionComponent
  ]
})
export class ComponentsModule { }
