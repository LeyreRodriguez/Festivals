import { Component, OnInit } from '@angular/core';
import { buscador } from 'src/app/models/buscador/buscador.module';
import { MainPageService } from 'src/app/services/main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  listTiposFestivales: buscador[] = [];
  constructor(private mainPageService: MainPageService) { }

  ngOnInit(): void {
    this.obtenerCFestivales();
  }

  obtenerCFestivales(){
    this.mainPageService.obtenerFestivales().subscribe(doc => {
      this.listTiposFestivales = [];
      doc.forEach((element: any) => {
        this.listTiposFestivales.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.listTiposFestivales);
    })
  }
}
