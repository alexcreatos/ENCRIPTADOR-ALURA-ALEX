// Función para encriptar el texto
function encriptarTexto(texto) {
    const reglas = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return texto.replace(/[eioua]/g, letra => reglas[letra]);
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    const reglas = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return texto.replace(/enter|imes|ai|ober|ufat/g, clave => reglas[clave]);
}

// Validar si el texto solo contiene letras minúsculas y sin acentos
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Copiar texto al portapapeles
function copiarTexto() {
    const textoCopiado = document.querySelector('.evaluar').value;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        alert('Texto copiado al portapapeles');
    });
}

// Manejar el evento de encriptar
document.querySelector('.btn-encriptar').addEventListener('click', () => {
    const texto = document.querySelector('.encriptar').value;
    if (validarTexto(texto)) {
        document.querySelector('.evaluar').value = encriptarTexto(texto);
        document.querySelector('.btn-copiar').style.visibility = 'visible';
        document.querySelector('.tarjeta-contenedor').style.display = 'none';
    } else {
        alert('Solo se permiten letras minúsculas sin acentos ni caracteres especiales.');
    }
});

// Manejar el evento de desencriptar
document.querySelector('.btn-desencriptar').addEventListener('click', () => {
    const texto = document.querySelector('.encriptar').value;
    if (validarTexto(texto)) {
        document.querySelector('.evaluar').value = desencriptarTexto(texto);
        document.querySelector('.btn-copiar').style.visibility = 'visible';
        document.querySelector('.tarjeta-contenedor').style.display = 'none';
    } else {
        alert('Solo se permiten letras minúsculas sin acentos ni caracteres especiales.');
    }
});

// Manejar el evento de copiar texto
document.querySelector('.btn-copiar').addEventListener('click', copiarTexto);

// Ocultar imagen y texto cuando se escribe en el textarea
document.querySelector('.encriptar').addEventListener('input', () => {
    const textAreaValue = document.querySelector('.encriptar').value;
    if (textAreaValue.length > 0) {
        document.querySelector('.tarjeta-contenedor').style.display = 'none';
    } else {
        document.querySelector('.tarjeta-contenedor').style.display = 'block';
    }
});