var formularioProf = document.getElementById('formularioProf');
const modalSuccessProf = new bootstrap.Modal(document.getElementById('modalSuccessProf'))

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearProf = "InsertarProfesores.php";

formularioProf.addEventListener('submit', function(e){

    e.preventDefault();
    var datosCrearProf =  { 
        "id":document.getElementById('id').value ,
        "cedula":document.getElementById('cedula').value ,
        "correoelectronico":document.getElementById('correoelectronico').value ,
        "telefono":document.getElementById('telefono').value ,
        "telefonocelular":document.getElementById('telefonocelular').value ,
        "fechanacimiento":document.getElementById('fechanacimiento').value ,
        "sexo":document.getElementById('sexo').value ,
        "direccion":document.getElementById('direccion').value ,
        "nombre":document.getElementById('nombre').value ,
        "apellidopaterno":document.getElementById('apellidopaterno').value ,
        "apellidomaterno":document.getElementById('apellidomaterno').value ,
        "idCarreras":document.getElementById('idCarreras').value ,
        "usuario":"Patricio Rdz" ,
        "nacionalidad":document.getElementById('nacionalidad').value ,
        
        }

    apiurl = apibase + apicrearProf ;
    fetch(apiurl,
    {
        method: 'POST',
        body: JSON.stringify(datosCrearProf)
    })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        modalSuccessProf.show()
        completeInsertProf()
    
    })
    .catch(console.log);

    console.log(datosCrearProf);
    
});

function completeInsertProf(){
    window.location = 'listarprofesores.html';

}

