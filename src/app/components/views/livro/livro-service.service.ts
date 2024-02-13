import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroments';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root',
})
export class LivroServiceService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAllByCategoria(id_cat: String): Observable<Livro[]> {
    const url = `${this.baseUrl}livros?categoria=${id_cat}`;
    return this.http.get<Livro[]>(url);
  }
}
