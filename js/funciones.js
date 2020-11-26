function identificaDatos() {
    const TipoAuto = document.querySelector("#tipoAutomata").value;
    const TipoAuto2 = document.querySelector("#tipoAutomata").value;

    if (TipoAuto === 'AFD') {
        console.log("Es AFD ");
        return TipoAuto;
    } else if (TipoAuto2 === 'AP') {
        console.log("Son 2AP");
        return TipoAuto2;
    }
}


function addFormulario() {
    let a = 1;
    let count1 = 1;
    let count2 = 2;
    let numero = document.getElementById("Automata1").value;

    const texto1 = document.querySelector("#formulario");
    texto1.textContent = "Nombres para el automata 1";
    texto1.className = "alert alert-warning py-4 mx-2";
    var TipoDato = identificaDatos();

    if (TipoDato === 'AFD') {
        while (a <= numero) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + a + ' col-md-offset-1 col-md-6"><input id="a1valor' + count1 +
                '" class="form-control" style="margin-bottom: 5px;"  placeholder="Nombre del estado ' + [a] + ' "  ' + a + '" type="text"/> <input type="radio" id="A1inicial' + count1 + '" name="inicia" required>Inicial <input type="checkbox" id="A1final' + count1 + '" name="final" required> Final</div>';
            document.getElementById('formulario').appendChild(div);
            a++;
            count1++;
        }

        const texto3 = document.querySelector("#mostrarLenguaje");
        texto3.textContent = "Variables automata 1";
        texto3.className = "alert alert-warning py-3 mr-2";
        var leEntrada = document.getElementById("nEntradas").value;
        console.log("Lenguaje Automata N°1 :", leEntrada);
        var count = 1;
        var x = leEntrada;
        let k = 1;

        while (k <= x) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + k + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                '" class="form-control" style="margin-bottom: 2px;"  placeholder="Letra de entrada ' + [k] + ' " ' + k + '" type="text"/>';
            document.getElementById('mostrarLenguaje').appendChild(div);
            k++;
            count++;
        }

        var div = document.createElement('div');
        div.setAttribute('class', 'form-inline', 'a', 'style');
        div.innerHTML = '<div class="row d-flex justify-content-center">' +
            '<a onclick="confirmar()" class="btn btn-outline-light px-2 mb-3" style="text-align: center; max-width: 850px;">Confirme los datos</a>' +
            '</div>';
        document.getElementById('confirmar').appendChild(div);

    } else if (TipoDato == 'AP') {
        let numero2 = document.getElementById("Automata2").value;

        while (a <= numero) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + a + ' col-md-offset-1 col-md-6"><input id="a1valor' + count1 +
                '" class="form-control" style="margin-bottom: 5px;"  placeholder="Nombre del estado ' + [a] + ' "  ' + a + '" type="text"/> <input type="radio" id="A1inicial' + count1 + '" name="inicia" required>Inicial <input type="checkbox" id="A1final' + count1 + '" name="final" required> Final</div>';
            document.getElementById('formulario').appendChild(div);
            a++;
            count1++;
        }

        const texto2 = document.querySelector("#formulario2");
        texto2.textContent = "Nombres para el automata 2";
        texto2.className = "alert alert-warning py-4 mx-2";
        let count2 = 1;
        let b = 1;

        while (b <= numero2) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + b + ' col-md-offset-1 col-md-6"><input id="a2valor' + count2 +
                '" class="form-control" style="margin-bottom: 5px;"  placeholder="Nombre del estado ' + [b] + ' " ' + b + '" type="text"/> <input type="radio" id="A2inicial' + count2 +
                '" name="inicial" required>Inicial <input type="checkbox" id="A2final' + count2 + '" name="final" required> Final</div>';
            document.getElementById('formulario2').appendChild(div);
            b++;
            count2++;
        }

        const texto3 = document.querySelector("#mostrarLenguaje");
        texto3.textContent = "Variables automata 1";
        texto3.className = "alert alert-warning py-3 mr-2";
        var leEntrada = document.getElementById("nEntradas").value;
        console.log("Lenguaje Automata N°1 :", leEntrada);
        var count = 1;
        var x = leEntrada;
        let k = 1;

        while (k <= x) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + k + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                '" class="form-control" style="margin-bottom: 2px;"  placeholder="Letra de entrada ' + [k] + ' " ' + k + '" type="text"/>';
            document.getElementById('mostrarLenguaje').appendChild(div);
            k++;
            count++;
        }

        const texto4 = document.querySelector("#mostrarLenguaje2");
        texto4.textContent = "Variables Automata 2 ";
        texto4.className = "alert alert-warning py-3 ml-2";
        var leEntrada2 = document.getElementById("nEntradas2").value;
        console.log("Lenguaje Automata N°2 :", leEntrada2);
        var count5 = 1;
        var p = leEntrada2;
        let m = 1;

        while (m <= p) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + m + ' col-md-offset-1 col-md-6"><input id="2enENvalor' + count5 +
                '" class="form-control" style="margin-bottom: 2px;"  placeholder="Letra de entrada ' + [m] + ' " ' + m + '" type="text"/>';
            document.getElementById('mostrarLenguaje2').appendChild(div);
            m++;
            count5++;
        }

        var div = document.createElement('div');
        div.setAttribute('class', 'form-inline', 'a', 'style');
        div.innerHTML = '<div class="row d-flex justify-content-center">' +
            '<a onclick="confirmar()" class="btn btn-outline-light px-2 mb-3" style="text-align: center; max-width: 850px;">Confirme los datos</a>' +
            '</div>';
        document.getElementById('confirmar').appendChild(div);

    }


}


