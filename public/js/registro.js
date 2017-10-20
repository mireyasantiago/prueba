//la funcion se ejecutara una vez cargada la pagina
window.onload= inicializar;
// se declaran las variables globales
var contenedorFormulario = document.getElementById("formulario");
var refCampos;
var correo = document.getElementById("icon_prefix").value;
var contraseña =document.getElementById("icon_lock").value;
var boton= document.getElementById('botonIngresar');
var botonGoogle = document.getElementById("botonGoog");

function inicializar(){
    
    contenedorFormulario.addEventListener("submit", enviarDatosFirebase, false);
    refCampos = firebase.database().ref().child("usuario");
    
}
function enviarDatosFirebase(event){
    //alert("esta funcionando");
    event.preventDefault();
    /* push	Agrega a una lista de datos en la base de datos. Cada vez que envías un nodo nuevo a una lista, tu base de datos genera una clave única, como por ejemplo, messages/users/<unique-user-id>/<username>*/
    refCampos.push({
        correo: event.target.correo.value,
        contraseña: event.target.contraseña.value
    });
    
    redireccion();
    /*
    firebase.auth().signInWithEmailAndPassword(correo, contraseña)
    .then(function(result){
        //alert('autenticacion correcta');
        
    }).catch(function(error){
        alert('No se realizo la autenticacion correctamente');
    });
    
    contenedorFormulario.reset();
    */
    
    
   
}

function redireccion(){
    window.location="views/ubicacion.html"; 
};






