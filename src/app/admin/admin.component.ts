import { Component, Input, OnInit } from '@angular/core';

import { ConfigService } from '../config.service'; // import da service

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  constructor(private configService: ConfigService) {} // lembrar de colocar no parametro

  diasInputTemp: number = 0;
  metaInputTemp: number = 0;
  
  diasMeta: number = 0;
  metaFinanceira: number = 0;

 public meta: number= 0 ;
  
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

  salvarConfiguracao() {

    return this.metaFinanceira = this.configService.metaindividual
  
  }

  ngOnInit(): void {

    
  }
}