function llenar() {
    var arrayEntradas = [];
    var arraySalidas = [];
    var arrayConjunto1 = [];
    var arrayConjunto2 = [];
    var arrayEntradas2 = [];
    var arraySalidas2 = [];
    var arrayReturn = [];
    var count1 = 1;
    var count2 = 1;
    let numero2 = document.getElementById("Automata2").value;
    let numero = document.getElementById("Automata1").value;

    while (count1 <= numero) {
        var automata1 = document.getElementById("a1valor" + count1).value;
        var p = document.getElementById("A1inicial" + count1).checked;
        var f = document.getElementById("A1final" + count1).checked;
        if (p == true && f == false) {
            arrayEntradas.push(automata1);
            console.log("arrayEntrada1 :", arrayEntradas);
        } else {
            if (p == false && f == true) {
                arraySalidas.push(automata1);
                console.log("arraySalida1 :", arraySalidas);
            }
        }
        arrayConjunto1.push(automata1);
        count1++;
    }

    console.log("Estos Son Los Estados Para El Automata N°1 :", arrayConjunto1);

    while (count2 <= numero2) {
        var automata2 = document.getElementById("a2valor" + count2).value;
        var p2 = document.getElementById("A2inicial" + count2).checked;
        var f2 = document.getElementById("A2final" + count2).checked;
        if (p2 == true && f2 == false) {
            arrayEntradas2.push(automata2);
            console.log("arrayentrada2 :", arrayEntradas2);
        } else {
            if (p2 == false && f2 == true) {
                arraySalidas2.push(automata2);
                console.log("arraysalida2 :", arraySalidas2);
            }
        }
        arrayConjunto2.push(automata2);
        count2++;
    }
    console.log("Estos Son Los Estados Para El Automata N°2 :", arrayConjunto2);

    arrayReturn.push(arrayConjunto1);
    arrayReturn.push(arrayConjunto2);
    arrayReturn.push(arrayEntradas);
    arrayReturn.push(arraySalidas);
    arrayReturn.push(arrayEntradas2);
    arrayReturn.push(arraySalidas2);
    return arrayReturn;
}

