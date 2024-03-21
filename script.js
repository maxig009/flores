const petals = document.querySelectorAll('.Petal1, .Petal2, .Petal3');
const messageContainer = document.querySelector('.message-container');
const lovesMe = document.getElementById('lovesMe');
const lovesMeNot = document.getElementById('lovesMeNot');
let isLovesMe = true; // Variable para alternar entre "Me ama" y "No me ama"

petals.forEach(petal => {
  petal.addEventListener('click', () => {
    // Agrega una clase de animación al pétalo para hacerlo caer
    petal.classList.add('falling');

    // Muestra el mensaje correspondiente
    if (isLovesMe) {
      lovesMe.style.display = 'block';
      lovesMeNot.style.display = 'none';
    } else {
      lovesMe.style.display = 'none';
      lovesMeNot.style.display = 'block';
    }

    isLovesMe = !isLovesMe; // Alterna entre "Me ama" y "No me ama"

    // Mostrar el mensaje por un tiempo y luego ocultarlo
    setTimeout(() => {
      lovesMe.style.display = 'none';
      lovesMeNot.style.display = 'none';
    }, 2000); // Cambia este valor para ajustar la duración del mensaje

    // Elimina la clase de animación después de que el pétalo haya caído
    setTimeout(() => {
      petal.classList.remove('falling');
    }, 2000); // Ajusta este valor para que coincida con la duración de la animación de caída
  });
});
// Obtén el elemento de audio por su id
const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

// Espera a que la página se cargue completamente
window.addEventListener('click', () => {
  // Reproduce el audio cuando la página se haya cargado completamente
  audio.play();

});
