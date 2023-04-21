import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { UsuarioAutenticado } from '../../core/dto/usuario.autenticado';
import { LoginRequest } from './login.request';

@Injectable()
export class LoginService {
  url = `${environment.api}`

  constructor(private http: HttpClient) { }

  logar(req: LoginRequest): Observable<UsuarioAutenticado> {
    return this.http.post<UsuarioAutenticado>(`${this.url}/auth/login`, req)
  }
}
