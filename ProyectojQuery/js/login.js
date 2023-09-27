var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apilogin = "AutenticarUsuario.php";

const modalSuccessLogin = new bootstrap.Modal(document.getElementById('modalSuccessLogin'));

$(document).ready(function () {
  
    $("#modalSuccessLogin").click(function (e) { 
      e.preventDefault();
    

    });
});

$("#formularioLogin").submit(function (e) { 
    e.preventDefault();

    var datoslogin ={
        email: $("#email").val() ,     
        password: $("#password").val() 

      }          

      var url = apibase + apilogin;
      $.ajax({
          type: "POST" ,
          url: url ,                
          dataType: "json" ,
          data: JSON.stringify(datoslogin) ,
          success: function (response) {
              console.log(response);
          },
          error: function ( xhr, textStatus, errorThrown){
              console.log("Error ", errorThrown);
          }          
          
          
  });

        if(datoslogin.data = true)
        
        {
             modalSuccessLogin.show()       

        }
        else{
             alert("credenciales incorrectas");
        }

});


    