function llenarNuevo() {
    var arrayEntradas = [];
    var arraySalidas = [];
    var arrayConjunto1 = [];
    var arrayConjunto2 = [];
    var arrayEntradas2 = [];
    var arraySalidas2 = [];
    var arrayReturn = [];
    var count1 = 1;
    var count2 = 1;
    let numero = document.getElementById("Automata1").value;

    var TipoDato = identificaDatos();

    if (TipoDato === 'AFD') {
        while (count1 <= numero) {
            var automata1 = document.getElementById("a1valor" + count1).value;
            var p = document.getElementById("A1inicial" + count1).checked;
            var f = document.getElementById("A1final" + count1).checked;
            if (p == true && f == false) {
                arrayEntradas.push(automata1);
                console.log("arrayEntrada1 :", arrayEntradas);
            } else {
                if (p == false && f == true) {
                    arraySalidas.push(automata1);
                    console.log("arraySalida1 :", arraySalidas);
                }
            }
            arrayConjunto1.push(automata1);
            count1++;
        }
        console.log("Estos Son Los Estados Para El Automata N°1 :", arrayConjunto1);
        arrayReturn.push(arrayConjunto1);
        arrayReturn.push(arrayEntradas);
        arrayReturn.push(arraySalidas);

        return arrayReturn;

    } else if (TipoDato == 'AP') {
        let numero2 = document.getElementById("Automata2").value;
        while (count1 <= numero) {
            var automata1 = document.getElementById("a1valor" + count1).value;
            var p = document.getElementById("A1inicial" + count1).checked;
            var f = document.getElementById("A1final" + count1).checked;
            if (p == true && f == false) {
                arrayEntradas.push(automata1);
                console.log("arrayEntrada1 :", arrayEntradas);
            } else {
                if (p == false && f == true) {
                    arraySalidas.push(automata1);
                    console.log("arraySalida1 :", arraySalidas);
                }
            }
            arrayConjunto1.push(automata1);
            count1++;
        }

        console.log("Estos Son Los Estados Para El Automata N°1 :", arrayConjunto1);

        while (count2 <= numero2) {
            var automata2 = document.getElementById("a2valor" + count2).value;
            var p2 = document.getElementById("A2inicial" + count2).checked;
            var f2 = document.getElementById("A2final" + count2).checked;
            if (p2 == true && f2 == false) {
                arrayEntradas2.push(automata2);
                console.log("arrayentrada2 :", arrayEntradas2);
            } else {
                if (p2 == false && f2 == true) {
                    arraySalidas2.push(automata2);
                    console.log("arraysalida2 :", arraySalidas2);
                }
            }
            arrayConjunto2.push(automata2);
            count2++;
        }
        console.log("Estos Son Los Estados Para El Automata N°2 :", arrayConjunto2);

        arrayReturn.push(arrayConjunto1);
        arrayReturn.push(arrayConjunto2);
        arrayReturn.push(arrayEntradas);
        arrayReturn.push(arraySalidas);
        arrayReturn.push(arrayEntradas2);
        arrayReturn.push(arraySalidas2);
        return arrayReturn;

    }

}

function llenarLENAFD() {
    var leEntrada = document.getElementById("nEntradas").value;

    var arraylenguaje = [];

    var ArrayDefinitivo = [];
    var contador = 1;


    while (contador <= leEntrada) {
        var lenguaje = document.getElementById("lenENvalor" + contador).value;
        arraylenguaje.push(lenguaje);
        contador++;
    }
    ArrayDefinitivo.push(arraylenguaje);
    return ArrayDefinitivo;
}

function llenarLEN() {
    var leEntrada = document.getElementById("nEntradas").value;
    var arraylenguaje = [];
    var arraylenguaje2 = [];
    var ArrayDefinitivo = [];
    var contador = 1;
    var contador2 = 1;
    var TipoDato = identificaDatos();

    if (TipoDato == 'AFD') {

        while (contador <= leEntrada) {
            var lenguaje = document.getElementById("lenENvalor" + contador).value;
            arraylenguaje.push(lenguaje);
            contador++;
        }

        ArrayDefinitivo.push(arraylenguaje);
        return ArrayDefinitivo;

    } else if (TipoDato == 'AP') {
        var leEntrada = document.getElementById("nEntradas").value;
        var leEntrada2 = document.getElementById("nEntradas2").value;

        while (contador <= leEntrada) {
            var lenguaje = document.getElementById("lenENvalor" + contador).value;
            arraylenguaje.push(lenguaje);
            contador++;
        }

        while (contador2 <= leEntrada2) {
            var lenguaje = document.getElementById("2enENvalor" + contador2).value;
            arraylenguaje2.push(lenguaje);
            contador2++;
        }
        ArrayDefinitivo.push(arraylenguaje);
        ArrayDefinitivo.push(arraylenguaje2);
        return ArrayDefinitivo;
    }

}

var transiciones = ['Entrada', 'Lectura', 'Destino'];

const tablaTransicion1 = document.querySelector("#tablaTransicion1");
const tablaTransicion2 = document.querySelector("#tablaTransicion2");

