import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-sell-control',
  templateUrl: './sell-control.component.html',
  styleUrls: ['./sell-control.component.css'],
})
export class SellControlComponent implements OnInit {
  meta: number = 0;
  dias: number = 31;
  divisao: number = 0;
  diaVigente: number = 0;
  quantidadeItens: number = 0;
  diaFim: number = 0;
  valorVenda: number = 0;
  valor: number = 0;

  constructor(private configService:ConfigService) {}

  ngOnInit(): void {
    this.meta = 50000;
    this.dias = 26;
    this.calcularDivisao();
    this.diaVigente = 1;
    this.diaFim = 31; // controle para o calculo do ultimo dia da meta.
    this.valorFinal();
    this.quantidadeItens = 0;
    this.valorVenda = 0;
    this.mostraTeste();
  }

  async calcularDivisao() {
    this.divisao = await this.calculoPorDia(this.meta, this.dias);
  }

  async calculoPorDia(meta: number, dias: number): Promise<number> {
    return meta / dias;
  }

  // calculo da venda com a quantidade de itens

  valorFinal() {

    return this.quantidadeItens * this.valorVenda;
    
  }

  mostraTeste(){};


  


   

  
  
}
