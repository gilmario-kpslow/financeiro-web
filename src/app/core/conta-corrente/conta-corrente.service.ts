import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContaCorrente } from "./conta-corrente";

@Injectable()
export class ContaCorrenteService {

    url = `${environment.api}/conta-corrente`
    constructor(private http: HttpClient) { }

    salvar(entity: ContaCorrente) {
      return this.http.post<ContaCorrente>(this.url, entity)
    }

    pesquisar() {
      return this.http.get<ContaCorrente[]>(this.url)
    }

}
