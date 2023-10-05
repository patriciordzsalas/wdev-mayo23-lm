var url = "https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php";
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))

$(document).ready(function () {
  
    $("#crear").click(function (e) { 
      e.preventDefault();
      //crearCurso();

    });
});
      
$("#formulario").submit(function (e) { 
          e.preventDefault();

          var datosConsultar ={
            id: $("#id").val() ,     
            nombre: $("#nombre").val() ,
            descripcion: $("#descripcion").val() ,
            tiempo: $("#tiempo").val() ,
            usuario: "Patricio Rdz"
          }          

          $.ajax({
              type: "POST" ,
              url: url ,                
              dataType: "json" ,
              data: JSON.stringify(datosConsultar) ,
              success: function (datosConsultar) {
                  modalSuccess.show();
                  alert("Ingreso exitoso");
                  completeInsert();
                  console.log(datosConsultar);
              },
              error: function ( xhr, textStatus, errorThrown){
                  console.log("Error ", errorThrown);
              }
              
      });

});

function completeInsert(){
  modalSuccess.hide();
  window.location = 'listarcurso.html';
}
      
