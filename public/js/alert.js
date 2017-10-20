// para acceder al servicio de la base de datos
/*var database = firebase.database();
var referencia = database.ref('clientes');
ref.on('value', function (ss){
    var clientes= ss.val();
    console.log(clientes);
});
*/
//una vez que se cargue la pagina llamara la funcion de inicializar
/*window.onload(inicializar);

function inicializar(){
    
}*/
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });