var apibase = "https://paginas-web-cr.com/ApiPHP/apis/"
var apicrearEst = "InsertarEstudiantes.php";

const modalSuccessEst = new bootstrap.Modal(document.getElementById('modalSuccessEst'));

$(document).ready(function () {

  $("#crearestudiante").click(function (e) { 
    e.preventDefault();
    //crearEst();

  });
});



$("#formularioEst").submit(function (e) { 
    e.preventDefault();

    var datosEst ={    
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
    console.log(datosEst);
    
    
    var apiurl = apibase + apicrearEst;
    $.ajax({
        type: "POST" ,
        url: apiurl ,                
        dataType: "json" ,
        data: JSON.stringify(datosEst) ,
        success: function (response) {
            modalSuccessEst.show();
            alert("Ingreso exitoso");
            completeInsertEst();
            console.log(response);
            
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
        
    });

  });


function completeInsertEst(){
    window.location = 'listarestudiantes.html';

}