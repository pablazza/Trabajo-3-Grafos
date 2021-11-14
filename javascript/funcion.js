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

var transiciones0 = ['Entrada', 'Lectura', 'Destino'];
var transiciones = ['Entrada', 'Lectura', 'Destino', 'Ingresar a la Pila', 'Sacar elemento'];

const tablaTransicion1 = document.querySelector("#tablaTransicion1");
const tablaTransicion2 = document.querySelector("#tablaTransicion2");

function TablaTransicion(arrayConjunto, arraylenguaje, tablaTransicion1) {
    var TipoDato = identificaDatos();
    if (TipoDato === 'AFD') {
        var arrayTra = [];
        var tablaPadre = document.createElement('table'),
            filaTitulo = document.createElement('tr');
        tablaPadre.style.marginLeft = "150px";
        tablaPadre.style.paddingBottom = "80px";
        tablaPadre.style.paddingTop = "80px";
        for (let i = 0; i < transiciones0.length; i++) {
            var colTitulo = document.createElement('td');
            colTitulo.className = 'formatoTablaTitulo ';
            colTitulo.textContent = transiciones0[i];
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
                filaDatos.style.width = "70px";
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
                input.style.width = "125px";
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
    } else if (TipoDato === 'AP') {
        var arrayTra = [];
        var tablaPadre = document.createElement('table'),
            filaTitulo = document.createElement('tr');
        tablaPadre.style.marginLeft = "3px";
        tablaPadre.style.paddingBottom = "80px";
        tablaPadre.style.paddingTop = "80px";
        for (let i = 0; i < transiciones.length; i++) {
            var colTitulo = document.createElement('td');
            colTitulo.className = 'formatoTablaTitulo ';
            colTitulo.textContent = transiciones[i];
            colTitulo.style.width = "50px";
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
                    colInput = document.createElement('td'),
                    colInput2 = document.createElement('td'),
                    colInput3 = document.createElement('td');
                var input = document.createElement('input');
                var input2 = document.createElement('input');
                var input3 = document.createElement('input');
                filaDatos.style.width = "50px";
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
                input2.className = 'forma-control';
                input.setAttribute('placeholder', 'Estado Destino');
                input.setAttribute('type', 'text');
                input.style.width = "125px";
                input2.style.width = "145px";
                input3.style.width = "125px";
                input2.setAttribute('placeholder', 'Ingresar elemento');
                input2.setAttribute('type', 'text');
                input3.setAttribute('placeholder', 'Sacar elemento');
                input3.setAttribute('type', 'text');
                input.id = `${arrayConjunto[i]}-${arraylenguaje[j]}`;
                input2.id = `PilaEntra-${arrayConjunto[i]}-${arraylenguaje[j]}`;
                input3.id = `PilaSaca-${arrayConjunto[i]}-${arraylenguaje[j]}`;
                arrayTra.push(input.id);
                colInput.appendChild(input);
                colInput2.appendChild(input2);
                colInput3.appendChild(input3);
                filaDatos.appendChild(colEstados);
                filaDatos.appendChild(collenguaje);
                filaDatos.appendChild(colInput);
                filaDatos.appendChild(colInput2);

                filaDatos.appendChild(colInput3);
                tablaPadre.appendChild(filaDatos);
            }
        }
        tablaTransicion1.appendChild(tablaPadre);

        return arrayTra;
    }

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

function llenarPila1() {

    var aux = llenarNuevo()[0];
    var len = llenarLEN()[0];
    var arrayPilaEntra = [];
    var arrayPilaSaca = [];
    var arrayresultante = [];

    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < len.length; j++) {
            var t1 = document.getElementById(`PilaEntra-${aux[i]}-${len[j]}`).value;
            arrayPilaEntra.push(t1);
        }
    }

    for (let m = 0; m < aux.length; m++) {
        for (let p = 0; p < len.length; p++) {
            var t2 = document.getElementById(`PilaSaca-${aux[m]}-${len[p]}`).value;
            arrayPilaSaca.push(t2);
        }
    }


    console.log("Esta es la pila de entrada:", arrayPilaEntra);
    console.log("Esta es la pila de salida:", arrayPilaSaca);
    arrayresultante.push(arrayPilaEntra); //0
    arrayresultante.push(arrayPilaSaca); //1
    return arrayresultante;


}

