var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaCurso.php";
var apieliminar = "BorrarCursos.php";
var apieditar = "ActualizarCursos.php"

const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));
const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

let tablaresultado = document.querySelector('#tablaresultado');

$(document).ready(function () {
    
    cargardatos();
});


function cargardatos() {
    var apiurl = apibase + apiconsultar;
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

function ajustardatostabla(datos){
    console.log("datos"+datos);
  for (const objetoindividual of datos) {
      tablaresultado.innerHTML += `
        <tr class="table-primary" >
                           <td scope="row">${objetoindividual.id}</td>
                           <td>${objetoindividual.nombre}</td>
                           <td>${objetoindividual.descripcion}</td>
                           <td>${objetoindividual.tiempo}</td>
                           <td>${objetoindividual.usuario}</td>
                           <td>
                                <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditar('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
                                ||
                                <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarEliminar('${objetoindividual.id}')">Eliminar</a>
                           </td>                              
        </tr>
      `;
  }
}

function mostrarEliminar(id) {
    eliminardato(id);
    myModalEliminar.show();
}

function eliminardato(id) {
    var datosEliminar = {
        "id":id

    }

    apiurl = apibase + apieliminar;
    $.ajax({
        type: "POST",
        url: apiurl,
        data: JSON.stringify(datosEliminar),
        dataType: "json",
        success: function (datosEliminar) {
            completeDelete();
            console.log(datosEliminar);

        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });

    function completeDelete(){
        myModalEliminar.hide();
        tablaresultado.innerHTML = ``;
        cargardatos();
    }
}

cargardatos();



function mostrarEditar(id , nombre , descripcion , tiempo){

$("#id").val(id);
$("#nombre").val(nombre);
$("#descripcion").val(descripcion);
$("#tiempo").val(tiempo);

myModalEditar.show();
}


$("#myModalEditar").submit(function (e) { 
    e.preventDefault();
    
    var datosEditar ={
        id: $("#id").val() ,     
        nombre: $("#nombre").val() ,
        descripcion: $("#descripcion").val() ,
        tiempo: $("#tiempo").val() ,
        usuario: "Patricio Rdz"
    }

        var apiurl = apibase + apieditar;
        $.ajax({
            type: "POST",
            url: apiurl,
            data: JSON.stringify(datosEditar),
            dataType: "json",
            success: function (response) {
                completeEdit();
                console.log(response);
            },
            error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
            }

        });

        function completeEdit() {
            modalSuccess.show();
            myModalEditar.hide();
            tablaresultado.innerHTML = ``
            cargardatos();
            
        }

});


cargardatos();