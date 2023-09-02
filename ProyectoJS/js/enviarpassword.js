var formularioPss = document.getElementById('formularioPss');

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apienviarpss = "SendPassword.php";

formularioPss.addEventListener('submit', function(e)
{
    e.preventDefault();

    var datosEnviarPss = { 
        "email":document.getElementById('email').value 
    
    }

    apiurl = apibase + apienviarpss ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEnviarPss)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        alert("Enviado")
            modalSuccess.show()
             completePss()
        })
    .catch(console.log);
    
});