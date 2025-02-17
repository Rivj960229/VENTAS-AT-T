function copiarAlPortapapeles() {
    const datos = `Número a portar: ${document.getElementById('numeroPortar').value}\n` +
                  `NIP: ${document.getElementById('nip').value}\n` +
                  `Zona: ${document.getElementById('zona').value}\n` +
                  `Asesor: ${document.getElementById('asesor').value}\n` +
                  `ICC: ${document.getElementById('icc').value}`;
    navigator.clipboard.writeText(datos).then(() => {
        alert("Datos copiados al portapapeles");
    });
}

function nuevaVenta() {
    document.getElementById('numeroPortar').value = "";
    document.getElementById('nip').value = "";
    document.getElementById('zona').value = "";
    document.getElementById('asesor').value = "";
    document.getElementById('icc').value = "";
}