import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class VersaoService {

  url = environment.api
  constructor(private http: HttpClient) { }

  getVersaoApi(): any {
    return this.http.get<any>(`${this.url}/versao`)
  }


}
