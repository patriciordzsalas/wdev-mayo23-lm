var formularioEst = document.getElementById('formularioEst');
const modalSuccessEst = new bootstrap.Modal(document.getElementById('modalSuccessEst'))

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearEst = "InsertarEstudiantes.php";

formularioEst.addEventListener('submit', function(e){

    e.preventDefault();
    var datosCrearEst =  { 
        "cedula":document.getElementById('cedula').value ,
        "correoelectronico":document.getElementById('correoelectronico').value ,
        "telefono":document.getElementById('telefono').value ,
        "telefonocelular":document.getElementById('telefonocelular').value ,
        "fechanacimiento":document.getElementById('fechanacimiento').value ,
        "sexo":document.getElementById('sexo').value ,
        "direccion":document.getElementById('direccion').value ,
        "nombre":document.getElementById('nombre').value ,
        "apellidopaterno":document.getElementById('apellidopaterno').value ,
        "apellidomaterno":document.getElementById('apellidomaterno').value ,
        "nacionalidad":document.getElementById('nacionalidad').value ,
        "idCarreras":document.getElementById('idCarreras').value ,
        "usuario":"Patricio Rdz"
        }

    apiurl = apibase + apicrearEst ;
    fetch(apiurl,
    {
        method: 'POST',
        body: JSON.stringify(datosCrearEst)
    })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        modalSuccessEst.show()
        completeInsertEst()
    
    })
    .catch(console.log);

    console.log(datosCrearEst);
    
});

function completeInsertEst(){
    window.location = 'listarestudiantes.html';

}

//apis/InsertarEstudiantes.php
//{ "cedula" : "8128128", 
//"correoelectronico":"marioaje@", 
//"telefono":"1212" , 
//"telefonocelular":"616161", 
//"fechanacimiento": "12-02-2002", 
//"sexo": "Masculino", 
//"direccion": "Mi casa" , 
//"nombre" : "Mari", 
//"apellidopaterno":"1primer", 
//"apellidomaterno": "2segundo", 
//"nacionalidad": "Costa Rica" , 
//"idCarreras": "1", 
//"usuario":"Profesor" }