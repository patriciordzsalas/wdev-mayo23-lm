const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apienviarpss = "SendPassword.php";

$(document).ready(function () {
  
    $("#modalSuccess").click(function (e) { 
      e.preventDefault();
      //crearPss();

    });
});

$("#formularioPss").submit(function (e) { 
    e.preventDefault();

    var datosEnviarPss = { 
        email: $("#email").val() 
    
    }

    var apiurl = apibase + apienviarpss;
    $.ajax({
        type: "POST" ,
        url: apiurl ,                
        dataType: "json" ,
        data: JSON.stringify(datosEnviarPss) ,
        success: function (response) {
            alert("Contraseña enviada")
            modalSuccess.show();
            console.log(response);
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
        
    });

});    
