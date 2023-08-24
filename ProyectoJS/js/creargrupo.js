var formularioGrp = document.getElementById('formularioGrp');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearGrp = "InsertarGrupo.php";

formularioGrp.addEventListener('submit', function(e){

    e.preventDefault();
    var datosEnviarGrp =  { 
        "id":document.getElementById('id').value ,
        "nombre":document.getElementById('nombre').value 

        }

    apiurl = apibase + apicrearGrp ;
    fetch(apiurl,
    {
        method: 'POST',
        body: JSON.stringify(datosEnviarGrp)
    })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        modalSuccess.show()
        completeInsertGrp()
    
    })
    .catch(console.log);

    console.log(datosEnviarGrp);
    
});

function completeInsertGrp(){
    window.location = 'listargrupo.html';

}

