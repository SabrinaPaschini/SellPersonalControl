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

  total: number = 0;
  media: number = 0;

  atendimentos: number = 0; 

  bordero: any = {};

  mais: boolean = false ; 

  constructor(private configService: ConfigService) {}

  guardaItem() {
    this.item = this.itemTemp;
  }

  valorParaItens(count: number): any[] {
    // criando um array na mesma quantidade de itens do input, mesmo que seja und... eu só quero a quantidade de iterações e nao os valores
    return new Array(count);
  }

  adicionarPreco() {
    this.todosPrecos = this.TodosPrecosTemp;
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

  //é um metodo que vai guardar as variveis da venda e colocar na tabela, que é o proximo componente 

  fechaValorFinal(){

      
    
  }

  mostraDiv(){

    if(this.mais === false){
      this.mais = true;  
      
    }else {
      this.mais = false 
    }

  }
 

  ngOnInit(): void {}
}
