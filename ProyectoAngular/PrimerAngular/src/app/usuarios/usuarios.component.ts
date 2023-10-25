import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../models/usuarios'; 
//import importa librerias o clases
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuestausuarios } from '../models/respuestausuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  title = 'PrimerAngular';

  arregloDatosUsr: Usuarios[] = []

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
      this.obtenerDatos();
  }

  obtenerDatos(){
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaUsuarios.php";


    this.http.get<Respuestausuarios>(url).subscribe(
      (response) => {
        this.arregloDatosUsr = response.data;
        console.log(response.data);
      },
      (error) =>{
        console.error('Error en la carga de datos', error);
      }
    )

  }

}
