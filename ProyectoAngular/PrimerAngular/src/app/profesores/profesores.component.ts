import { Component, OnInit } from '@angular/core';
import { Profesores } from '../models/profesores'; 
//import importa librerias o clases
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuestaprofesores } from '../models/respuestaprofesores'; 

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{

  title = 'PrimerAngular';

  arregloDatosPrs: Profesores[] = []

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerDatos();
}

obtenerDatos(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php";


  this.http.get<Respuestaprofesores>(url).subscribe(
    (response) => {
      this.arregloDatosPrs = response.data;
      console.log(response.data);
    },
    (error) =>{
      console.error('Error en la carga de datos', error);
    }
  )

}

}
