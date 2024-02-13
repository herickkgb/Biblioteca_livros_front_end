import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { environment } from '../../../../environments/enviroments';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient,private _snack:MatSnackBar) {}

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

  create(categotia: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`;
    return this, this.http.post<Categoria>(url, categotia);
  }
  mensagem(str:String):void{
    this._snack.open(`${str}`, 'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    })
  }
}
