import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrafService {

  constructor(private http: HttpClient) { }
  SearchStato(query: string) {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

      let obsStato = this.http.get(url);
      return obsStato;
  //Ritorno un observable ai componenti che richiedono il servizio
    }
}




