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

  modeloProf: Profesores = new Profesores ();

  arregloDatosPrs: Profesores[] = []

  addAndEdit(){
    this.enviarSolicitudPost();
    this.modeloProf.usuario = "Patricio Rdz";

    if(this.modeloProf.id == ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEditar();
      this.limpiar();
    }
  }

  cargaredicion(item: Profesores){
    this.modeloProf = item;
    console.log(item);
    // this.textoboton = "Modificar";
    
  }    

  limpiar(){
    this.modeloProf = new Profesores();
    // this.textoboton = "Guardar";
  }

  eliminar(item: Profesores){
    this.modeloProf = item;
    this.enviarSolicitudPostEliminar();
  }

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

enviarSolicitudPost() {
  const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php';
  
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
  this.http.post(url, this.modeloProf, { headers }).subscribe(
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

enviarSolicitudPostEliminar(){
  const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php';
  
  // Datos que deseas enviar en la solicitud POST
  const data = {
    id: this.modeloProf.id,
    
    // Agrega más datos según tus necesidades
  };

  // Configura las cabeceras para la solicitud POST
  const headers = new HttpHeaders({
    'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
  });

  // Realiza la solicitud POST
  this.http.post(url, data, { headers }).subscribe(
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
  const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php';
  
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
  this.http.post(url, this.modeloProf, { headers }).subscribe(
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
