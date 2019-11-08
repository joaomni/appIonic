import { Component } from '@angular/core';
import { PesoHomemService } from './services/peso-homem.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private altura:string;
  private resultado:number;

  constructor(private peso: PesoHomemService) {}

  calcula(){
    this.resultado = this.peso.calcularPeso(parseFloat(this.altura));
  }

  exibeResultado(){
    return this.resultado;
  }

}
