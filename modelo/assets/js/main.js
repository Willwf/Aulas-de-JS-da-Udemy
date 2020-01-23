// Capturar evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Evento Prevenido");

});

function setResultado (msg) {

}