function Sumar(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = parseFloat(valor1) + parseFloat(valor2);
    alert(resultado);
    return resultado;
}
function Restar(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = parseFloat(valor1) - parseFloat(valor2);
    alert(resultado);
    return resultado;
}
function Dividir(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = parseFloat(valor1) / parseFloat(valor2);
    alert(resultado);
    return resultado;
}
function Multiplicar(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = parseFloat(valor1) * parseFloat(valor2);
    alert(resultado);
    return resultado;
}