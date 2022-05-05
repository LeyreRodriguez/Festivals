import { Component, OnInit } from '@angular/core';
import { FestivalesService } from '../../services/festivales.service';

@Component({
  selector: 'app-festivales',
  templateUrl: './festivales.component.html',
})
export class FestivalesComponent implements OnInit {

  items = this.festivalesService.getFestivales();

  festivales = [
    {
      "id": 0,
      "nombre": "Coachella",
      "informacion_larga": "Tras dos años sin poder celebrarse por la pandemia del coronavirus, este 2022 vuelve el festival de Coachella. Los amantes de la música volverán a tener esta cita en Indio (California) los fines de semana del 15 al 17 y del 22 al 24 de abril. Esta misma semana se ha conocido el cartel de los artistas que actuarán esos días, entre ellos, Harry Styles, Kanye West, Billie Eilish y Swedish House Mafia.",
      "informacion_corta": "El Festival de Música y Artes de Coachella Valley es un gran festival de música que se desarrolla durante tres días en la última semana del mes de abril y tiene lugar en Indio, California, Estados Unidos en el Valle de Coachella en el desierto de Colorado",
      "fecha": "15,16,17,22,23,24 de Abril",
      "foto": "assets/img/COACHELLA-2022.jpeg",
      "precio": "559.00$",
      "lugar": "California",
      "categorias": ["música", "Estados Unidos"]
    },
    {
      "id": 1,
      "nombre": "Bio Ritmos",
      "informacion_larga": "La tercera edición de este festival retoma su pulso con lo mejor del folk canario y español. En el marco de Costa Teguise.",
      "informacion_corta": "Folk canario y español",
      "fecha": "30 de Julio",
      "foto": "assets/img/BioRitmos.jpg",
      "precio": "10€",
      "lugar": "Lanzarote",
      "categorias": ["música", "España"]
    },
    {
      "id": 2,
      "nombre": "Vida Records & Friends",
      "informacion_larga": "El ciclo de conciertos Vida Records & Friends se pone en marcha y durante los meses de marzo, abril y mayo llevará a diferentes espacios de la ciudad de Barcelona una programación llena de parejas musicales de calidad.",
      "informacion_corta": "VR&F es un ciclo de conciertos que reúne, en algunas de las salas más importantes de Cataluña",
      "fecha": "24 al 31 de Mayo",
      "foto": "assets/img/VidaRecords.jpg",
      "precio": "10€",
      "lugar": "Barcelona",
      "categorias": ["música", "España"]
    },
    {
      "id": 3,
      "nombre": "Lollapolooza",
      "informacion_larga": "3 días, 5 escenarios y más de 100 bandas de todo el mundo. Cada edición nos trae los mejores shows en vivo, el arte, los más variados sabores y un sinfín de nuevas experiencias.",
      "informacion_corta": "Mejores shows en vivo",
      "fecha": "18,19,20 de Marzo",
      "foto": "assets/img/lollapalooza.jpg",
      "precio": "350$",
      "lugar": "Argentina",
      "categorias": ["música", "Estados Unidos"]
    },
    {
      "id": 4,
      "nombre": "Primavera Sound Festival",
      "informacion_larga": "Primavera Sound es un festival español de música multigénero, que se celebra cada verano en el Parc del Fòrum, en la soleada costa de Barcelona",
      "informacion_corta": "Uno de los festivales más importantes de España",
      "fecha": "9-11 de Junio",
      "foto": "assets/img/primaverSound.jpg",
      "precio": "60€ / dia",
      "lugar": "Porto",
      "categorias": ["música", "España"]
    },
    {
      "id": 5,
      "nombre": "Gran Canaria Sum Festival",
      "informacion_larga": "GRAN CANARIA SUM Festival 2021, presenta su 3ª edición en Las Palmas de Gran Canaria, donde se podrá disfrutar de la música más actual. El festival estará situado en la Institución Ferial de Gran Canaria (INFECAR) - Las Palmas de Gran Canaria. Contaremos con 2 escenarios cubiertos sin esperas entre un concierto y otro, una amplia zona de gastronomía dedicada atender a todos los asistentes, con áreas dedicadas a veganos, celiacos y una nueva zona gourmet, una atractiva zona de relax y distintas áreas temáticas..",
      "informacion_corta": "Festival más importante en Canarias",
      "fecha": "30 de Septiembre y 1 de Octubre",
      "foto": "assets/img/CARTEL-SUM-2022-3-717x1024.jpg",
      "precio": "55.00€",
      "lugar": "Gran Canaria",
      "categorias": ["música", "España"]
    },
    {
      "id": 6,
      "nombre": "Festival del Timple",
      "informacion_larga": "Festival que admira la creación, modificación y utilización de este maravilloso instrumento",
      "informacion_corta": "Festival de timple",
      "foto": "https://i1.wp.com/actualidadtenerife.es/wp-content/uploads/2021/09/Timpleando-La-Palma.jpg?fit=1500%2C2121&ssl=1",
      "fecha": "24/3/2023",
      "precio": " 5€",
      "lugar": "La Palma",
      "categorias": ["música", "timple", "España"]
    }
  ];
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