function llenarPila2() {

    var aux = llenarNuevo()[1];
    var len = llenarLEN()[1];
    var arrayPilaEntra = [];
    var arrayPilaSaca = [];
    var arrayresultante = [];

    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < len.length; j++) {
            var t1 = document.getElementById(`PilaEntra-${aux[i]}-${len[j]}`).value;
            arrayPilaEntra.push(t1);
        }
    }

    for (let m = 0; m < aux.length; m++) {
        for (let p = 0; p < len.length; p++) {
            var t2 = document.getElementById(`PilaSaca-${aux[m]}-${len[p]}`).value;
            arrayPilaSaca.push(t2);
        }
    }


    console.log("Esta es la pila de entrada:", arrayPilaEntra);
    console.log("Esta es la pila de salida:", arrayPilaSaca);

    arrayresultante.push(arrayPilaEntra); //0
    arrayresultante.push(arrayPilaSaca); //1
    return arrayresultante;

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
        console.log("entro a validador AP");
        var aux3 = validador3();
        var aux4 = validador4();
        if (aux3 === 0) {
            return 0;
        } else if (aux4 === 0) {
            return 0;
        } else {
            llenarTransicion1();
            llenarTransicion2();
            llenarPila1();
            llenarPila2();
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
    output1.className = "pt-4";
    output2.textContent = (`El estado inicial es:  [${entrada1}]`);
    output3.textContent = (`El conjunto de salidas del automata 1 es:  [${salida1}]`);
    output4.textContent = (`El alfabeto asociado es:  [${lenguaje}]:`);
    output5.textContent = (`La transicion 1 es:  [${transicion1}]:`);
    output5.className = "pb-4"

}

