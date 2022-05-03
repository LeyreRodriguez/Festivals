import { Component, OnInit } from '@angular/core';
import { FestivalesService } from '../../services/festivales.service';

@Component({
  selector: 'app-festivales',
  templateUrl: './festivales.component.html',
})
export class FestivalesComponent implements OnInit {

  items = this.festivalesService.getFestivales();

  // constructor(private festivalesService : FestivalesService) { }
  constructor( private festivalesService: FestivalesService) { }


  /*
  Método pensado para obetener nombres para el slader del MainPage

  getNameFestival(ruta:String){
    for(let i = 0; i < this.festivales.length; i++){
      if(this.festivales[i].nombre === ruta){
        return this.festivales[i].nombre;
      }
    }
  }
  */

  // festivales: any;

  ngOnInit(): void {
    this.items = this.festivalesService.getFestivales();

  }
}
