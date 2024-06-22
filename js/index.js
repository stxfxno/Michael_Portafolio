function copiarCorreo() {
    var email = document.getElementById("email");
    email.select();
    email.setSelectionRange(0, 99999); // Para dispositivos móviles
    navigator.clipboard.writeText(email.value);
}

function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
        setTimeout(function() {
            element.classList.add('hidden');
        }, 500); // El tiempo debe coincidir con la duración de la transición CSS
    } else {
        element.classList.remove('hidden');
        setTimeout(function() {
            element.classList.add('expanded');
        }, 10); // Pequeño retraso para que la transición ocurra
    }
}
