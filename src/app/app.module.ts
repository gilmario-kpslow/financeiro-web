import { registerLocaleData } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import locatePt from '@angular/common/locales/pt';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { LoginGuard } from './core/seguranca/LoginGuard';
import { LogadoGuard } from './core/seguranca/logado.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ComponentsModule } from './components/components.module';
import { AppErrorHandler } from './app-error.handler';
import { Erro404Component } from './pages/erro404/erro404.component';
import { Erro403Component } from './pages/erro403/erro403.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './components/loader/loader.interceptor';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MenuLateralComponent } from './layout/menu-lateral/menu-lateral.component';
import { MatButtonModule } from '@angular/material/button';
import { AuthInterceptor } from './core/seguranca/token-http.interceptor';

registerLocaleData(locatePt);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    MenuLateralComponent,
    Erro404Component,
    Erro403Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [
    LoginGuard,
    LogadoGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
