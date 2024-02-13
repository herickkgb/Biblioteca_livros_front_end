import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrl: './categoria-update.component.css'
})
export class CategoriaUpdateComponent implements OnInit{
  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome
      this.categoria.descricao = resposta.descricao
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
