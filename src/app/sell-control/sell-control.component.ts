import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

import { count } from 'rxjs';
import { NgModel } from '@angular/forms';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-sell-control',
  templateUrl: './sell-control.component.html',
  styleUrls: ['./sell-control.component.css'],
})
export class SellControlComponent implements OnInit {
  meta: number = 0;
  dias: number = 0;
  itemTemp: number = 0;
  item: number = 0;
  TodosPrecosTemp: number[] = [0];
  todosPrecos: number[] = [0];
  acompanhamento: boolean = false;
  mais: boolean = false;

  total: number = 0;
  media: number = 0;

  atendimentos: number = 0;

  listaDiaria: number[] = []; // aqui vai uma lista de todos os valores vendidos no dia, mas quero que essa lista seja separada por cada bordero tb.

  constructor(private configService: ConfigService) {}

  mostrarAcompanhamento() {
    if (this.acompanhamento === true) {
      this.acompanhamento = false;
    } else {
      this.acompanhamento = true;
    }
  }

  guardaItem() {
    this.item = this.itemTemp;
    this.itemTemp = 0;
  }

  valorParaItens(count: number): any[] {
    // criando um array na mesma quantidade de itens do input, mesmo que seja und... eu só quero a quantidade de iterações e nao os valores
    return new Array(count);
  }

  adicionarPreco() {
    this.todosPrecos = this.TodosPrecosTemp;
    this.TodosPrecosTemp = [0];
  }

  detalheVenda() {
    this.total = this.todosPrecos.reduce((acc, preco) => acc + preco, 0);
    return parseFloat(this.total.toFixed(4));
  }

  calculoMedia() {
    if (this.item === 0) {
      return (this.item = 0);
    } else {
      this.media = this.total / this.item;
    }
    if (this.media === 0) {
      this.media = 0;
    }

    return parseFloat(this.media.toFixed(2));
  }

  //preciso de um metodo e variavel que guarde todas as vendas do dia e some elas, estou falando de um objeto, e a cada iteracao criar um novo obj com todos os itens da venda
  //é um metodo que vai guardar as variveis da venda e colocar na tabela, que é o proximo componente


        //friedman 
  // horas de trabalho 2 
  // total de vendas 3 
  // numero de transacao  4 
  // numero de itens 5
  // oportunidades 6
  
  // agora os calculos diario: 

// venda media ( 3 /4 )
//itens por venda ( 5 /4 )
//vendas por hora (3 / 2 )
//taxa de conversao ( 4/6 * 100 )

// calculo semanal



  vendasDia() {
   
  }

  bordero = {};

  // a cada vez que eu clicar no valor final, um novo bordero é criado com novos valores


  mostraDiv() {
    if (this.mais === false) {
      this.mais = true;
    } else {
      this.mais = false;
    }
  }

  ngOnInit(): void {}
}
