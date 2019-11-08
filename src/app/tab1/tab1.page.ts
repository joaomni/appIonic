import { Component } from '@angular/core';
import { PesoHomemService } from './services/peso-homem.service';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private altura:string;
  private resultado:number;
  private allOld:number;

  constructor(private peso: PesoHomemService) {}

  calcula(){
    this.resultado = this.peso.calcularPeso(parseFloat(this.altura));



    var sliding = document.createElement('ion-item-sliding');
    var item = document.createElement('ion-item');
    var label = document.createElement('ion-label');
    var text = document.createTextNode(String(this.resultado));
    label.appendChild(text);
    item.appendChild(label);
    sliding.appendChild(item);

    var tudo = document.querySelector('#lista');

    tudo.appendChild(sliding);
    
  }

  exibeResultado(){
    return this.resultado;
  }

}
