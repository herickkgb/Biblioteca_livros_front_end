import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroServiceService } from '../livro-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrl: './livro-read-all.component.css',
})
export class LivroReadAllComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];
  id_cat: String = '';
  livros: Livro[] = [];

  constructor(
    private service: LivroServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.livros = resposta;
    });
  }
}
