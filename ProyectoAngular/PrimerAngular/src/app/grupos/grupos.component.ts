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

  modeloGrp: Grupos = new Grupos ();

  arregloDatosGrp: Grupos[] = []

  addAndEdit(){
    this.enviarSolicitudPost();
    this.modeloGrp.nombre = "";

    if(this.modeloGrp.id == ""){
      this.enviarSolicitudPost();
    }else{
      this.enviarSolicitudPostEditar();
      this.limpiar();
    }
  }

  cargaredicion(item: Grupos){
    this.modeloGrp = item;
    console.log(item);
    // this.textoboton = "Modificar";
    
  }

  limpiar(){
    this.modeloGrp = new Grupos();
    // this.textoboton = "Guardar";
  }

  eliminar(item: Grupos){
    this.modeloGrp = item;
    this.enviarSolicitudPostEliminar();
  }


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

enviarSolicitudPost() {
  const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php';
  
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
  this.http.post(url, this.modeloGrp, { headers }).subscribe(
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
  const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php';
  
  // Datos que deseas enviar en la solicitud POST
  const data = {
    id: this.modeloGrp.id,
    
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
  const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php';
  
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
  this.http.post(url, this.modeloGrp, { headers }).subscribe(
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
