import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario01',
  templateUrl: './usuario01.component.html',
  styleUrls: ['./usuario01.component.css']
})
export class Usuario01Component implements OnInit {

  evento: boolean = false;   

  chamarEvento(){

    if (this.evento === false){
      this.evento = true;
    }else {
      this.evento = false
    }
  }

  constructor() { }

  testedelista: number = 0 ; 
  addPreco: number[] = [];
  preco: number = 0; 


  adicionaLista(

  ){
    this.addPreco.push(this.testedelista)
    this.testedelista = 0 ; 
  }

   

  
  

  ngOnInit(): void {
    
  }
}

 



