/*************************************************************-->
<!--__ *********************************_**********************->
/  __ \                                | |
| /  \/ __ _ _ __ _ __   ___   ___ __ _| |_   _ _ __  ___  ___
| |    / _` | '__| '_ \ / _ \ / __/ _` | | | | | '_ \/ __|/ _ \
| \__/\ (_| | |  | |_) | (_) | (_| (_| | | |_| | |_) \__ \  __/
 \____/\__,_|_|  | .__/ \___/ \___\__,_|_|\__, | .__/|___/\___|
                 | |                       __/ | |
<--              |_|   By Rolls 2020      |___/|_|             -->
<!--******************* VERSION 0.2 ***************************-->
<!--**********************************************************-->*/

// Quiero poder manejar el coche1 con el teclado

// COCHE1 - ACELERACIÓN CONSTANTE: 10px 
// ACELERADOR - espacio (tecla 10)
// OXIDO NITROSO - tecla N (tecla 78 español / tecla 110 inglés). Aceleración 40px. Solo se puede usar tres veces.

// coche2 se mueve de forma autonoma 20px cada vez. No tiene oxido nitroso.
// coche3 se mueve de forma aleatoria, en un rango de 0 a 41px.


var coche1 = document.getElementById('coche1');
var coche2 = document.getElementById('coche2');

var coorX = 0;
var coorX_coche2 = 0;
var coorX_coche3 = 0;

var contador = 0;

var todo = document.getElementById('todo');
var fuego = document.getElementsByClassName('fuego');
var humo = document.getElementsByClassName('humo');

var meta = '';

coche1.style.marginLeft = coorX + 'px';

var mensaje = document.getElementById('mensaje');

document.addEventListener('keypress', capturarTecla);

var nitroluces = 3;
var nitro1 = document.getElementsByClassName('nitro1');
var nitro2 = document.getElementsByClassName('nitro2');
var nitro3 = document.getElementsByClassName('nitro3');








function capturarTecla(e) {
    tecla = e.keyCode; // capturar que tecla está siendo pulsada
    console.log(tecla);



    switch (tecla) {
        case 32:
            // espacio (acelerar)
            acelerar(10);
            setTimeout(() => { humo[0].style.opacity = 100; }, 0.1);
            setTimeout(() => { humo[0].style.opacity = 0; }, 400);

            break;

        case 78:
            // N (oxido nitroso)
            nitro(60);
            setTimeout(() => { fuego[0].style.opacity = 100; }, 0);
            setTimeout(() => { fuego[0].style.opacity = 0; }, 500);
            nitroluces -= 1;
            console.log(nitroluces);

            break;

        case 110:
            // N (oxido nitroso)
            nitro(60);
            setTimeout(() => { fuego[0].style.opacity = 100; }, 0);
            setTimeout(() => { fuego[0].style.opacity = 0; }, 500);
            nitroluces -= 1;
            console.log(nitroluces);

            break;
    }

    switch (nitroluces) {
        case 2:
            nitro1[0].style.background = 'black';
            break;

        case 1:
            nitro2[0].style.background = 'black';
            break;
        case 0:
            nitro3[0].style.background = 'black';
            break;
    }


    //meta = (coorX >= 760) ? mensaje.innerText = '¡Enhorabuena! ¡Has ganado!' : '';

    if (coorX >= 760) {
        mensaje.innerText = '¡Enhorabuena! ¡Has ganado!';
        document.removeEventListener('keypress', capturarTecla);

    }

}


function acelerar(pDistancia) {
    coorX += pDistancia;
    coche1.style.marginLeft = coorX + 'px';

}


function nitro(pDistancia) {


    if (contador >= 3) {
        coorX += 0;
        coche1.style.marginLeft = coorX + 'px'

    } else {
        coorX += pDistancia;
        coche1.style.marginLeft = coorX + 'px'
        contador++;
    }

}


var fondo = document.getElementsByClassName('body');





/* COCHE 2 */

var coche2Avance = window.setInterval(coche2Malo, 100);

function coche2Malo() {


    coorX_coche2 += 20;
    coche2.style.marginLeft = coorX_coche2 + 'px';

    //  meta = (coorX_coche2 >= 760) ? mensaje.innerText = '¡Has muerto!' : '';

    if (coorX_coche2 >= 760) {
        clearInterval(coche2Avance);
        mensaje.innerText = '¡Has muerto!';
        document.removeEventListener('keypress', capturarTecla);
        document.body.style.backgroundColor = 'red';
        todo.style.backgroundColor = 'red';

    }

}





/* COCHE 3 */

var coche3Avance = window.setInterval(coche3Malo, 100);

function coche3Malo() {


    coorX_coche3 += Math.random() * 41;
    coche3.style.marginLeft = coorX_coche3 + 'px';

    // meta = (coorX_coche3 >= 760) ? mensaje.innerText = '¡Has muerto!' : '';

    if (coorX_coche3 >= 760) {
        clearInterval(coche3Avance);
        mensaje.innerText = '¡Has muerto!';
        document.removeEventListener('keypress', capturarTecla);
    }


}

// document.removeEventListener('keypress', capturarTecla);
// para parar un Evento escuchador, ponemos exactamente igual el evento así como lo hemos llamado, y cambiamos addEventListener por removeEventListener






