import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-control',
  templateUrl: './sell-control.component.html',
  styleUrls: ['./sell-control.component.css'],
})
export class SellControlComponent implements OnInit {
  meta: number = 0;
  dias: number = 31;
  divisao: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.meta = 50000;
    this.dias = 31;
    this.calcularDivisao();
  }

  async calcularDivisao() {
    this.divisao = await this.calculoPorDia(this.meta, this.dias);
  }

  async calculoPorDia(meta: number, dias: number): Promise<number> {
    return meta / dias; 
  }
}
