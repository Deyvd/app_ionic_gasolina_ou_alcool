import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public precoAlcool: any
  public precoGasolina: any

  public resultado: String = "Resultado"

  calcular() {
    if( this.precoAlcool && this.precoGasolina ) {
      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)
      var calculo = pAlcool / pGasolina
      if (calculo >=0.7) {
        this.resultado = "Melhor usar Gasolina!";
      } else {
        this.resultado = "Melhor utilizar Álcool!"
      } 
    } else {
      this.resultado = "Preencha corretamente os campos!"
    }
  }
}
