import { Component, OnInit } from '@angular/core';
import { comentario } from 'src/app/models/comentario/comentario.module';
import { festival } from 'src/app/models/festival/festival';
import { FestivalesService } from '../../services/festivales.service';

@Component({
  selector: 'app-festivales',
  templateUrl: './festivales.component.html',
})
export class FestivalesComponent implements OnInit {

  listFestivales: festival[] = [];
  categorias: string[] = [];

  constructor( private festivalesService: FestivalesService) { }

  ngOnInit(): void {
    this.obtenerFestivales();
  }

  obtenerCategorias(){
    this.categorias = [];
    for (var val of this.listFestivales) {
      for(var cat of val.categorias){
        if(this.categorias.indexOf(cat) == -1){
          this.categorias.push(cat);
        }
      }
    }
  }

  obtenerFestivales(){
    this.festivalesService.obtenerFestivales().subscribe(doc => {
      this.listFestivales = [];
      doc.forEach((element: any) => {
        this.listFestivales.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      this.obtenerCategorias();
      console.log(this.listFestivales);
    })
  }
}
