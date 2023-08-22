var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultarProf = "ListaProfesores.php";
var apieliminarProf = "BorrarProfesores.php";
var apieditarProf = "ActualizarProfesores.php";

const myModalEliminarProf = new bootstrap.Modal(document.getElementById('myModalEliminarProf'));
const myModalEditarProf = new bootstrap.Modal(document.getElementById('myModalEditarProf'));
const modalSuccessProf = new bootstrap.Modal(document.getElementById('modalSuccessProf'));

let tablaresultadoProf = document.querySelector('#tablaresultadoProf');

function consultardatosProf(){
    //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
    apiurl = apibase + apiconsultarProf ;
    fetch(apiurl)
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            //ajustardatostabla
            console.log(datosrespuesta.code) 
            console.log(datosrespuesta.data) 
            ajustardatostabla(datosrespuesta.data) 
        })
    .catch(console.log);
}

function ajustardatostabla(datos){
    console.log("datosEst"+datos);
    for (const objetoindividual of datos) {
        //apis/ListaProfesoresId.php
        //"id": "144", 
        //"cedula": "3432", 
        //"correoelectronico": "adada", 
        //"telefono": "dada", 
        //"telefonocelular": "dada", 
        //"fechanacimiento": "2023-02-23", 
        //"sexo": "adad", 
        //"direccion": "adad", 
        //"nombre": "dada", 
        //"apellidopaterno": "dada", 
        //"apellidomaterno": "dadad", 
        //"idCarreras": "0", 
        //"usuario": "Martin Mendez", 
        //"nacionalidad": "adad" } ] }
                
       tablaresultadoProf.innerHTML += `
            <tr class="table-primary" >
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.cedula}</td>
                                <td>${objetoindividual.correoelectronico}</td>
                                <td>${objetoindividual.telefono}</td>
                                <td>${objetoindividual.telefonocelular}</td>
                                <td>${objetoindividual.fechanacimiento}</td>
                                <td>${objetoindividual.sexo}</td>
                                <td>${objetoindividual.direccion}</td>
                                <td>${objetoindividual.nombre}</td>
                                <td>${objetoindividual.apellidopaterno}</td>
                                <td>${objetoindividual.apellidomaterno}</td>
                                <td>${objetoindividual.idCarreras}</td>
                                <td>${objetoindividual.usuario}</td>
                                <td>${objetoindividual.nacionalidad}</td>
                                
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModalProf('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
                                    ||
                                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                                </td>                              
            </tr>
       `;
    }


   
           
}

function mostrarModal(cedula){

    eliminandodatoProf(cedula);

    myModalEliminarProf.show();
    
}

function eliminandodatoProf(id){
    
    var datosEnviarProf =  { 
        "id":id
        }
    apiurl = apibase + apieliminarProf ;
    fetch(apiurl,
        {
            method: 'POST',
            body: JSON.stringify(datosEnviarProf)
        })
    .then(estructura => estructura.json())
    .then((datosrespuestaEst) => {
            completeDeleteProf()

        })
    .catch(console.log);
}

function completeDeleteProf(){
    myModalEliminarProf.hide();
    tablaresultadoProf.innerHTML = ``;
    consultardatosProf();
    
}

function mostrarEditarModalProf(id,cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nombre,apellidopaterno,apellidomaterno,idCarreras,usuario,nacionalidad,){
    document.getElementById("id").value = id;
    document.getElementById("cedula").value = cedula;
    document.getElementById("correoelectronico").value = correoelectronico;
    document.getElementById("telefono").value = telefono;
    document.getElementById("telefonocelular").value = telefonocelular;
    document.getElementById("fechanacimiento").value = fechanacimiento;
    document.getElementById("sexo").value = sexo;
    document.getElementById("direccion").value = direccion;
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellidopaterno").value = apellidopaterno;
    document.getElementById("apellidomaterno").value = apellidomaterno;
    document.getElementById("idCarreras").value = idCarreras;
    document.getElementById("nacionalidad").value = nacionalidad 

    myModalEditarProf.show();
}

        //apis/ListaProfesoresId.php
        //"id": "144", 
        //"cedula": "3432", 
        //"correoelectronico": "adada", 
        //"telefono": "dada", 
        //"telefonocelular": "dada", 
        //"fechanacimiento": "2023-02-23", 
        //"sexo": "adad", 
        //"direccion": "adad", 
        //"nombre": "dada", 
        //"apellidopaterno": "dada", 
        //"apellidomaterno": "dadad", 
        //"idCarreras": "0", 
        //"usuario": "Martin Mendez", 
        //"nacionalidad": "adad" } ] }


//crear una funcion parecida a la del submit
//cambiar el metodo de insertar por el de editar
//crear una funcion similar a completeDelete

formularioProf.addEventListener('submit', function(e)
{
    e.preventDefault();
    //alert('salvando');

    var datosEditarProf = { 
        "id":document.getElementById('id').value ,
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
        "idCarreras":document.getElementById('idCarreras').value ,
        "usuario":"Patricio Rdz" ,
        "nacionalidad":document.getElementById('nacionalidad').value ,
        
    }

    console.log(datosEditarProf)
    apiurl = apibase + apieditarProf ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEditarProf)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        //alert("Salvado")
            modalSuccessProf.show()
             completeEditEst()
        })
    .catch(console.log);

   
});

function completeEditProf(){
    myModalEditarProf.hide();
    tablaresultadoProf.innerHTML = ``;
    consultardatosProf();
}

consultardatosProf();