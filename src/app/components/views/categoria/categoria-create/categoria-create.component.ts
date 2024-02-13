import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrl: './categoria-create.component.css',
})
export class CategoriaCreateComponent implements OnInit {
 categoria: Categoria = {
nome : '',
descricao : ''
 }

  constructor(private categoriaService: CategoriaService,private router: Router) {}
  ngOnInit(): void {}
  returnHome() {
    this.router.navigate(['']);
  }

  create():void{
    this.categoriaService.create(this.categoria)
    .subscribe((resposta) =>{
      this.categoriaService.mensagem('Categoria criada com sucesso!')
      this.router.navigate(['categorias']);
    },err =>{
      for(let i =0; i < err.error.errors.length; i++){
        this.categoriaService.mensagem(err.error.errors[i].message)
      }
    })
  }

}
