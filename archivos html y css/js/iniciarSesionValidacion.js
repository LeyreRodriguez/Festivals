var correo, contraseña;
            function initiate(){
                correo = document.getElementById("correo");
                contraseña = document.getElementById("contraseña");
                correo.addEventListener("input", validation_correo);
                contraseña.addEventListener("input", validation_contraseña);
                validation();
                return false;
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