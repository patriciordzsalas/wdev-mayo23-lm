var apibase = "https://paginas-web-cr.com/ApiPHP/apis/"
var apicrearEst = "InsertarEstudiantes.php";
var url = apibase + apicrearEst;
const modalSuccessEst = new bootstrap.Modal(document.getElementById('modalSuccessEst'));

$("#formularioEst").submit(function (e) { 
    e.preventDefault();

    var datosEst ={
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
    console.log(datosEst);
    

    $.ajax({
        type: "POST" ,
        url: url ,                
        dataType: "json" ,
        data: JSON.stringify(datosEst) ,
        success: function (datosEst) {
            $(modalSuccessEst).show();
            completeInsertEst()
            console.log(datosEst);
            
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
        
    });

  });


function completeInsertEst(){
    window.location = 'listarestudiantes.html';

}

