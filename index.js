// Inicio "Login"
function init() {

}

$(document).ready(function () {
    $('#lblmensaje').hide();
    $('#lblerror').hide();
    $('#lblregistro').hide();
});

$(document).on("click", "#btnlogin", function () {
    var usu_correo = $('#txtcorreo').val();
    var usu_pass = $('#txtpass').val();

    if (usu_correo == '' || usu_pass == '') {
        console.log("Vacios");
        $('#lblmensaje').show();
        $('#lblerror').hide();
    } else {
        $.post("controller/usuario.php?op=acceso", { usu_correo: usu_correo, usu_pass: usu_pass }, function (data) {
            if (data == 0) {
                $('#lblerror').show();
                $('#lblmensaje').hide();
            } else {
                window.open('http://localhost:80/Login/view/Home/', '_self');
            }
        });
    }

});
// Fin "Login"

//Inicio Sign Up
// function init() {

// }

$(document).ready(function () {

});

$(document).on("click", "#btnregistrar", function () {
    var usu_nom = $('#usu_nom').val();
    var usu_correo = $('#usu_correo').val();
    var usu_pass = $('#usu_pass').val();
    var usu_pass1 = $('#usu_pass1').val();

    if (usu_nom == '' || usu_correo == '' || usu_pass == '' || usu_pass1 == '') {
        Swal.fire(
            'Error!',
            'Campos Vacios',
            'error'
        );
    } else {
        if (usu_pass == usu_pass1) {
            $.post("controller/usuario.php?op=registro", { usu_nom: usu_nom, usu_correo: usu_correo, usu_pass: usu_pass }, function (data) {
                if (data == 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Aceptado!',
                        text: 'Registro Correcto',
                        confirmButtonText: `Ok`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.open('http://localhost:80/Login/view/Home/', '_self');
                        }
                    });
                } else {
                    Swal.fire(
                        'Observación!',
                        'El Correo ya existe',
                        'warning'
                    );
                }
            });
        } else {
            Swal.fire(
                'Error!',
                'Contraseñas Incorrectas',
                'error'
            );
        }
    }
});
//Fin Sign Up


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOWZadHIqY-fiGfQI19jTugnI86fVbfws",
    authDomain: "login-75c38.firebaseapp.com",
    projectId: "login-75c38",
    storageBucket: "login-75c38.appspot.com",
    messagingSenderId: "793236232476",
    appId: "1:793236232476:web:3c64ab4558dad4018e02d9",
    measurementId: "G-D024TCGX2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const providerf = new FacebookAuthProvider();
const providerh = new GithubAuthProvider();


// Evaluamos si el correo Google está registrado en la BD
document.getElementById('btnloging').addEventListener('click', function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(result);
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

            $.post("controller/usuario.php?op=accesosocial", { usu_correo: result.user.providerData[0].email }, function (data) {
                if (data == 0) {
                    $('#lblerror').hide();
                    $('#lblmensaje').hide();
                    $('#lblregistro').show();
                } else {
                    window.open('http://localhost:80/Login/view/Home/', '_self');
                }
            });
        }).catch((error) => {
            console.log(error);
        });
});

// Evaluamos si el correo Facebook está registrado en la BD
document.getElementById('btnloginf').addEventListener('click', function () {
    signInWithPopup(auth, providerf)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            console.log(result);
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

            $.post("controller/usuario.php?op=accesosocial", { usu_correo: result.user.providerData[0].email }, function (data) {
                if (data == 0) {
                    $('#lblerror').hide();
                    $('#lblmensaje').hide();
                    $('#lblregistro').show();
                } else {
                    window.open('http://localhost:80/Login/view/Home/', '_self');
                }
            });
        }).catch((error) => {
            console.log(error);
        });
});

// Evaluamos si el correo GitHub está registrado en la BD
document.getElementById('btnloginh').addEventListener('click', function () {
    signInWithPopup(auth, providerh)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            console.log(result);
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

            $.post("controller/usuario.php?op=accesosocial", { usu_correo: result.user.providerData[0].email }, function (data) {
                if (data == 0) {
                    $('#lblerror').hide();
                    $('#lblmensaje').hide();
                    $('#lblregistro').show();
                } else {
                    window.open('http://localhost:80/Login/view/Home/', '_self');
                }
            });
        }).catch((error) => {
            console.log(error);
        });
});



// Registra y verifica si el correo Google ya está en uso
document.getElementById('btnlogingg').addEventListener('click', function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log(result);
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

        $.post("controller/usuario.php?op=registro",{usu_nom:result.user.providerData[0].displayName,usu_correo:result.user.providerData[0].email,usu_pass:123456},function(data){
            if(data==0){
                Swal.fire({
                    icon: 'success',
                    title: 'Aceptado!',
                    text: 'Registro Correcto',
                    confirmButtonText: `Ok`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.open('http://localhost:80/Login/view/Home/', '_self');
                    }
                });
            }else{
                Swal.fire(
                    'Observacion!',
                    'Correo ya existe',
                    'question'
                );
            }
        });

    }).catch(function (error) {
        console.log(error);
    });
});


// Registra y verifica si el correo Facebook ya está en uso
document.getElementById('btnloginff').addEventListener('click', function () {
    signInWithPopup(auth, providerf)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            console.log(result);
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

        $.post("controller/usuario.php?op=registro",{usu_nom:result.user.providerData[0].displayName,usu_correo:result.user.providerData[0].email,usu_pass:123456},function(data){
            if(data==0){
                Swal.fire({
                    icon: 'success',
                    title: 'Aceptado!',
                    text: 'Registro Correcto',
                    confirmButtonText: `Ok`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.open('http://localhost:80/Login/view/Home/', '_self');
                    }
                });
            }else{
                Swal.fire(
                    'Observacion!',
                    'Correo ya existe',
                    'question'
                );
            }
        });

    }).catch(function (error) {
        console.log(error);
    });
});


// Registra y verifica si el correo GitHub ya está en uso
document.getElementById('btnloginhh').addEventListener('click', function () {
    signInWithPopup(auth, providerh)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            console.log(result);
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

        $.post("controller/usuario.php?op=registro",{usu_nom:result.user.providerData[0].displayName,usu_correo:result.user.providerData[0].email,usu_pass:123456},function(data){
            if(data==0){
                Swal.fire({
                    icon: 'success',
                    title: 'Aceptado!',
                    text: 'Registro Correcto',
                    confirmButtonText: `Ok`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.open('http://localhost:80/Login/view/Home/', '_self');
                    }
                });
            }else{
                Swal.fire(
                    'Observacion!',
                    'Correo ya existe',
                    'question'
                );
            }
        });

    }).catch(function (error) {
        console.log(error);
    });
});




