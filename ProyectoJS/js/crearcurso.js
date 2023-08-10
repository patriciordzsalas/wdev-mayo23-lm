var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))


formulario.addEventListener('submit', function(e){

    e.preventDefault();
    modalSuccess.show();
});


//apis/InsertarCursos.php
//{   
//"nombre":"React 22", 
//"descripcion":"React Junior", 
//"tiempo":"10 Meses", 
//"usuario":"profesor Mario" }