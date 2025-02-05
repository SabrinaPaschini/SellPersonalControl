import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService{
  
  teste: Array<string> = [''];

  constructor() {}

  mostraTeste() {
    return (this.teste = ['sabrina','Sa']);
  }
}
