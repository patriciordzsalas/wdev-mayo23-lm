var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultarGrp = "ListaGrupo.php";
var apieliminarGrp = "BorrarGrupo.php";
var apieditarGrp = "ActualizarGrupo.php"

const myModalEliminarGrp = new bootstrap.Modal(document.getElementById('myModalEliminarGrp'));
const myModalEditarGrp = new bootstrap.Modal(document.getElementById('myModalEditarGrp'));
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

let tablaresultadoGrp = document.querySelector('#tablaresultadoGrp');

$(document).ready(function () {
    
    cargardatos();
});

function cargardatos(){
    //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
    apiurl = apibase + apiconsultarGrp ;
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

    //    console.log(objetoindividual.nombre);

       tablaresultadoGrp.innerHTML += `
            <tr class="table-primary" >
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.nombre}</td>
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModalGrp('${objetoindividual.id}','${objetoindividual.nombre}')">Editar</a>
                                    ||
                                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                                </td>                              
            </tr>
       `;
    }


   
           
}

function mostrarModal(id){
    eliminandodato(id);
    myModalEliminarGrp.show();   
}

function eliminandodato(id){
    
    var datosEnviarGrp =  { 
        "id":id
        }
    apiurl = apibase + apieliminarGrp ;
    $.ajax({
        type: "POST",
        url: apiurl,
        data: JSON.stringify(datosEnviarGrp),
        dataType: "json",
        success: function (datosEnviarGrp) {
            completeDeleteGrp();
            console.log(datosEnviarGrp);

        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });

    function completeDeleteGrp(){
        myModalEliminarGrp.hide();
        tablaresultadoGrp.innerHTML = ``;
        cargardatos();
    }
}

function mostrarEditarModalGrp(id , nombre){

    $("#id").val(id);
    $("#nombre").val(nombre);
    
    myModalEditarGrp.show();
}


$("#myModalEditarGrp").submit(function (e) { 
    e.preventDefault();
    
    var datosEditarGrp ={
        id: $("#id").val() ,     
        nombre: $("#nombre").val() 

    }

        var apiurl = apibase + apieditarGrp;
        $.ajax({
            type: "POST",
            url: apiurl,
            data: JSON.stringify(datosEditarGrp),
            dataType: "json",
            success: function (datosEditarGrp) {
                completeEditGrp();
                console.log(datosEditarGrp);
            },
            error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
            }

        });

        function completeEditGrp() {
            myModalEditarGrp.hide();
            tablaresultadoGrp.innerHTML = ``
            cargardatos();
            
        }

});


cargardatos();