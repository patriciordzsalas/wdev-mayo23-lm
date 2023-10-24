import { Component, OnInit } from '@angular/core';
import { Grupos } from '../models/grupos'; 
//import importa librerias o clases
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuetagrupos } from '../models/respuetagrupos';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit{

  title = 'PrimerAngular';

  arregloDatosGrp: Grupos[] = []

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerDatos();
}

obtenerDatos(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php";


  this.http.get<Respuetagrupos>(url).subscribe(
    (response) => {
      this.arregloDatosGrp = response.data;
      console.log(response.data);
    },
    (error) =>{
      console.error('Error en la carga de datos', error);
    }
  )

}

}
