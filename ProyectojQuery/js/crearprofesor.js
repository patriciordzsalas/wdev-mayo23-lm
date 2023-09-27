const modalSuccessProf = new bootstrap.Modal(document.getElementById('modalSuccessProf'))

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearProf = "InsertarProfesores.php";

$(document).ready(function () {
  
    $("#crear").click(function (e) { 
      e.preventDefault();
      //crear();

    });
});
$("#formularioProf").submit(function (e) { 
    e.preventDefault();

    var datosProf ={
      id: $("#id").val() ,     
      cedula: $("#cedula").val() ,
      correoelectronico: $("#correoelectronico").val() ,
      telefonocelular: $("#telefonocelular").val() ,
      fechanacimiento: $("#fechanacimiento").val() ,     
      sexo: $("#sexo").val() ,
      direccion: $("#direccion").val() ,
      nombre: $("#nombre").val() ,
      apellidopaterno: $("#apellidopaterno").val() ,     
      apellidomaterno: $("#apellidomaterno").val() ,
      nacionalidad: $("#nacionalidad").val() ,
      idCarrera: $("#idCarreras").val() ,
      usuario: "Patricio Rdz"
    }
    console.log(datosProf);
    
    var url = apibase + apicrearProf;
    $.ajax({
        type: "POST" ,
        url: url ,                
        dataType: "json" ,
        data: JSON.stringify(datosProf) ,
        success: function (datosProf) {
            $(modalSuccessProf).show();
            alert("Ingreso exitoso");
            completeInsertProf()
            console.log(datosProf);
            
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
        
    });

  });


function completeInsertProf(){
    window.location = 'listarprofesores.html';

}