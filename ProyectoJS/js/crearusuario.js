var formularioUsr = document.getElementById('formularioUsr');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearUsr = "InsertarUsuarios.php";

formularioUsr.addEventListener('submit', function(e){

    e.preventDefault();
    var datosEnviarUsr =  { 
        "id":document.getElementById('id').value ,
        "name":document.getElementById('name').value ,
        "email":document.getElementById('email').value ,
        "password":document.getElementById('password').value 

        }

    apiurl = apibase + apicrearUsr ;
    fetch(apiurl,
    {
        method: 'POST',
        body: JSON.stringify(datosEnviarUsr)
    })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        modalSuccess.show()
        completeInsertUsr()
    
    })
    .catch(console.log);

    console.log(datosEnviarUsr);
    
});

function completeInsertUsr(){
    window.location = 'listarusuarios.html';

}


//{"id":"393",
//"name":"Bryan@vlacademy.com",
//"email":"mjimeneze@vlacademy.com",
//"password":"b537a06cf3bcb33206237d7149c27bc3"}