function TablaTransicion(arrayConjunto, arraylenguaje, tablaTransicion1) {
    var arrayTra = [];
    var tablaPadre = document.createElement('table'),
        filaTitulo = document.createElement('tr');
    tablaPadre.style.marginLeft = "93px";
    tablaPadre.style.paddingBottom = "80px";
    tablaPadre.style.paddingTop = "80px";
    for (let i = 0; i < transiciones.length; i++) {
        var colTitulo = document.createElement('td');
        colTitulo.className = 'formatoTablaTitulo ';
        colTitulo.textContent = transiciones[i];
        colTitulo.style.width = "100px";
        colTitulo.style.height = "30px";
        colTitulo.style.backgroundColor = "#CDA434";
        colTitulo.style.textAlign = "center";
        filaTitulo.appendChild(colTitulo);
    }
    tablaPadre.appendChild(filaTitulo);
    for (let i = 0; i < arrayConjunto.length; i++) {
        for (let j = 0; j < arraylenguaje.length; j++) {
            var filaDatos = document.createElement('tr'),
                colEstados = document.createElement('td'),
                collenguaje = document.createElement('td'),
                colInput = document.createElement('td');
            var input = document.createElement('input');
            filaDatos.style.width = "100px";
            filaDatos.style.height = "30px";
            filaDatos.style.backgroundColor = "#cda4345b";
            filaDatos.style.textAlign = "center";
            filaDatos.style.borderColor = "#1a1a1a";
            filaDatos.style.marginBottom = "10px";
            colEstados.className = 'formatoTabla';
            colEstados.textContent = arrayConjunto[i];
            collenguaje.className = 'formatoTabla';
            collenguaje.textContent = arraylenguaje[j];
            input.className = 'forma-control';
            input.setAttribute('placeholder', 'Estado Destino');
            input.setAttribute('type', 'text');
            input.id = `${arrayConjunto[i]}-${arraylenguaje[j]}`;
            arrayTra.push(input.id);
            colInput.appendChild(input);
            filaDatos.appendChild(colEstados);
            filaDatos.appendChild(collenguaje);
            filaDatos.appendChild(colInput);
            tablaPadre.appendChild(filaDatos);
        }
    }
    tablaTransicion1.appendChild(tablaPadre);

    return arrayTra;
}

function confirmar() {


    var aux1 = llenarNuevo();
    var aux = llenarLEN();

    var TipoDato = identificaDatos();

    if (TipoDato == 'AFD') {

        TablaTransicion(aux1[0], aux[0], tablaTransicion1);

    } else if (TipoDato == 'AP') {
        TablaTransicion(aux1[0], aux[0], tablaTransicion1);
        TablaTransicion(aux1[1], aux[1], tablaTransicion2);


    }



}

function llenarTransicion1() {
    var aux = llenarNuevo()[0];
    var len = llenarLEN()[0];
    var arrayTransiciones = [];

    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < len.length; j++) {
            var t1 = document.getElementById(`${aux[i]}-${len[j]}`).value;
            arrayTransiciones.push(t1);
        }
    }
    console.log("Las Transiciones Son :", arrayTransiciones);

    return arrayTransiciones;
}

function llenarTransicion2() {
    var aux = llenarNuevo()[1];
    var len = llenarLEN()[1];
    var arrayTransiciones = [];

    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < len.length; j++) {
            var t1 = document.getElementById(`${aux[i]}-${len[j]}`).value;
            arrayTransiciones.push(t1);
        }
    }
    console.log("Las Transiciones Son :", arrayTransiciones);

    return arrayTransiciones;
}


function confirmarTRA() {
    var TipoDatos = identificaDatos();
    if (TipoDatos === 'AFD') {
        console.log("entro a validador AFD");
        var aux1 = validador1();
        if (aux1 === 0) {
            return 0;
        } else {
            llenarTransicion1();
            primeraQuintuplaAFD();
            transicionCompleta();
        }
    } else if (TipoDatos == 'AP') {
        console.log("entro a validador AFND");
        var aux3 = validador3();
        var aux4 = validador4();
        if (aux3 === 0) {
            return 0;
        } else if (aux4 === 0) {
            return 0;
        } else {
            llenarTransicion1();
            llenarTransicion2();
            primeraQuintupla();
            transicionCompleta();
        }
    }

}

function primeraQuintuplaAFD() {
    var conjunto1 = llenarNuevo()[0];
    var entrada1 = llenarNuevo()[1];
    var salida1 = llenarNuevo()[2];
    var lenguaje = llenarLEN()[0];
    var transicion1 = transicionCompleta()[0];

    console.log("conjunto:", conjunto1);
    console.log("entrada:", entrada1);
    console.log("salidas", salida1);
    console.log("lenguaje:", lenguaje);
    console.log("transicion1:", transicion1);


    const output1 = document.querySelector("#primeraQuintupla1");
    const output2 = document.querySelector("#primeraQuintupla2");
    const output3 = document.querySelector("#primeraQuintupla3");
    const output4 = document.querySelector("#primeraQuintupla4");
    const output5 = document.querySelector("#primeraQuintupla5");


    output1.textContent = (`El conjunto Q de estados es:  [${conjunto1}]:`);
    output2.textContent = (`El estado inicial es:  [${entrada1}]`);
    output3.textContent = (`El conjunto de salidas del automata 1 es:  [${salida1}]`);
    output4.textContent = (`El alfabeto asociado es:  [${lenguaje}]:`);
    output5.textContent = (`La transicion 1 es:  [${transicion1}]:`);

}

