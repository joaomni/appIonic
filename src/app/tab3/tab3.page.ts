import { Component } from '@angular/core';
import { CalcularIMCService } from './services/calcular-imc.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private imc: CalcularIMCService) {}

  private peso:string;
  private altura:string;
  private resultado:number;

  calcula(){
    this.resultado = this.imc.calcularIMC(parseFloat(this.peso),parseFloat(this.altura));
  }

  exibeIMC(){
    return this.resultado;
  }
}
