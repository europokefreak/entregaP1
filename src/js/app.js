
const texto = document.getElementById('texto');
const audio = document.getElementById('audio');

audio.style.display = 'none';

        
// Agregamos un evento de clic al texto
texto.addEventListener('click', () => {
    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
});
