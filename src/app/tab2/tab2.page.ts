import { Component } from '@angular/core';
import { PesoMulherService } from './services/peso-mulher.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private altura:string;
  private resultado:number;

  constructor(private peso: PesoMulherService) {}

  calcula(){
    this.resultado = this.peso.calcularPeso(parseFloat(this.altura));
  }

  exibeResultado(){
    return this.resultado;
  }
}
