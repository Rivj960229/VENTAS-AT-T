let rolSeleccionado = "";

function seleccionarRol(rol) {
    rolSeleccionado = rol;
    document.getElementById('seleccionRol').style.display = 'none';
    document.getElementById('formulario').style.display = 'flex';
    document.getElementById('asesor').value = rol + ": ";
    document.getElementById('asesor').disabled = false;
}

function copiarAlPortapapeles() {
    const nombreIngresado = document.getElementById('asesor').value.replace(rolSeleccionado + ": ", "");
    const datos = `${rolSeleccionado}: ${nombreIngresado}\n` +
                  `Número a portar: ${document.getElementById('numeroPortar').value}\n` +
                  `NIP: ${document.getElementById('nip').value}\n` +
                  `Zona: ${document.getElementById('zona').value}\n` +
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
    document.getElementById('asesor').disabled = true;
    document.getElementById('icc').value = "";
    document.getElementById('seleccionRol').style.display = 'flex';
    document.getElementById('formulario').style.display = 'none';
}