function primeraQuintupla() {
    var conjunto1 = llenarNuevo()[0];
    var entrada1 = llenarNuevo()[2];
    var salida1 = llenarNuevo()[3];
    var lenguaje = llenarLEN()[0];
    var transicion1 = transicionCompleta()[0];
    var conjunto2 = llenarNuevo()[1];
    var lenguaje2 = llenarLEN()[1];
    var entrada2 = llenarNuevo()[4];
    var salida2 = llenarNuevo()[5];
    var transicion2 = transicionCompleta()[1];

    const output1 = document.querySelector("#primeraQuintupla1");
    const output2 = document.querySelector("#primeraQuintupla2");
    const output3 = document.querySelector("#primeraQuintupla3");
    const output4 = document.querySelector("#primeraQuintupla4");
    const output5 = document.querySelector("#primeraQuintupla5");
    const output6 = document.querySelector("#segundaQuintupla1");
    const output7 = document.querySelector("#segundaQuintupla2");
    const output8 = document.querySelector("#segundaQuintupla3");
    const output9 = document.querySelector("#segundaQuintupla4");
    const output10 = document.querySelector("#segundaQuintupla5");

    output1.textContent = (`El conjunto Q de estados es:  [${conjunto1}]:`);
    output2.textContent = (`El estado inicial es:  [${entrada1}]`);
    output3.textContent = (`El conjunto de salidas del automata 1 es:  [${salida1}]`);
    output4.textContent = (`El alfabeto asociado es:  [${lenguaje}]:`);
    output5.textContent = (`La transicion 1 es:  [${transicion1}]:`);
    output6.textContent = (`El conjunto Q de estados es:  [${conjunto2}]:`);
    output7.textContent = (`El estado inicial es:  [${entrada2}]`);
    output8.textContent = (`El conjunto de salidas del automata 2 es:  [${salida2}]`);
    output9.textContent = (`El alfabeto asociado es:  [${lenguaje2}]:`);
    output10.textContent = (`La transicion 2 es:  [${transicion2}]:`);
    output10.className = "mb-5";

}







function validador1() {
    var arrayvali = llenarNuevo()[0];
    var transi = llenarTransicion1();
    var contador = 0;
    var aux1;
    for (let i = 0; i < arrayvali.length; i++) {
        aux1 = arrayvali[i];
        for (let j = 0; j < transi.length; j++) {
            if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°1!");
                return 0;
            } else if (aux1 === transi[j]) {
                contador++;
            }
        }
    }
    if (contador !== transi.length) {
        window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°1!");
        return 0;
    }
}

function validador2() {
    var arrayvali = llenarNuevo()[1];
    var transi = llenarTransicion2();
    var contador = 0;
    var aux1;
    for (let i = 0; i < arrayvali.length; i++) {
        aux1 = arrayvali[i];
        for (let j = 0; j < transi.length; j++) {
            if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata N°2!");
                return 0;
            } else if (aux1 === transi[j]) {
                contador++;
            }
        }
    }
    if (contador !== transi.length) {
        window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°2!");
        return 0;
    }
}

function validador3() {
    var arrayvali = llenarNuevo()[0];
    var transi = llenarTransicion1();
    var contador = 0;
    var contador2 = 0;
    var aux1;
    for (let k = 0; k < transi.length; k++) {
        if (transi[k] === "@") {
            contador2++;
        }
    }
    for (let i = 0; i < arrayvali.length; i++) {
        aux1 = arrayvali[i];
        for (let j = 0; j < transi.length; j++) {
            if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°1!");
                return 0;
            } else if (aux1 === transi[j]) {
                contador++;
            }
        }
    }
    if ((contador + contador2) !== transi.length) {
        window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°1!");
        return 0;
    }
}

