import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Versao } from "../dto/versao";

@Injectable({ providedIn: 'root' })
export class VersaoService {

  url = environment.api
  constructor(private http: HttpClient) { }

  getVersaoApi(): Observable<Versao> {
    return this.http.get<Versao>(`${this.url}/versao`)
  }

}
