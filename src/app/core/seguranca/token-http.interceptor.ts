import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SegurancaService } from './seguranca.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const store = this.injector.get(SegurancaService);
    if (store.isLogado) {
      const requestAuth = req.clone(
        {
          setHeaders:
            { Authorization: `Bearer ${store.getToken()}` }
        });
      return next.handle(requestAuth);
    }
    return next.handle(req);
  }

}
