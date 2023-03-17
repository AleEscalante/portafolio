const textArea = document.querySelector(".text-area");
const mensajeEncriptado = document.querySelector(".mensaje-encriptado");
const copia = document.querySelector(".btn-copiar");
copia.style.display = "none"

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function validarTexto() {
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z0-9\s\.,;:!¡¿?"'\(\)-]+$/g);

    if (!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encriptar(encriptado) {
    let matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptado = encriptado.toLowerCase();

    for (let i = 0; i < matrizLlaves.length; i++) {
        if (encriptado.includes(matrizLlaves[i][0])) {
            encriptado = encriptado.replaceAll(matrizLlaves[i][0], matrizLlaves[i][1]);
        }
    }

    return encriptado;
}

function btnEncriptar() {
    if (!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensajeEncriptado.value = textoEncriptado;
        textArea.value = "";
        mensajeEncriptado.style.backgroundImage = "none";
        copia.style.display = "block";
    }
}

function desencriptar(desencriptado) {
    let matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencriptado = desencriptado.toLowerCase();

    for (let i = 0; i < matrizLlaves.length; i++) {
        if (desencriptado.includes(matrizLlaves[i][1])) {
            desencriptado = desencriptado.replaceAll(matrizLlaves[i][1], matrizLlaves[i][0]);
        }
    }

    return desencriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensajeEncriptado.value = textoDesencriptado;
    textArea.value = "";
    mensajeEncriptado.style.backgroundImage = "/imagenes/Muñeco.png";
}

function copiar() {
    mensajeEncriptado.select();
    navigator.clipboard.writeText(mensajeEncriptado.value)
    mensajeEncriptado.value = "";
    alert("Texto Copiado")
}