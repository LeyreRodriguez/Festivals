
import { Component, OnInit } from '@angular/core';
import { buscador } from 'src/app/models/buscador/buscador.module';
import { festival } from 'src/app/models/festival/festival';
import { FestivalesService } from 'src/app/services/festivales.service';
import { MainPageService } from 'src/app/services/main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  listTiposFestivales: buscador[] = [];
  listFestivales: festival[] = [];
  categorias: string[] = [];

  constructor(private festivalesService: FestivalesService) { }

  ngOnInit(): void {
    this.obtenerFestivales();
  }

  obtenerFestivales(){
    this.festivalesService.obtenerFestivales().subscribe(doc => {
      console.log("Holaaaaaa");
      this.listFestivales = [];
      doc.forEach((element: any) => {
        this.listFestivales.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      this.obtenerCategorias();
    })
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
}
