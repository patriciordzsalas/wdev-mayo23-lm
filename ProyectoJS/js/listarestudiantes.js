var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultarEst = "ListaEstudiantes.php";
var apieliminarEst = "BorrarEstudiantes.php";
var apieditarEst = "ActualizarEstudiantes.php";

const myModalEliminarEst = new bootstrap.Modal(document.getElementById('myModalEliminarEst'));
const myModalEditarEst = new bootstrap.Modal(document.getElementById('myModalEditarEst'));
const modalSuccessEst = new bootstrap.Modal(document.getElementById('modalSuccessEst'));

let tablaresultadoEst = document.querySelector('#tablaresultadoEst');

function consultardatosEst(){
    //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
    apiurl = apibase + apiconsultarEst ;
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
                
       tablaresultadoEst.innerHTML += `
            <tr class="table-primary" >
                                <td scope="row">${objetoindividual.cedula}</td>
                                <td>${objetoindividual.correoelectronico}</td>
                                <td>${objetoindividual.telefono}</td>
                                <td>${objetoindividual.telefonocelular}</td>
                                <td>${objetoindividual.fechanacimiento}</td>
                                <td>${objetoindividual.sexo}</td>
                                <td>${objetoindividual.direccion}</td>
                                <td>${objetoindividual.nombre}</td>
                                <td>${objetoindividual.apellidopaterno}</td>
                                <td>${objetoindividual.apellidomaterno}</td>
                                <td>${objetoindividual.nacionalidad}</td>
                                <td>${objetoindividual.idCarreras}</td>
                                <td>${objetoindividual.usuario}</td>
                                
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
                                    ||
                                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                                </td>                              
            </tr>
       `;
    }


   
           
}

function mostrarModal(cedula){

    eliminandodatoEst(cedula);

    myModalEliminarEst.show();
    
}

function eliminandodatoEst(cedula){
    
    var datosEnviarEst =  { 
        "cedula":cedula
        }
    apiurl = apibase + apieliminarEst ;
    fetch(apiurl,
        {
            method: 'POST',
            body: JSON.stringify(datosEnviarEst)
        })
    .then(estructura => estructura.json())
    .then((datosrespuestaEst) => {
            completeDeleteEst()

        })
    .catch(console.log);
}

function completeDeleteEst(){
    myModalEliminarEst.hide();
    tablaresultadoEst.innerHTML = ``;
    consultardatosEst();
    
}

function mostrarEditarModal(cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nombre,apellidopaterno,apellidomaterno,nacionalidad,idCarreras){
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
    document.getElementById("nacionalidad").value = nacionalidad;
    document.getElementById("idCarreras").value = idCarreras;

    myModalEditarEst.show();
}

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


//crear una funcion parecida a la del submit
//cambiar el metodo de insertar por el de editar
//crear una funcion similar a completeDelete

formularioEst.addEventListener('submit', function(e)
{
    e.preventDefault();
    //alert('salvando');

    var datosEditarEst = { 
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

    console.log(datosEditarEst)
    apiurl = apibase + apieditarEst ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEditarEst)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        //alert("Salvado")
            modalSuccessEst.show()
             completeEditEst()
        })
    .catch(console.log);

   
});

function completeEditEst(){
    myModalEditarEst.hide();
    tablaresultadoEst.innerHTML = ``;
    consultardatosEst();
}

consultardatosEst();