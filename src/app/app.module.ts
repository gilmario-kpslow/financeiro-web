import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import locatePt from '@angular/common/locales/pt';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { LoginGuard } from './core/seguranca/LoginGuard';
import { LogadoGuard } from './core/seguranca/logado.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

registerLocaleData(locatePt);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [LoginGuard, LogadoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
