var p = 0; //Prestamo
var i = 0; //Interes anual
var t = 0; // plazo de tiempo
var im = 0; // interes mensual
var r = 0; // Cuota fija
var int = 0; // valor de los interes
var k = 0; //Abono a capital
var acum = 0;


function insertElement() {
    p = document.getElementById("Prestamo").value;
    i = document.getElementById("Interes").value;
    t = document.getElementById("Meses").value;
    console.log(p, "Valor prestamo");
    console.log(i, "interes");
    console.log(t, "periodo de tiempo");

    //Valores inicales

    // Valores mes 0
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Mes: 0");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    // Valor Amortizacion
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Amortizcion: 0");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    // Valor Interes
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Interes: 0");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    // Valor Prestamo
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`Prestamos: ${p}`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    //
    var node = document.createElement("LI");
    var textnode = document.createTextNode("---");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    //CONSTANTE 
    im = i / 1200;
    r = p * (im / (1 - (Math.pow(1 / (1 + im), t)))); // math.pow () devuelve la  base elevada al exponente




    //iteracion por mes
    for (var i1 = 1; i1 <= t; i1++) {

        // Calcular el interes que genera al mes
        int = p * im; // saldo anterior por el periodo 1

        // Abono a capital
        k = r - int;

        // calculo nuevo valor de la deuda
        p = p - k;

        //acumulado ganacias
        acum =int+acum;



        // mes
        var node = document.createElement("LI");
        var textnode = document.createTextNode(`Mes: ${i1}`);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        // Valor cuota
        var node = document.createElement("LI");
        var textnode = document.createTextNode(`Valor Cuota: ${Math.round(r)}`);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        // Valor interes
        var node = document.createElement("LI");
        var textnode = document.createTextNode(`Intereses mes: ${Math.round(int)}`);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        // abono a capital
        var node = document.createElement("LI");
        var textnode = document.createTextNode(`Abono: ${Math.round(k)}`);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        // saldo del mes
        var node = document.createElement("LI");
        var textnode = document.createTextNode(`Saldo mes: ${Math.round(p)}`);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        // espacio
        var node = document.createElement("LI");
        var textnode = document.createTextNode("--------");
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);


    }
    var node = document.createElement("LI");
    var textnode = document.createTextNode("--------");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`El banco gana: ${Math.round(acum)}`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

}


function deleteChild() { 
    //Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
    var e = document.querySelector("ul"); 
    //propiedad de solo lectura devuelve el primer elemento secundario del objeto 
    var first = e.firstElementChild;
    // iteracion para encontrar el primer elmento 
    while (first) { 
        first.remove(); // remueve el primer elemento
        first = e.firstElementChild; // actualiza el primer elemento
    } 
} 
