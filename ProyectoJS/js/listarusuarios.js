var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultarUsr = "ListaUsuarios.php";
var apieditarUsr = "ActualizarUsuarios.php"

const myModalEditarUsr = new bootstrap.Modal(document.getElementById('myModalEditarUsr'));
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

let tablaresultadoUsr = document.querySelector('#tablaresultadoUsr');

function consultardatos(){
    //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
    apiurl = apibase + apiconsultarUsr ;
    fetch(apiurl)
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            //ajustardatostabla
            console.log(datosrespuesta.code) 
            console.log(datosrespuesta.data) 
            ajustardatostablaUsr(datosrespuesta.data) 
        })
    .catch(console.log);
}

function ajustardatostablaUsr(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
    //{"id":"393",
//"name":"Bryan@vlacademy.com",
//"email":"mjimeneze@vlacademy.com",
//"password":"b537a06cf3bcb33206237d7149c27bc3"}

       tablaresultadoUsr.innerHTML += `
            <tr class="table-primary" >
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.name}</td>
                                <td>${objetoindividual.email}</td>
                                <td>${objetoindividual.password}</td>
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.name}','${objetoindividual.email}','${objetoindividual.password}')">Editar</a>
                                    
                                </td>                              
            </tr>
       `;
    }


   
           
}

function mostrarEditarModal(id,name,email,password){
    document.getElementById("id").value = id;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("password").value = password;

    myModalEditarUsr.show();
}
//crear una funcion parecida a la del submit
//cambiar el metodo de insertar por el de editar
//crear una funcion similar a completeDelete

formularioUsr.addEventListener('submit', function(e)
{
    e.preventDefault();
    //alert('salvando');

    var datosEditarUsr = { 
        "id":document.getElementById('id').value ,
        "name":document.getElementById('name').value ,
        "email":document.getElementById('email').value ,
        "password":document.getElementById('password').value ,
    
    }

    console.log(datosEditarUsr)
    apiurl = apibase + apieditarUsr ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEditarUsr)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        //alert("Salvado")
            modalSuccess.show()
             completeEditUsr()
        })
    .catch(console.log);

   
});

function completeEditUsr(){
    myModalEditarUsr.hide();
    tablaresultadoUsr.innerHTML = ``;
    consultardatos();
}

function sendpassword(){
   /////
}

consultardatos();