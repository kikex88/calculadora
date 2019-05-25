
//variable que contendra la expresion digitada

var expresion = "";

// función para obtener la expresion
function getExpresion(valor)
{
    expresion +=valor;

    // vamos a mostrar la expresion
    document.getElementById('expresion').value = expresion;
}

//función para limpiar
function limpiar()
{
    document.getElementById("expresion").value = "";
    expresion="";
}

// función para realizar y mostrar el resultado
function resultado() {
    alert(expresion);
}