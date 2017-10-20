//la funcion se ejecutara una vez cargada la pagina
//window.onload= inicializar;
// se declaran las variables globales
var contenedorFormulario = $("formulario");
var refCampos;

var usuario = $('#icon_prefix').val();
var contraseña = $('#icon_lock').val();
var boton= $('#botonIngresar');

var inicializar= function (){
    
    contenedorFormulario.addEventListener("submit", enviarDatosFirebase, false);
    refCampos = firebase.database().ref().child("usuario");
    usuario.keyup(validarUsuario);
    contraseña.keyup(validarUsuario);
    validarUsuario();
}



var enviarDatosFirebase= function (event){
    //alert("esta funcionando");
    event.preventDefault();
    /*push	Agrega a una lista de datos en la base de datos. Cada vez que envías un nodo nuevo a una lista, tu base de datos genera una clave única, como por ejemplo, messages/users/<unique-user-id>/<username>*/
    refCampos.push({
        usuario: event.target.usuario.value,
        contraseña: event.target.contraseña.value
    });
    
    contenedorFormulario.reset();
    
    //iniciaRedireccion();
}



var validarUsuario  = function (){
  if(correo.length != 0 && contraseña.length <= 8){
    //boton.removeClass('disabled');
      alert("ingresa correo");
  }else{
    //boton.addClass('disabled');
      window.location = "views/ubicacion.html";
  }
    

}
 

/*
var iniciaRedireccion =function  (){
    correo = $('#icon_prefix').val();
    contraseña = $('#icon_lock').val();
    boton= $('#botonIngresar');
   

  //var expresionCorreo = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

};
*/
$(document).ready(inicializar);
