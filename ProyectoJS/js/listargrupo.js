var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultarGrp = "ListaGrupo.php";
var apieliminarGrp = "BorrarGrupo.php";
var apieditarGrp = "ActualizarGrupo.php"

const myModalEliminarGrp = new bootstrap.Modal(document.getElementById('myModalEliminarGrp'));
const myModalEditarGrp = new bootstrap.Modal(document.getElementById('myModalEditarGrp'));
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

let tablaresultadoGrp = document.querySelector('#tablaresultadoGrp');

function consultardatosGrp(){
    //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
    apiurl = apibase + apiconsultarGrp ;
    fetch(apiurl)
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            //ajustardatostabla
            console.log(datosrespuesta.code) 
            console.log(datosrespuesta.data) 
            ajustardatostablaGrp(datosrespuesta.data) 
        })
    .catch(console.log);
}

function ajustardatostablaGrp(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {

    //    console.log(objetoindividual.nombre);

       tablaresultadoGrp.innerHTML += `
            <tr class="table-primary" >
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.nombre}</td>
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModalGrp('${objetoindividual.id}','${objetoindividual.nombre}')">Editar</a>
                                    ||
                                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                                </td>                              
            </tr>
       `;
    }


   
           
}

function mostrarModal(id){

    eliminandodato(id);

    myModalEliminarGrp.show();
    
}

function eliminandodato(id){
    
    var datosEnviarGrp =  { 
        "id":id
        }
    apiurl = apibase + apieliminarGrp ;
    fetch(apiurl,
        {
            method: 'POST',
            body: JSON.stringify(datosEnviarGrp)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            completeDeleteGrp()

        })
    .catch(console.log);
}

function completeDeleteGrp(){
    myModalEliminarGrp.hide();
    tablaresultadoGrp.innerHTML = ``;
    consultardatosGrp();
    
}

function mostrarEditarModalGrp(id,nombre){
    document.getElementById("id").value = id;
    document.getElementById("nombre").value = nombre;

    myModalEditarGrp.show();
}
//crear una funcion parecida a la del submit
//cambiar el metodo de insertar por el de editar
//crear una funcion similar a completeDelete

formularioGrp.addEventListener('submit', function(e)
{
    e.preventDefault();
    //alert('salvando');

    var datosEditarGrp = { 
        "id":document.getElementById('id').value ,
        "nombre":document.getElementById('nombre').value 
    }

    console.log(datosEditarGrp)
    apiurl = apibase + apieditarGrp ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEditarGrp)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        //alert("Salvado")
            modalSuccess.show()
             completeEditGrp()
        })
    .catch(console.log);

   
});

function completeEditGrp(){
    myModalEditarGrp.hide();
    tablaresultadoGrp.innerHTML = ``;
    consultardatosGrp();
}

consultardatosGrp();