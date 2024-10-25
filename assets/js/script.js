// JavaScript for adding the magic button effect and fireflies animation
const magicButton = document.getElementById('magic-button');
const firefliesContainer = document.getElementById('fireflies-container');

function addMagicEffect() {
  // Adding Fireflies
  for (let i = 0; i < 20; i++) {
    let firefly = document.createElement('div');
    firefly.classList.add('firefly');
    firefly.style.top = `${Math.random() * window.innerHeight}px`;
    firefly.style.left = `${Math.random() * window.innerWidth}px`;
    firefliesContainer.appendChild(firefly);
  }
}

// Add magic on button click
magicButton.addEventListener('click', addMagicEffect);
