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

  arregloDatosUsr: Usuarios[] = [];

  modeloUsr: Usuarios = new Usuarios ();

  addAndEdit(){
    this.enviarSolicitudPost();
    this.modeloUsr.name = "";

    if(this.modeloUsr.id == ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEditar();
      this.limpiar();
    }
  }

  cargaredicion(item: Usuarios){
    this.modeloUsr = item;
    console.log(item);
    // this.textoboton = "Modificar";
    
  }    
  limpiar(){
    this.modeloUsr = new Usuarios();
    // this.textoboton = "Guardar";
  }

  // eliminar(item: Usuarios){
  //   this.modeloUsr = item;
  //   this.enviarSolicitudPostEliminar();
  // }

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

  enviarSolicitudPost() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarUsuarios.php';
    
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
    this.http.post(url, this.modeloUsr, { headers }).subscribe(
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

  // enviarSolicitudPostEliminar(){
  //   const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php';
    
  //   // Datos que deseas enviar en la solicitud POST
  //   const data = {
  //     id: this.modeloUsr.id,
      
  //     // Agrega más datos según tus necesidades
  //   };

  //   // Configura las cabeceras para la solicitud POST
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
  //   });

  //   // Realiza la solicitud POST
  //   this.http.post(url, data, { headers }).subscribe(
  //     (response) => {
  //       // Maneja la respuesta de la API
  //       console.log('Respuesta de la API:', response);
  //       this.obtenerDatos();
  //     },
  //     (error) => {
  //       // Maneja los errores de la solicitud
  //       console.error('Error:', error);
  //     }
  //   );
  // }

  enviarSolicitudPostEditar(){
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarUsuarios.php';
    
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
    this.http.post(url, this.modeloUsr, { headers }).subscribe(
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
