import { Component, OnInit } from '@angular/core';
import { comentario } from '../models/comentario/comentario.module';
import { festival } from '../models/festival/festival';
import { FestivalesService } from '../services/festivales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-festivales',
  templateUrl: './festivales.page.html',
  styleUrls: ['./festivales.page.scss'],
})
export class FestivalesPage implements OnInit {

  listFestivales: festival[] = [];
  categorias: string[] = [];
  // id: number=5;

  constructor( private festivalesService: FestivalesService, private router: Router) { }

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

  changeRoute(id: number) {
    this.router.navigate(['/', 'festival', id]);
  } 
}
