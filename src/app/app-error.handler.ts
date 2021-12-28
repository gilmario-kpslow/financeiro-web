import { Injectable, Injector, NgZone, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MensagemService } from './components/mensagens/mensagem.service';
import { SegurancaService } from './core/seguranca/seguranca.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    constructor(
        private zone: NgZone,
        private injector: Injector) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any): void {
        const router = this.injector.get(Router);
        const notificador = this.injector.get(MensagemService);
        const store = this.injector.get(SegurancaService);
        if (errorResponse instanceof HttpErrorResponse) {
          const message = errorResponse.error ? errorResponse.error : undefined;
          // console.log(errorResponse);
          console.log(message)
          this.zone.run(() => {
            switch (errorResponse.status) {
              case 0:
                notificador.erro('Ops! O servidor parece offline, verifique sua conexão e tente novamente.', 'Erro na conexão');
                break;
              case 400:
                notificador.erro(message.mensagem);
                break;
              case 401:
                notificador.erro('Realize seu login novamente');
                router.navigate(['/login']);
                store.remove();
                break;
              case 403:
                notificador.warn(`Usuário ou senha incorretos`, 'Erro de login');
                break;
              case 500:
                notificador.erro(message.mensagem, 'Erro no servidor');
                break;
              default:
                notificador.erro(message || 'Erro interno por favor, tente novamente mais tarde!');
                break;
            }
          });
        }
        super.handleError(errorResponse);
    }

}
