import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  
  teste:string ='';

  constructor() {}

  mostraTeste() {
    this.teste = 'outro valor para a variavel';
  }

  diasTrabalhados(){

  }

}

