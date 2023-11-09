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

  textoboton = 'Guardar'

  modeloCurso: Cursos = new Cursos ();

  arregloDatos: Cursos[] = [];

  addAndEdit(){
    this.enviarSolicitudPost();
    this.modeloCurso.usuario = "Patricio Rdz";

    if(this.modeloCurso.id == ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEditar();
      this.limpiar();
    }
  }

  cargaredicion(item: Cursos){
    this.modeloCurso = item;
    console.log(item);
    // this.textoboton = "Modificar";
    
  }    
  limpiar(){
    this.modeloCurso = new Cursos();
    // this.textoboton = "Guardar";
  }
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

  enviarSolicitudPost() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php';
    
    // // Datos que deseas enviar en la solicitud POST
    // const data = {
    //   parametro1: 'valor1',
    //   parametro2: 'valor2'
    //   // Agrega más datos según tus necesidades
    // };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, this.modeloCurso, { headers }).subscribe(
      (response) => {
        // Maneja la respuesta de la API
        console.log('Respuesta de la API:', response);
        this.obtenerDatos();
      },
      (error) => {
        // Maneja los errores de la solicitud
        console.error('Error:', error);
      }
    );
  }

  enviarSolicitudPostEditar(){
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php';
    
    // // Datos que deseas enviar en la solicitud POST
    // const data = {
    //   parametro1: 'valor1',
    //   parametro2: 'valor2'
    //   // Agrega más datos según tus necesidades
    // };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, this.modeloCurso, { headers }).subscribe(
      (response) => {
        // Maneja la respuesta de la API
        console.log('Respuesta de la API:', response);
        this.obtenerDatos();
      },
      (error) => {
        // Maneja los errores de la solicitud
        console.error('Error:', error);
      }
    );
  }
}
