<!DOCTYPE html>
<!-- Created By CodingNepal -->
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <title>Login and Registration Form in HTML | CodingNepal</title>
      <link rel="stylesheet" href="css/style.css">
      <script src="js/script.js" defer></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
   </head>
   <body>
      <div class="wrapper">
         <div class="title-text">
            <div class="title login">
               Login
            </div>
            <div class="title signup">
               Signup
            </div>
         </div>
         <div class="form-container">
            <div class="slide-controls">
               <input type="radio" name="slide" id="login" checked>
               <input type="radio" name="slide" id="signup">
               <label for="login" class="slide login">Login</label>
               <label for="signup" class="slide signup">Signup</label>
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
               <form action="#" class="login">
               
                  <div class="field">
                     <input type="text" id="txtcorreo" name="txtcorreo" placeholder="Email Address" required>
                  </div>

                  <!-- <div class="alert alert-danger" role="alert" id="lblmensaje">
                  <strong class="d-block d-sm-inline-block-force">Error!</strong> Campos vacios.
                  </div>

                  <div class="alert alert-warning" role="alert" id="lblerror">
                  <strong class="d-block d-sm-inline-block-force">Advertencia!</strong> Verificar Credenciales.
                  </div>

                  <div class="alert alert-warning" role="alert" id="lblregistro">
                  <strong class="d-block d-sm-inline-block-force">Error!</strong> No Registrado.
                  </div> -->

                  <div class="field">
                     <input type="password" id="txtpass" name="txtpass" placeholder="Password" required>
                  </div>
                  <div class="pass-link">
                     <a href="#">Forgot password?</a>
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="button" id="btnlogin" value="Login">
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="button" id="btnloginf" value="Login with Facebook">
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="button" id="btnloging" value="Login with Google">
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="button" id="btnloginh" value="Login with GitHub">
                  </div>
                  <div class="signup-link">
                     Not a member? <a href="">Signup now</a>
                  </div>
               </form>
               <form action="#" class="signup">
                  <div class="field">
                     <input type="text" id="usu_nom" name="usu_nom" placeholder="Full Name" required>
                  </div>
                  <div class="field">
                     <input type="text" id="usu_correo" name="usu_correo" placeholder="Email Address" required>
                  </div>
                  <div class="field">
                     <input type="password" id="usu_pass" name="usu_pass" placeholder="Password" required>
                  </div>
                  <div class="field">
                     <input type="password" id="usu_pass1" name="usu_pass1" placeholder="Confirm password" required>
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="button" id="btnregistrar" value="Signup">
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="button" id="btnloginff" value="Signup con Facebook">
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="button" id="btnlogingg" value="Signup con Google">
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="button" id="btnloginhh" value="Signup con Github">
                  </div>
               </form>
            </div>
         </div>
      </div>
      <script src="public/lib/jquery/jquery.js"></script>
      <script src="public/lib/popperjs/popper.js"></script>
      <script src="public/lib/bootstrap/bootstrap.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!--Libreria para alertas js-->
      
      <!-- <script type="module">
         


      </script>


      <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script> -->
      

      <script type="module" src="index.js"></script>  
   </body>
</html>