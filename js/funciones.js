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

$(document).ready(function() {
    $("#miFormulario").submit(function(event) {
        var esValido = true;

        $(".error-msg").hide();

        if ($("#nombre").val().trim() === "") {
            $("#error-nombre").show();
            esValido = false;
        }
        if ($("#apellido").val().trim() === "") {
            $("#error-apellido").show();
            esValido = false;
        }
        if ($("#email").val().trim() === "") {
            $("#error-email").show();
            esValido = false;
        }
        if ($("#telefono").val().trim() === "") {
            $("#error-telefono").show();
            esValido = false;
        }
        if ($("#fecha_nac").val() === "") {
            $("#error-fecha").show();
            esValido = false;
        }

        if (!esValido) {
            event.preventDefault();[cite: 13]
        }
    });
});