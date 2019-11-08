import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesoHomemService {

  constructor() { }

  calcularPeso(altura){
    return (altura - 100) * 0.9
  }
  
}
