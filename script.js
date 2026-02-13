const boton = document.getElementById('botonCorazon');
const titulo = document.getElementById('titulo');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', function() {
    titulo.innerText = "¡Te quiero mucho!";
    mensaje.innerText = "Eres la persona más importante para mí. ❤️";
    document.body.style.backgroundColor = "#b3ffc9"; ### Cambia el fondo a un color rosa suave
});