function primeraQuintupla() {
    var conjunto1 = llenarNuevo()[0];
    var entrada1 = llenarNuevo()[2];
    var salida1 = llenarNuevo()[3];
    var lenguaje = llenarLEN()[0];
    var pilaEN1 = llenarPila1()[0];

    var pilaRe1 = AutomataPila()[0];
    var transicion1 = transicionCompleta()[0];
    var conjunto2 = llenarNuevo()[1];
    var lenguaje2 = llenarLEN()[1];
    var entrada2 = llenarNuevo()[4];
    var salida2 = llenarNuevo()[5];
    var pilaEN2 = llenarPila2()[0];

    var pilaRe2 = AutomataPila()[1];
    var transicion2 = transicionCompleta()[1];

    const output1 = document.querySelector("#primeraQuintupla1");
    const output2 = document.querySelector("#primeraQuintupla2");
    const output3 = document.querySelector("#primeraQuintupla3");
    const output4 = document.querySelector("#primeraQuintupla4");
    const output5 = document.querySelector("#primeraQuintupla5");
    const output6 = document.querySelector("#primeraQuintupla6");
    const output7 = document.querySelector("#primeraQuintupla7");
    const output8 = document.querySelector("#primeraQuintupla8");
    const output9 = document.querySelector("#primeraQuintupla9");


    const output10 = document.querySelector("#segundaQuintupla1");
    const output11 = document.querySelector("#segundaQuintupla2");
    const output12 = document.querySelector("#segundaQuintupla3");
    const output13 = document.querySelector("#segundaQuintupla4");
    const output14 = document.querySelector("#segundaQuintupla5");
    const output15 = document.querySelector("#segundaQuintupla6");
    const output16 = document.querySelector("#segundaQuintupla7");
    const output17 = document.querySelector("#segundaQuintupla8");
    const output18 = document.querySelector("#segundaQuintupla9");

    //Primera Septupla

    output1.textContent = (`El conjunto Q de estados es:  [${conjunto1}]:`);
    output2.textContent = (`El estado inicial es:  [${entrada1}]`);
    output3.textContent = (`El conjunto de salidas del automata 1 es:  [${salida1}]`);
    output4.textContent = (`El alfabeto asociado es:  [${lenguaje}]:`);
    output5.textContent = (`La transicion 1 es:  [${transicion1}]:`);
    output6.textContent = (`El simbolo inicial de la pila: Z`);
    output7.textContent = (`Pila 1 asociada:  [${pilaEN1}]:`);
    output8.textContent = (`Si se utilizo un correcto desarrollo la Pila Resultante: [Z]`);
    output9.textContent = (`Pila Resultante:  [${pilaRe1}]`);
    output9.className = "mb-5";
    //Segunda Septupla

    output10.textContent = (`El conjunto Q de estados es:  [${conjunto2}]:`);
    output11.textContent = (`El estado inicial es:  [${entrada2}]`);
    output12.textContent = (`El conjunto de salidas del automata 2 es:  [${salida2}]`);
    output13.textContent = (`El alfabeto asociado es:  [${lenguaje2}]:`);
    output14.textContent = (`La transicion 2 es:  [${transicion2}]:`);
    output15.textContent = (`El simbolo inicial de la pila: Z`);
    output16.textContent = (`Pila 2 asociada:  [${pilaEN2}]:`);
    output17.textContent = (`Si se utilizo un correcto desarrollo la Pila Resultante: [Z]`);
    output18.textContent = (`Pila Resultante:  [${pilaRe2}]`);
    output18.className = "mb-5";

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
        if (transi[k] === "@" || transi[k] === "Z" || transi[k] === "z") {
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
        if (transi[k] === "@" || transi[k] === "Z" || transi[k] === "z") {
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

function ObtenerDatos() {
    var transicion1 = llenarTransicion1();
    var aux1 = [];
    var aux2 = llenarLENAFD()[0]; // x y

    var ayuda1;
    var ayuda2;
    var conjunto1 = llenarNuevo()[0];
    var aux3 = [],
        aux4 = [];
    for (let i = 0; i < conjunto1.length; i++) {
        for (let j = 0; j < aux2.length; j++) {
            ayuda1 = conjunto1[i];
            aux3.push(ayuda1);
            console.log("AUX3 VALORES =", aux3);
            ayuda2 = aux2[j];
            aux4.push(ayuda2);
        }
    }
    aux1.push(aux3); //Conjunto1 [0]
    aux1.push(aux4); //Lenguaje1 [1]
    aux1.push(transicion1); //transicion1 [2]

    return aux1;
}

function AutomataPila() {
    var arraypila = [];
    var arraypila2 = [];
    var arrayresultante = [];
    arraypila.push('Z');
    arraypila2.push('Z');
    var arrayEntra1 = llenarPila1()[0];
    var arraySale1 = llenarPila1()[1];
    var arrayEntra2 = llenarPila2()[0];
    var arraySale2 = llenarPila2()[1];
    for (let i = 0; i <= arrayEntra1.length; i++) {
        if (arraySale1[i] === "@" && arrayEntra1[i] === "@") {
            console.log("estado vacio");
        } else if (arraySale1[i] === "@" && arrayEntra1[i] !== "@") {
            arraypila.push(arrayEntra1[i]);
        } else if (arraySale1[i] !== "@" && arrayEntra1[i] === "@") {
            for (let t = arraypila.length; t > 0; t--) {
                if (arraypila[t] === arraySale1[i]) {
                    arraypila.pop();
                }
            }

        }
    }
    console.log("Esta es la pila limpia: ", arraypila);

    for (let i = 0; i <= arrayEntra2.length; i++) {
        if (arraySale2[i] === "@" && arrayEntra2[i] === "@") {
            console.log("estado vacio");
        } else if (arraySale2[i] === "@" && arrayEntra2[i] !== "@") {
            arraypila2.push(arrayEntra2[i]);
        } else if (arraySale2[i] !== "@" && arrayEntra2[i] === "@") {
            for (let t = arraypila2.length; t > 0; t--) {
                if (arraypila2[t] === arraySale2[i]) {
                    arraypila2.pop();
                }
            }

        }
    }
    console.log("Esta es la pila limpia 2: ", arraypila2);
    arrayresultante.push(arraypila); //0
    arrayresultante.push(arraypila2); //1

    return arrayresultante;

}

function ER() { //SOLO PARA DOS ESTADOS!
    var lenguaje = ObtenerDatos()[1];
    var conjunto = ObtenerDatos()[0];
    var transicion = ObtenerDatos()[2];
    console.log("valores a trabajar =", conjunto, lenguaje, transicion);
    var aux4 = [],
        aux6 = [];
    for (let i = 0; i < conjunto.length; i++) {
        if (conjunto[i] === transicion[i]) {
            transicion[i] = "*";
            console.log(i, " = ", transicion[i]);
        }
    }
    console.log("TRANSICION =", transicion);
    for (let j = 0; j < lenguaje.length; j++) {
        if (conjunto[j] !== conjunto[j + 1]) {
            for (let k = 0; k < lenguaje.length; k++) {
                if (transicion[k] === conjunto[j]) {
                    if (conjunto[k] === transicion[j]) {
                        console.log("valor cambiado a k =", transicion[k]);
                        var valor1 = lenguaje[j - 1] + transicion[j - 1] + "(" + lenguaje[j] + ")"; //"(" + lenguaje[j] + transicion[j] + ")"
                        console.log("VALOR1 =", valor1);
                        aux4.push(valor1);
                        transicion[k] = "k";
                        console.log("primer valor de valores =", valor1);
                    } else if (conjunto[k] === transicion[j - 1]) {
                        var valor1 = lenguaje[j - 1] + "(" + lenguaje[j] + transicion[j] + ")"; //+"(" + lenguaje[j] + transicion[j] + ")"
                        aux4.push(valor1);
                        transicion[k] = "k";
                        console.log("segundo valor de valores =", valor1);
                    }
                }
            }
        }
    }
    console.log("LLEGA AQUI", aux4);
    for (let m = 0; m < conjunto.length; m++) {
        console.log("LLEGA AQUI", conjunto.length);
        if (conjunto[m] === conjunto[m + 1]) {
            console.log("LLEGA AQUI 2", aux6);
            if (transicion[m] === "k") {
                console.log("LLEGA AQUI 3", aux6);
                for (let i = 0; i < aux4.length; i++) {
                    console.log("LLEGA AQUI 4", aux6);
                    if (aux4[i] !== "0") {
                        transicion[m] = "*";
                        var valor3 = conjunto[m - 1] + " = " + lenguaje[m + 1] + transicion[m + 1] + lenguaje[m] + transicion[m] + aux4[i];
                        console.log("primer valor =", valor3);
                        aux6.push(valor3);
                        aux4[i] = "0";
                        i = aux4.length;
                    }
                }
            } else if ((transicion[m + 1] === "k")) {
                for (let l = 0; l < aux4.length; l++) {
                    if (aux4[l + 1] !== "0") {
                        transicion[m + 1] = "*";
                        var valor3 = conjunto[m - 1] + " = " + lenguaje[m] + transicion[m] + lenguaje[m + 1] + transicion[m + 1] + aux4[l];
                        console.log("segundo valor =", valor3, aux4[l]);
                        aux6.push(valor3);
                        aux4[l] = "0";
                        l = aux4.length;
                    }
                }
            } else {
                var valor3 = conjunto[m] + " = " + lenguaje[m] + transicion[m] + lenguaje[m + 1] + transicion[m + 1];
                console.log("tercer valor =", valor3);
                aux6.push(valor3);
            }
        }
    }
    console.log("este es el array con el resultado final con los procesos de cada paso:", aux6);
    return aux6;
}

function union() {
    var validacion = AutomataPila()[0];
    var validacion2 = AutomataPila()[1];
    if (validacion.length > 1) {
        window.alert("La pila 1 no se vacio correctamente, pero... no te preocupes!, puedes modificarlo directamente en la tabla de transiciones");
    } else if (validacion2.length > 1) {
        window.alert("La pila 2 no se vacio correctamente, pero... no te preocupes!, puedes modificarlo directamente en la tabla de transiciones");
    } else if (validacion.length === 1 && validacion2.length === 1) {
        union2();
    }
}

function concatenacion() {
    var validacion3 = AutomataPila()[0];
    var validacion4 = AutomataPila()[1];
    if (validacion3.length > 1) {
        window.alert("La pila 1 no se vacio correctamente, pero... no te preocupes!, puedes modificarlo directamente en la tabla de transiciones");
    } else if (validacion4.length > 1) {
        window.alert("La pila 2 no se vacio correctamente, pero... no te preocupes!, puedes modificarlo directamente en la tabla de transiciones");
    } else if (validacion3.length === 1 && validacion4.length === 1) {
        concatenacion2();
    }
}

function union2() {
    var newEstados = ['Q0'];
    var automata1 = llenarNuevo()[0];
    var automata2 = llenarNuevo()[1];
    var salidas1 = llenarNuevo()[3];
    var salidas2 = llenarNuevo()[5];
    var entradas1 = llenarNuevo()[2];
    var entradas2 = llenarNuevo()[4];
    var lenguajeUnion = [];
    var lenguaje1 = llenarLEN()[0];
    var lenguaje2 = llenarLEN()[1];
    var conjuntoUnion = [],
        unionSalidaas = [],
        transicionUnion = [];

    conjuntoUnion.push(newEstados);

    for (let i = 0; i < automata1.length; i++) {
        conjuntoUnion.push(automata1[i]);
    }

    for (let k = 0; k < automata2.length; k++) {
        conjuntoUnion.push(automata2[k]);
    }

    for (let a = 0; a < salidas1.length; a++) {
        unionSalidaas.push(salidas1[a]);
    }
    for (let b = 0; b < salidas2.length; b++) {
        unionSalidaas.push(salidas2[b]);
    }
    lenguajeUnion.push(lenguaje1);
    lenguajeUnion.push(lenguaje2);
    lenguajeUnion.push("@");

    var transicionAutomata1 = transicionCompleta()[0];
    var transicionAutomata2 = transicionCompleta()[1];

    transicionUnion.push(newEstados[0] + "-@-->" + entradas1[0]);
    transicionUnion.push(newEstados[0] + "-@-->" + entradas2[0]);

    for (let c = 0; c < transicionAutomata1.length; c++) {
        transicionUnion.push(transicionAutomata1[c]);
    }
    for (let d = 0; d < transicionAutomata2.length; d++) {
        transicionUnion.push(transicionAutomata2[d]);
    }
    const output1 = document.querySelector("#conjuntoUnion");
    const output2 = document.querySelector("#entradaUnion");
    const output3 = document.querySelector("#salidaUnion");
    const output4 = document.querySelector("#lenguajeUnion");
    const output5 = document.querySelector("#transicionUnion");

    output1.textContent = (`El conjunto union de estados es =  [${conjuntoUnion}]:`);
    output1.className = "mb-2 ml-3";
    output2.textContent = (`El estado inicial viene dado por =  [${newEstados}]`);
    output2.className = "mb-2 ml-3";
    output3.textContent = (`Las salidas de Union del automata 1 es =  [${unionSalidaas}]`);
    output3.className = "mb-2 ml-3";
    output4.textContent = (`El alfabeto asociado es =  [${lenguajeUnion}]:`);
    output4.className = "mb-2 ml-3";
    output5.textContent = (`La transicion de union es =  [${transicionUnion}]:`);
    output5.className = "mb-2 ml-3";


}


function concatenacion2() {

    var conjunto1 = llenarNuevo()[0];
    var conjunto2 = llenarNuevo()[1];
    var entrada1 = llenarNuevo()[2];
    var salida2 = llenarNuevo()[5];

    console.log("Este Es El Conjunto N°1 :", conjunto1);
    console.log("Este Es El Conjunto N°2 :", conjunto2);

    var transicion1 = transicionCompleta()[0];
    var transicion2 = transicionCompleta()[1];

    var lenguaje1 = llenarLEN()[0];
    var lenguaje2 = llenarLEN()[1];


    var arrayConjuntoConca = [];
    var entradaConca = [];
    var salidaConca = [];
    var transicionConca = [];
    var lenguajesConca = [];

    for (let i = 0; i < conjunto1.length; i++) {
        arrayConjuntoConca.push(conjunto1[i]);
    }

    for (let j = 0; j < conjunto2.length; j++) {
        arrayConjuntoConca.push(conjunto2[j]);
    }

    entradaConca.push(entrada1[0]);

    for (let w = 0; w < salida2.length; w++) {
        salidaConca.push(salida2[w]);
    }

    transicionConca.push(entrada1[0] + "-@-->" + salida2[0]);

    for (let a = 0; a < transicion1.length; a++) {
        transicionConca.push(transicion1[a]);
    }

    for (let b = 0; b < transicion1.length; b++) {
        transicionConca.push(transicion2[b]);
    }

    for (let c = 0; c < lenguaje1.length; c++) {
        lenguajesConca.push(lenguaje1[c]);
    }

    for (let d = 0; d < lenguaje2.length; d++) {
        lenguajesConca.push(lenguaje2[d]);
    }

    lenguajesConca.push("@");

    const output1 = document.querySelector("#conjuntoConca");
    const output2 = document.querySelector("#entradaConca");
    const output3 = document.querySelector("#salidaConca");
    const output4 = document.querySelector("#lenguajeConca");
    const output5 = document.querySelector("#transicionConca");

    output1.textContent = (`El conjunto de concatenacion de estados es =  [${arrayConjuntoConca}]:`);
    output1.className = "mb-2 ml-3";
    output2.textContent = (`El estado inicial viene dado por =  [${entradaConca}]`);
    output2.className = "mb-2 ml-3";
    output3.textContent = (`Las salida de concatenacion del automata 1 es =  [${salidaConca}]`);
    output3.className = "mb-2 ml-3";
    output4.textContent = (`El alfabeto asociado es =  [${lenguajesConca}]:`);
    output4.className = "mb-2 ml-3";
    output5.textContent = (`La transicion de concatenacion es =  [${transicionConca}]:`);
    output5.className = "mb-2 ml-3";



}

function ER2() {
    var lenguaje = ObtenerDatos()[1];
    var conjunto = ObtenerDatos()[0];
    var transicion = ObtenerDatos()[2];
    var conjunto1 = llenarNuevo()[0];
    var Er = "No hay ER que lo defina";
    console.log("valores a trabajar =", conjunto, lenguaje, transicion);
    for (let i = 0; i < conjunto.length; i++) {
        if (conjunto[i] === transicion[i]) {
            transicion[i] = "*";
            console.log(i, " = ", transicion[i]);
        }
    }
    for (let i = 0; i < conjunto1.length; i++) {
        for (let j = 0; j < transicion.length; j++) {
            if (conjunto1[i] === transicion[j]) {
                var NuevosLenguaje = [];
                var NuevasSalidas = [];
                let p = llenarLENAFD()[0].length;
                while (p > 0) {
                    for (let m = 0; m < conjunto.length; m++) {
                        console.log("Transicion que ingresa = ", transicion[m]);
                        if (conjunto[m] === conjunto1[i]) {
                            if (transicion[m] === "*") {
                                NuevosLenguaje.push(lenguaje[m]);
                                NuevasSalidas.push(transicion[m]);
                                p--;
                            } else if (transicion[m].length > 2) {
                                NuevosLenguaje.push(lenguaje[m]);
                                NuevasSalidas.push(transicion[m]);
                                p--;
                            } else {
                                NuevosLenguaje.push(lenguaje[m]);
                                NuevasSalidas.push("*");
                                p--;
                            }
                        }
                    }
                }
                transicion[j] = "";
                for (let h = 0; h < NuevosLenguaje.length; h++) {
                    transicion[j] = transicion[j] + NuevosLenguaje[h] + NuevasSalidas[h];
                    console.log(transicion[j].split("").sort());
                    console.log("Valores = ", transicion[j]);
                    Er = transicion[j];
                }
            }
        }
    }
    return Er;


}

function imprimirEr() {
    var expresion = ER2();
    const output1 = document.querySelector("#LenguajeAsociado1");
    const output2 = document.querySelector("#LenguajeAsociado2");
    output1.textContent = (`Expresion regular del Automata`);
    output1.className = "mb-3 pt-4";
    output2.textContent = (`Er = [${expresion}]`);
    output2.className = "mb-4 pb-4";
}