
/*
window.onload= registroGoogle;
var botonGoogle = document.getElementById("botonGoog");







function ingresaGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // Esto te proporciona un token de acceso de Google. Puede utilizarlo para acceder a la API de Google.
          var token = result.credential.accessToken;
          
          var user = result.user;
          // logueado con éxito
          console.log('Hemos autenticado al usuario ', result.user);
      
        }).catch(function(error) {
          // para el manejo de errores
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
         
      
          
        });
        
    
}


function registroGoogle(){
    botonGoog.addEventListener('click', ingresaGoogle, false);

}
*/


 var provider = new firebase.auth.GoogleAuthProvider();

$('#botonGoogle').click(function(){
    firebase.auth().signInWithPopup(provider).then(function(data) {
          // Esto te proporciona un token de acceso de Google. Puede utilizarlo para acceder a la API de Google.
          //var token = result.credential.accessToken;
          window.location= "views/ubicacion.html";
          var user = data.user;
          // logueado con éxito
          console.log(user);
          //$('#contenedorFormulario').hide();
          //$('#contenedorUsuario-mostrar').show();
          $('img').attr('src',user.photoURL);
          $('h3').text(user.displayName);
          $('h5').text(user.email);
          
      
        }).catch(function(error) {
          // para el manejo de errores
          console.log(error); 
      
        });
    
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //$('#contenedorFormulario').hide();
    //$('#contenedorUsuario-mostrar').show();
    $('img').attr('src',user.photoURL);
    $('h3').text(user.displayName);
    $('h5').text(user.email);  
  } else {
    //$('#contenedorFormulario').show();
    //$('#contenedorUsuario-mostrar').hide();
      console.log("error");
  }
});

$('#cerrar').click(function(){
    firebase.auth().signOut().then(function(){
        window.location= "../index.html";
    });
})




// codigo corecto
/*
 var provider = new firebase.auth.GoogleAuthProvider();

$('button').click(function(){
    firebase.auth().signInWithPopup(provider).then(function(data) {
          // Esto te proporciona un token de acceso de Google. Puede utilizarlo para acceder a la API de Google.
          //var token = result.credential.accessToken;
          
          var user = data.user;
          // logueado con éxito
          console.log(user);
          $('#contenedorFormulario').hide();
          $('#contenedorUsuario-mostrar').show();
          $('img').attr('src',user.photoURL);
          $('h3').text(user.displayName);
          $('h5').text(user.email);
          
      
        }).catch(function(error) {
          // para el manejo de errores
          console.log(error); 
      
        });
    
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    /* User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    */
      
    /*$('#contenedorFormulario').hide();
    $('#contenedorUsuario-mostrar').show();
    $('img').attr('src',user.photoURL);
    $('h3').text(user.displayName);
    $('h5').text(user.email);  
  } else {
    $('#contenedorFormulario').show();
    $('#contenedorUsuario-mostrar').hide();
  }
});

$('#cerrar').click(function(){
    firebase.auth().signOut().then(function(){
        $('#contenedorFormulario').show();
        $('#contenedorUsuario-mostrar').hide();
    });
})


*/

