var nombre, apellidos, correo, contraseña;
            function initiate(){
                nombre = document.getElementById("nombre");
                apellidos = document.getElementById("apellidos");
                correo = document.getElementById("correo");
                contraseña = document.getElementById("contraseña");
                nombre.addEventListener("input", validation_nombre);
                apellidos.addEventListener("input", validation_apellidos);
                correo.addEventListener("input", validation_correo);
                contraseña.addEventListener("input", validation_contraseña);
                validation();
                return false;
            }
            function validation_nombre(e){
                if (nombre.validity.valueMissing) {
                    nombre.style.background = '#FF0000';
                    nombre.setCustomValidity("El nombre es obligatorio"); 
                }else if(nombre.validity.tooShort){
                    nombre.style.background = '#FF0000';
                    nombre.setCustomValidity("El nombre debe tener más de 2 dígitos"); 
                }else if(nombre.validity.tooLong){
                    nombre.style.background = '#FF0000';
                    nombre.setCustomValidity("El nombre debe tener menos de 20 dígitos"); 
                }else if(nombre.validity.patternMismatch) {
                    nombre.style.background = '#FF0000';
                    nombre.setCustomValidity("Se esperaba un nombre");
                }else {
                    nombre.setCustomValidity('');
                    nombre.style.background = '#FFFFFF';
                }
            }
            function validation_apellidos(e){
                if (apellidos.validity.valueMissing) {
                    apellidos.style.background = '#FF0000';
                    apellidos.setCustomValidity("Los apellidos son obligatorio"); 
                }else if(apellidos.validity.tooShort){
                    apellidos.style.background = '#FF0000';
                    apellidos.setCustomValidity("Los apellidos deben tener más de 2 dígitos"); 
                }else if(apellidos.validity.tooLong){
                    apellidos.style.background = '#FF0000';
                    apellidos.setCustomValidity("Los apellidos deben tener menos de 50 dígitos"); 
                }else if(apellidos.validity.patternMismatch) {
                    apellidos.style.background = '#FF0000';
                    apellidos.setCustomValidity("Se esperaban apellidos");
                }else {
                    apellidos.setCustomValidity('');
                    apellidos.style.background = '#FFFFFF';
                }
            }
            function validation_correo(e){
                if (correo.validity.valueMissing) {
                    correo.style.background = '#FF0000';
                    correo.setCustomValidity("El correo es obligatorio"); 
                }else if(correo.validity.patternMismatch) {
                    correo.style.background = '#FF0000';
                    correo.setCustomValidity("Se esperaba una dirección de correo electrónico");
                }else {
                    correo.setCustomValidity('');
                    correo.style.background = '#FFFFFF';
                }
            }
            function validation_contraseña(e){
                if (contraseña.validity.valueMissing) {
                    contraseña.style.background = '#FF0000';
                    contraseña.setCustomValidity("La contraseña es obligatorio"); 
                }else if(contraseña.validity.tooShort){
                    contraseña.style.background = '#FF0000';
                    contraseña.setCustomValidity("La contraseña debe tener más de 8 dígitos"); 
                }else if(contraseña.validity.tooLong){
                    contraseña.style.background = '#FF0000';
                    contraseña.setCustomValidity("La contraseña debe tener menos de 15 dígitos"); 
                }else if(contraseña.validity.patternMismatch) {
                    contraseña.style.background = '#FF0000';
                    contraseña.setCustomValidity("Se esperaba una contraseña con mínimo una minúscula, una masyúscula, un dígito numérico y sin espacios");
                }else {
                    contraseña.setCustomValidity('');
                    contraseña.style.background = '#FFFFFF';
                }
            }
            addEventListener("load", initiate);