var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultarEst = "ListaEstudiantes.php";
var apieliminarEst = "BorrarEstudiantes.php";
var apieditarEst = "ActualizarEstudiantes.php";

const myModalEliminarEst = new bootstrap.Modal(document.getElementById('myModalEliminarEst'));
const myModalEditarEst = new bootstrap.Modal(document.getElementById('myModalEditarEst'));
const modalSuccessEst = new bootstrap.Modal(document.getElementById('modalSuccessEst'));

let tablaresultadoEst = document.querySelector('#tablaresultadoEst');

$(document).ready(function () {
    
    cargardatos();
    
});


function cargardatos() {

    var apiurl = apibase + apiconsultarEst;
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


function ajustardatostabla(datosEst){
    console.log("datosEst"+datosEst);
    for (const objetoindividual of datosEst) {
               
       tablaresultadoEst.innerHTML += `
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
    eliminandodatoEst(id);
    myModalEliminarEst.show();
    
}

function eliminandodatoEst(id){
    
    var datosEnviarEst =  { 
        "id":id
        }

        var apiurl = apibase + apieliminarEst;
        $.ajax({
            type: "POST",
            url: apiurl,
            data: JSON.stringify(datosEnviarEst),
            dataType: "json",
            success: function (datosEnviarEst) {
                completeDeleteEst();
                console.log(datosEnviarEst);
    
            },
            error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
            }
        });
    
        function completeDeleteEst(){
            myModalEliminarEst.hide();
            tablaresultadoEst.innerHTML = ``;
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
    

    myModalEditarEst.show();
}

$("#myModalEditarEst").submit(function (e) 
{
    e.preventDefault();

    var datosEditarEst = { 
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
    console.log(datosEditarEst);


    var apiurl = apibase + apieditarEst;
        $.ajax({
            type: "POST",
            url: apiurl,
            data: JSON.stringify(datosEditarEst),
            dataType: "json",
            success: function (datosEditarEst) {
                completeEditEst();
                console.log(datosEditarEst);
            },
            error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
            }

        });

});

function completeEditEst(){
    myModalEditarEst.hide();
    tablaresultadoEst.innerHTML = ``;
    cargardatos();
}


cargardatos();