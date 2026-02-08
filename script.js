/* Screen switching */
function showYes() {
  switchScreen('yesScreen');
  sparkleBurst();
}

function switchScreen(id) {
  document.querySelectorAll('.screen')
    .forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* 🌹 Falling roses */
function createRose() {
  const rose = document.createElement('div');
  rose.className = 'rose';
  rose.textContent = '🌹';
  rose.style.left = Math.random() * 100 + 'vw';
  rose.style.fontSize = (18 + Math.random() * 18) + 'px';
  rose.style.animationDuration = (4 + Math.random() * 4) + 's';
  document.body.appendChild(rose);
  setTimeout(() => rose.remove(), 8000);
}
setInterval(createRose, 350);

/* 😏 Dodge No button */
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

/* 🖼️ Carousel */
const images = document.querySelectorAll('.carousel img');
let current = 0;
setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 3000);

/* ✨ Sparkle burst */
function sparkleBurst() {
  for (let i = 0; i < 40; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = (window.innerWidth / 2 + (Math.random() * 200 - 100)) + 'px';
    sparkle.style.top = (window.innerHeight / 2 + (Math.random() * 200 - 100)) + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}
