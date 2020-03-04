  window.addEventListener('keydown', (e) => {
    document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing');
    document.querySelector(`audio[data-key="${e.keyCode}"]`).play();
  });
  window.addEventListener('keyup', (e) => document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing')); 

  

  