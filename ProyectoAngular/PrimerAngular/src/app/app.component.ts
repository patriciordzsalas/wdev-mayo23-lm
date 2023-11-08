import { Component, OnInit } from '@angular/core';
import { Cursos } from './models/cursos';
//import importa librerias o clases
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuestacursos } from './models/respuestacursos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  //atributos
  title = 'PrimerAngular';

  pestanaActiva: string = 'pestana1';
  cambiarPestana(pestana: string){
    this.pestanaActiva = pestana;
  }

  // arregloDatos: Cursos[] = [
  //   {id: "1", nombre:"html5", descripcion: "111", tiempo: "444", usuario: "Patricio Rdz"},
  //   {id: "2", nombre:"css3", descripcion: "112", tiempo: "333", usuario: "Patricio Rdz"},
  //   {id: "3", nombre:"js", descripcion: "113", tiempo: "222", usuario: "Patricio Rdz"},
  //   {id: "4", nombre:"jquery", descripcion: "114", tiempo: "111", usuario: "Patricio Rdz"},
  //   {id: "5", nombre:"bootstrap", descripcion: "115", tiempo: "000", usuario: "Patricio Rdz"}
  // ]

  arregloDatos: Cursos[] = []

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
      this.obtenerDatos();
  }


   obtenerDatos(){
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";


    this.http.get<Respuestacursos>(url).subscribe(
      (response) => {
        this.arregloDatos = response.data;
        console.log(response.data);
      },
      (error) =>{
        console.error('Error en la carga de datos', error);
      }
    )

  }

}

