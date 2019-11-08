import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesoMulherService {

  constructor() { }

  calcularPeso(altura){
    return (altura - 100) * 0.85;
  }

}
