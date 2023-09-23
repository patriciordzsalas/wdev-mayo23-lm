const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearGrp = "InsertarGrupo.php";

$(document).ready(function () {
  
    $("#crear").click(function (e) { 
      e.preventDefault();
      crearGrupo();

    });
});

$("#formularioGrp").submit(function (e) { 
    e.preventDefault();

    var datosConsultar ={
      id: $("#id").val() ,     
      nombre: $("#nombre").val() 

    }   

    var apiurl = apibase + apicrearGrp;
    $.ajax({
        type: "POST" ,
        url: apiurl ,                
        dataType: "json" ,
        data: JSON.stringify(datosConsultar) ,
        success: function (datosConsultar) {
            $(modalSuccess).show();
            completeInsertGrp();
            console.log(datosConsultar);
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
        
});

});


function completeInsertGrp(){
    window.location = 'listargrupo.html';

}