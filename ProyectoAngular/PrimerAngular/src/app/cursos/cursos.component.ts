import { Component, OnInit } from '@angular/core';
import { Cursos } from '../models/cursos';
//import importa librerias o clases
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuestacursos } from '../models/respuestacursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  title = 'PrimerAngular';

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
