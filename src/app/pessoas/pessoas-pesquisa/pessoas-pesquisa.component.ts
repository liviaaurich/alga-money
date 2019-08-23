import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Livia Tononi', cidade: 'Marilândia', estado: 'ES', status: true },
    { nome: 'Joana Manuela', cidade: 'Colatina', estado: 'ES', status: false },
    { nome: 'Thomas Miguel', cidade: 'Vitória', estado: 'ES', status: true }
  ];

}
