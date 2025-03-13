import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { count } from 'rxjs';

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

  TodosPrecosTemp = [0];
  todosPrecos = [0];

  constructor(private configService: ConfigService) {}

  guardaItem() {
    this.item = this.itemTemp;
  }

  valorParaItens(count: number): any[] {
    // criando um array na mesma quantidade de itens do input, mesmo que seja und... eu só quero a quantidade de iterações e nao os valores 
    return new Array(count);
  }

  adicionaListaPreco() {}

  ngOnInit(): void {}
}
