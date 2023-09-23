var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultarUsr = "ListaUsuarios.php";
var apieditarUsr = "ActualizarUsuarios.php";

const myModalEditarUsr = new bootstrap.Modal(document.getElementById('myModalEditarUsr'));
//const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

let tablaresultadoUsr = document.querySelector('#tablaresultadoUsr');

$(document).ready(function () {
    
    cargardatos();

});


function cargardatos(){
 
    var apiurl = apibase + apiconsultarUsr ;
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


       tablaresultadoUsr.innerHTML += `
            <tr class="table-primary" >
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.name}</td>
                                <td>${objetoindividual.email}</td>
                                <td>${objetoindividual.password}</td>
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.name}','${objetoindividual.email}','${objetoindividual.password}')">Editar</a>
                                    
                                </td>                              
            </tr>
       `;
    }


   
           
}

function mostrarEditarModal(id, name, email, password){

    $("#id").val(id);
    $("#name").val(name);
    $("#email").val(email);
    $("#password").val(password);
    
    myModalEditarUsr.show();
}


$("#btnEnviar").submit(function (e) { 
    e.preventDefault();
    
    var datosEditarUsr ={
        "name": $("#name").val() ,
        "password": $("#password").val() ,
        "id": $("#id").val() 

    }
    console.log(datosEditarUsr);

        var apiurl = apibase + apieditarUsr;
        $.ajax({
            type: "POST",
            url: apiurl,
            data: JSON.stringify(datosEditarUsr),
            dataType: "json",
            success: function (response) {
                completeEditUsr();
                console.log(response);
            },
            error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
            }

        });

});

function completeEditUsr() {
    myModalEditarUsr.hide();
    tablaresultadoUsr.innerHTML = ``;
    cargardatos();
    
}

cargardatos();