function validador4() {
    var arrayvali = llenarNuevo()[1];
    var transi = llenarTransicion2();
    var contador = 0;
    var contador2 = 0;
    var aux1;
    for (let k = 0; k < transi.length; k++) {
        if (transi[k] === "@") {
            contador2++;
        }
    }
    for (let i = 0; i < arrayvali.length; i++) {
        aux1 = arrayvali[i];
        for (let j = 0; j < transi.length; j++) {
            if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°2!");
                return 0;
            } else if (aux1 === transi[j]) {
                contador++;
            }
        }
    }
    if ((contador + contador2) !== transi.length) {
        window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°2!");
        return 0;
    }
}

function TablaTransicionVacia(arrayConjunto, arraylenguaje, tablaTransicion1) {
    var arrayTra = [];
    var tablaPadre = document.createElement('table'),
        filaTitulo = document.createElement('tr');
    tablaPadre.style.marginLeft = "50px";
    tablaPadre.style.marginRight = "50px";
    tablaPadre.style.paddingBottom = "80px";
    tablaPadre.style.paddingTop = "80px";
    for (let i = 0; i < transiciones.length; i++) {
        var colTitulo = document.createElement('td');
        colTitulo.className = 'formatoTablaTitulo';
        colTitulo.textContent = transiciones[i];
        colTitulo.style.width = "100px";
        colTitulo.style.height = "30px";
        colTitulo.style.backgroundColor = "#CDA434";
        colTitulo.style.textAlign = "center";
    }

    for (let i = 0; i < arrayConjunto.length; i++) {
        for (let j = 0; j < arraylenguaje.length; j++) {
            var filaDatos = document.createElement('tr'),
                colEstados = document.createElement('td'),
                collenguaje = document.createElement('td'),
                colInput = document.createElement('td');
            var input = document.createElement('input');
            filaDatos.style.width = "100px";
            filaDatos.style.height = "30px";
            filaDatos.style.backgroundColor = "#cda4345b";
            filaDatos.style.textAlign = "center";
            filaDatos.style.borderColor = "#1a1a1a";
            filaDatos.style.marginBottom = "10px";
            colEstados.className = 'formatoTabla';
            colEstados.textContent = arrayConjunto[i];
            collenguaje.className = 'formatoTabla';
            collenguaje.textContent = arraylenguaje[j];
            input.className = 'forma-control';
            input.setAttribute('placeholder', 'Estado Destino');
            input.setAttribute('type', 'text');
            input.id = `${arrayConjunto[i]}-${arraylenguaje[j]}`;
            arrayTra.push(input.id);
        }

    }
    return arrayTra;
}

function transicionCompleta() {
    var array1 = [];
    var array2 = [];
    var arrayresultante = [];

    var TipoDato = identificaDatos();

    if (TipoDato == 'AFD') {
        const tablaTransicion4 = document.querySelector("#tablaTransicion3");
        var aux1 = llenarNuevo();
        var aux = llenarLEN();
        var idTra1 = TablaTransicionVacia(aux1[0], aux[0], tablaTransicion4);
        var transicion1 = llenarTransicion1();

        for (let i = 0; i < idTra1.length; i++) {
            var conca = [idTra1[i] + " --> " + transicion1[i]];
            array1.push(conca);
        }

        console.log("Este Es El Array1: ", array1);
        arrayresultante.push(array1);
        arrayresultante.push(idTra1);
        arrayresultante.push(transicion1);
        return arrayresultante;



    } else if (TipoDato == 'AP') {
        const tablaTransicion4 = document.querySelector("#tablaTransicion3");
        const tablaTransicion3 = document.querySelector("#tablaTransicion4");

        var aux1 = llenarNuevo();
        var aux = llenarLEN();
        var idTra1 = TablaTransicionVacia(aux1[0], aux[0], tablaTransicion4);
        var idTra2 = TablaTransicionVacia(aux1[1], aux[1], tablaTransicion3);
        var transicion1 = llenarTransicion1();
        var transicion2 = llenarTransicion2();

        for (let i = 0; i < idTra1.length; i++) {
            var conca = [idTra1[i] + " --> " + transicion1[i]];
            array1.push(conca);
        }

        for (let j = 0; j < idTra2.length; j++) {
            var conca2 = [idTra2[j] + " --> " + transicion2[j]];
            array2.push(conca2);
        }

        console.log("Este Es El Array1: ", array1);
        console.log("Este Es El Array2: ", array2);

        arrayresultante.push(array1);
        arrayresultante.push(array2);
        arrayresultante.push(idTra1);
        arrayresultante.push(transicion1);
        arrayresultante.push(idTra2);
        arrayresultante.push(transicion2);

        return arrayresultante;

    }

}