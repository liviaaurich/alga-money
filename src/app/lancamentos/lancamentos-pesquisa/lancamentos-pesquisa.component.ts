import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2019, 9, 30),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'},
    { tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: new Date(2019, 8, 15),
    dataPagamento: new Date(2019, 8, 13), valor: 80000, pessoa: 'Atacado Brasil'}
  ];

}
