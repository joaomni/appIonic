import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularIMCService {

  constructor() { }

  calcularIMC(peso, altura){
    return peso/(altura * altura);
  }
}
