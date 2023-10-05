var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultarProf = "ListaProfesores.php";
var apieliminarProf = "BorrarProfesores.php";
var apieditarProf = "ActualizarProfesores.php";

const myModalEliminarProf = new bootstrap.Modal(document.getElementById('myModalEliminarProf'));
const myModalEditarProf = new bootstrap.Modal(document.getElementById('myModalEditarProf'));
const modalSuccessProf = new bootstrap.Modal(document.getElementById('modalSuccessProf'));

let tablaresultadoProf = document.querySelector('#tablaresultadoProf');

$(document).ready(function () {
    
    cargardatos();
});

function cargardatos() {
    var apiurl = apibase + apiconsultarProf;
    $.ajax({
        type: "POST",
        url: apiurl,
        dataType: "json",
        success: function (response) {
            ajustardatostabla(response.data);
                 console.log(response);
        },
         error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
        }
    });
}


function ajustardatostabla(datosProf){
    console.log("datosEst"+datosProf);
    for (const objetoindividual of datosProf) {
               
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
                                <td>${objetoindividual.nacionalidad}</td>
                                <td>${objetoindividual.idCarreras}</td>
                                <td>${objetoindividual.usuario}</td>
                                
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.cedula}','${objetoindividual.correoelectronico}','${objetoindividual.telefono}','${objetoindividual.telefonocelular}','${objetoindividual.fechanacimiento}','${objetoindividual.sexo}','${objetoindividual.direccion}','${objetoindividual.nombre}','${objetoindividual.apellidopaterno}','${objetoindividual.apellidomaterno}','${objetoindividual.nacionalidad}','${objetoindividual.idCarreras}','${objetoindividual.usuario}')">Editar</a>
                                    ||
                                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                                </td>                              
            </tr>
       `;
    }
   
           
}
   
function mostrarModal(id){
    eliminandodatoProf(id);
    myModalEliminarProf.show();
    
}

function eliminandodatoProf(id){
    
    var datosEnviarProf =  { 
        "id":id
        }
        apiurl = apibase + apieliminarProf;
        $.ajax({
            type: "POST",
            url: apiurl,
            data: JSON.stringify(datosEnviarProf),
            dataType: "json",
            success: function (datosEnviarProf) {
                completeDeleteProf();
                console.log(datosEnviarProf);
    
            },
            error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
            }
        });
    
        function completeDeleteProf(){
            myModalEliminarProf.hide();
            tablaresultadoProf.innerHTML = ``;
            cargardatos();
            
        }
    }
    
    cargardatos();


function mostrarEditarModal(id,cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nombre,apellidopaterno,apellidomaterno,nacionalidad,idCarreras){
    
    $("#id").val(id) ,     
    $("#cedula").val(cedula) ,3
    $("#telefono").val(telefono) ,
    $("#correoelectronico").val(correoelectronico) ,
    $("#telefonocelular").val(telefonocelular) ,
    $("#fechanacimiento").val(fechanacimiento) ,     
    $("#sexo").val(sexo) ,
    $("#direccion").val(direccion) ,
    $("#nombre").val(nombre) ,
    $("#apellidopaterno").val(apellidopaterno) ,     
    $("#apellidomaterno").val(apellidomaterno) ,
    $("#nacionalidad").val(nacionalidad) ,
    $("#idCarreras").val(idCarreras) ,
      "Patricio Rdz"
    

      myModalEditarProf.show();
}


$("#myModalEditarProf").submit(function (e) 
{
    e.preventDefault();

    var datosEditarProf = { 
        id: $("#id").val() ,
        cedula: $("#cedula").val() ,
        correoelectronico: $("#correoelectronico").val() ,
        telefono: $("#telefono").val() ,
        telefonocelular: $("#telefonocelular").val() ,
        fechanacimiento: $("#fechanacimiento").val() ,
        sexo: $("#sexo").val() ,
        direccion: $("#direccion").val() ,
        nombre: $("#nombre").val() ,
        apellidopaterno: $("#apellidopaterno").val() ,
        apellidomaterno: $("#apellidomaterno").val() ,
        nacionalidad: $("#nacionalidad").val() ,
        idCarreras: $("#idCarreras").val() ,
        usuario:"Patricio Rdz"
    }
    console.log(datosEditarProf);


    var apiurl = apibase + apieditarProf;
        $.ajax({
            type: "POST",
            url: apiurl,
            data: JSON.stringify(datosEditarProf),
            dataType: "json",
            success: function (datosEditarProf) {
                completeEditProf();
                console.log(datosEditarProf);
            },
            error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
            }

        });

});

function completeEditProf(){
    modalSuccessProf.show();
    myModalEditarProf.hide();
    tablaresultadoProf.innerHTML = ``;
    cargardatos();
}


cargardatos();