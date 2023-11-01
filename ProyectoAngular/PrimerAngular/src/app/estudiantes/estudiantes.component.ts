import { Component, OnInit } from '@angular/core';
import { Estudiantes } from '../models/estudiantes'; 
//import importa librerias o clases
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuestaestudiantes } from '../models/respuestaestudiantes'; 

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{

  title = 'PrimerAngular';

  // pestanaActiva: string = 'pestana2';
  // cambiarPestana(pestana: string){
  //   this.pestanaActiva = pestana;
  // }

  arregloDatosEst: Estudiantes[] = []

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerDatos();
}

obtenerDatos(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php";


  this.http.get<Respuestaestudiantes>(url).subscribe(
    (response) => {
      this.arregloDatosEst = response.data;
      console.log(response.data);
    },
    (error) =>{
      console.error('Error en la carga de datos', error);
    }
  )

}

}
