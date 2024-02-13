import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrl: './categoria-delete.component.css',
})
export class CategoriaDeleteComponent implements OnInit {
  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: '',
  };
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.categoriaService.findById(this.categoria.id!).subscribe((resposta) =>{
      this.categoria.nome = resposta.nome
      this.categoria.descricao = resposta.descricao

    });
  }

  cancelar() {
    this.router.navigate(['categorias']);
  }
}
