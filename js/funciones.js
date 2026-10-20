function sumaDosNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    document.getElementById("resultado").innerText = resultado;
}

function restaDosNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 - num2;
    document.getElementById("resultado").innerText = resultado;
}

function multiplicacionDosNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2;
    document.getElementById("resultado").innerText = resultado;
}

function divisionDosNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num2 !== 0 ? num1 / num2 : "No se puede dividir por 0";
    document.getElementById("resultado").innerText = resultado;
}
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("El nombre debe ser completado");
        return false;
    }
}