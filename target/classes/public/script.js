function enviarSin() {
    var parm = document.getElementById("sin1").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/sin?angle=" + encodeURIComponent(parm), true);
    //console.log("Hola estoy acá");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resultado = xhr.responseText;
            console.log(resultado);
            document.getElementById("resultado1").innerText = resultado;
        }
    };
    xhr.send();
}

function enviarCos() {
    var parm = document.getElementById("cos1").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/cos?angle=" + encodeURIComponent(parm), true);
    //console.log("Hola estoy acá");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resultado = xhr.responseText;
            console.log(resultado);
            document.getElementById("resultado2").innerText = resultado;
        }
    };
    xhr.send();
}

function enviarPalindromo() {
    var parm = document.getElementById("palindromo1").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/palindromo?word=" + encodeURIComponent(parm), true);
    //console.log("Hola estoy acá");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resultado = xhr.responseText;
            console.log(resultado);
            document.getElementById("resultado3").innerText = resultado;
        }
    };
    xhr.send();
}

function enviarDimension() {
    var parm1 = document.getElementById("dimension1").value;
    var parm2 = document.getElementById("dimension2").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/dimension?x=" + encodeURIComponent(parm1) +"&y=" + encodeURIComponent(parm2), true);
    //console.log("Hola estoy acá");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resultado = xhr.responseText;
            console.log(resultado);
            document.getElementById("resultado4").innerText = resultado;
        }
    };
    xhr.send();
}