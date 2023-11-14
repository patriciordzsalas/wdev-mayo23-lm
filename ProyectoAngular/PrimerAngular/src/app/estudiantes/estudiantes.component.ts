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

  modeloEst: Estudiantes = new Estudiantes ();

  addAndEdit(){
    this.enviarSolicitudPost();
    this.modeloEst.usuario = "Patricio Rdz";

    if(this.modeloEst.id == ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEditar();
      this.limpiar();
    }
  }

  cargaredicion(item: Estudiantes){
    this.modeloEst = item;
    console.log(item);
    // this.textoboton = "Modificar";
    
  }    

  limpiar(){
    this.modeloEst = new Estudiantes();
    // this.textoboton = "Guardar";
  }

  eliminar(item: Estudiantes){
    this.modeloEst = item;
    this.enviarSolicitudPostEliminar();
  }

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
enviarSolicitudPost() {
  const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php';
  
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
  this.http.post(url, this.modeloEst, { headers }).subscribe(
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
  const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php';
  
  // Datos que deseas enviar en la solicitud POST
  const data = {
    id: this.modeloEst.id,
    
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
  const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php';
  
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
  this.http.post(url, this.modeloEst, { headers }).subscribe(
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
