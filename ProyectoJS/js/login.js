var formularioLogin = document.getElementById('formularioLogin');

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apilogin = "AutenticarUsuario.php";

const modalSuccessLogin = new bootstrap.Modal(document.getElementById('modalSuccessLogin'));

formularioLogin.addEventListener('submit', function(e)
{
    e.preventDefault();

    var datoslogin = { 
        "email":document.getElementById('email').value ,
        "password":document.getElementById('password').value 
    
    }

    apiurl = apibase + apilogin ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datoslogin)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        console.log("Enviado")

        if(datosrespuesta.data == true)
        
         {
            modalSuccessLogin.show()       
            //alert("credenciales correctas");
        }
        else{
            alert("credenciales incorrectas");
        
        }


        })
    .catch(console.log);
    
});