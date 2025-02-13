import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  
  dias: number = 0;
  meta: number = 0;
 
  constructor() {}

  salvarConfiguracao(diasMeta:number, metaFinanceira:number):void {
    // um metodo para salvar os valores dos inputs e mandar para a service

    this.dias = diasMeta 
    this.meta = metaFinanceira
  }

   // Métodos para acessar os dados salvos
   getDias(): number {
    return this.dias;    // Retorna o valor armazenado de dias
  }

  getMeta(): number {
    return this.meta;    // Retorna o valor armazenado de meta
  }
  
}