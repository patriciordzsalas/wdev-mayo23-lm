var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearProf = "InsertarProfesores.php";

const modalSuccessProf = new bootstrap.Modal(document.getElementById('modalSuccessProf'));

$(document).ready(function () {

});
  
$("#crear").click(function (e) { 

  e.preventDefault();

    var datosProf ={
      "id": $("#id").val() ,     
      "cedula": $("#cedula").val() ,
      "correoelectronico": $("#correoelectronico").val() ,
      "telefono": $("#telefono").val() ,
      "telefonocelular": $("#telefonocelular").val() ,
      "fechanacimiento": $("#fechanacimiento").val() ,     
      "sexo": $("#sexo").val() ,
      "direccion": $("#direccion").val() ,
      "nombre": $("#nombre").val() ,
      "apellidopaterno": $("#apellidopaterno").val() ,     
      "apellidomaterno": $("#apellidomaterno").val() ,
      "nacionalidad": $("#nacionalidad").val() ,
      "idCarreras": $("#idCarreras").val() ,
      "usuario": "Patricio Rdz"
    }
    console.log(datosProf);

    crearprof(datosProf);

    function crearprof(datosProf) {
      alert("datos enviados");    
      var url = apibase + apicrearProf;
      $.ajax({
          type: "POST" ,
          url: url ,                
          dataType: "json" ,
          data: JSON.stringify(datosProf) ,
          success: function (response) {
              $(modalSuccessProf).show();
              alert("Ingreso exitoso");
              completeInsertProf();
              console.log(response);
              
          },
          error: function ( xhr, textStatus, errorThrown){
              console.log("Error ", errorThrown);
          }
          
      });
    }
});


function completeInsertProf(){
    window.location = 'listarprofesores.html';

}






// var formulario = document.getElementById('formulario');

// var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
// var apicrear = "InsertarProfesores.php";
// const myModalInsertar = new bootstrap.Modal(document.getElementById('myModalInsertar'));
// var urlInsertar = apibase + apicrear;

// $("#btnEnviar").click(function (e) { 
//     e.preventDefault();
    
    


//     var datosEnviar = {
//         "cedula":$("#cedula").val(),
//         "correoelectronico":$("#correoelectronico").val(),
//         "telefono":$("#telefono").val(),
//         "telefonocelular":$("#telefonocelular").val(),
//         "fechanacimiento":$("#fechanacimiento").val(),
//         "sexo":$("#sexo").val(),
//         "direccion":$("#direccion").val(),
//         "nombre":$("#nombre").val(),
//         "apellidopaterno":$("#apellidopaterno").val(),
//         "apellidomaterno":$("#apellidomaterno").val(),
//         "nacionalidad":$("#nacionalidad").val(),
//         "idCarreras":$("#idCarreras").val(),
//         "usuario":$("#usuario").val()
//     }

//     $.ajax({
//         type: "POST",
//         url: urlInsertar,
//         data: JSON.stringify(datosEnviar),
//         dataType: "json",
//         success: function (response) {
//             completeInsert();
//         },
//         error: function (xhr, textStatus, errorThrown) {  
//             console.log("Error: ", errorThrown );
//         }
//     });

// });

// function completeInsert(){
//     myModalInsertar.show();
//     window.location = 'listarprofesores.html';
// }