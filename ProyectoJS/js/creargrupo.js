var formularioGrp = document.getElementById('formularioGrp');
const modalSuccessGrp = new bootstrap.Modal(document.getElementById('modalSuccessGrp'))

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearGrp = "InsertarCursoInsertarGrupo.php";

formularioGrp.addEventListener('submit', function(e){

    e.preventDefault();
    var datosEnviarGrp =  { 
        "nombre":document.getElementById('nombre').value ,

        }

    apiurl = apibase + apicrearGrp ;
    fetch(apiurl,
    {
        method: 'POST',
        body: JSON.stringify(datosEnviarGrp)
    })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        modalSuccessGrp.show()
        completeInsertGrp()
    
    })
    .catch(console.log);

    console.log(datosEnviarGrp);
    
});

function completeInsertGrp(){
    window.location = 'listargrupo.html';

}

