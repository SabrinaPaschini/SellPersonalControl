import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'; // import da service

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private configService: ConfigService) {} // lembrar de colocar no parametro

  diasMeta: number = 0;
  diasInputTemp: number = 0;

  metaFinanceira: number = 0;
  metaInputTemp: number = 0;

  diasData() {
    if (this.diasInputTemp >= 0) {
      return (this.diasMeta = this.diasInputTemp);
    } else {
      return (this.diasMeta = 0);
    }
  }

  metaData() {
    if (this.metaInputTemp >= 0) {
      return (this.metaFinanceira = this.metaInputTemp);
    } else {
      return (this.metaFinanceira = 0);
    }
  }

  enviarConfigInicial() {
    // um metodo para salvar os valores dos inputs e mandar para a service

    this.configService.dias = this.diasMeta;
    this.configService.meta = this.metaFinanceira;
  }

  ngOnInit(): void {}
}

