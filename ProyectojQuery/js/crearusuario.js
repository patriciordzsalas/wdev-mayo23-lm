const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearUsr = "InsertarUsuarios.php";


$(document).ready(function () {
  
    $("#modalSuccess").click(function (e) { 
      e.preventDefault();
      //crearUsr();

    });
});


$("#formularioUsr").submit(function (e) { 
    e.preventDefault();

    var datosConsultarUsr ={
      id: $("#id").val() ,     
      name: $("#name").val() ,
      email: $("#email").val() ,
      password: $("#password").val() 

    }   

    var apiurl = apibase + apicrearUsr;
    $.ajax({
        type: "POST" ,
        url: apiurl ,                
        dataType: "json" ,
        data: JSON.stringify(datosConsultarUsr) ,
        success: function (response) {
            $(modalSuccess).show();
            completeInsertUsr();
            console.log(response);
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
        
    });

});

function completeInsertUsr(){
    window.location = 'listarusuarios.html';

}