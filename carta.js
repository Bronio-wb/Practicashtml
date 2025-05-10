const flap = document.getElementById('flap');
const carta = document.getElementById('carta');
const sobre = document.getElementById('sobre');

sobre.addEventListener('click', () => {
  flap.style.transform = 'rotateX(-180deg)';
  carta.style.transform = 'translateY(0)';
  carta.style.opacity = '1';
});
