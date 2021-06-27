import { Usuario } from './usuario'
import { Injectable, Injector } from '@angular/core'
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { GenericService } from '../../generics/generic.service';
import { UsuarioCadastroRequest } from '../../modules/cadastro/usuario.cadastro.request';

@Injectable()
export class UsuarioService extends GenericService<Usuario> {

  constructor(private injector: Injector) {
    super('usuario', injector, Usuario)
  }

  salvar(entity: UsuarioCadastroRequest): Observable<Usuario> {
    return this._http.post<Usuario>(`${this._url}/registrar`, entity)
    .pipe(take(1))
  }
}
