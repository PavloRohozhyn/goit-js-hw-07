function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputControl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const boxContainer = document.getElementById('boxes');

function createBoxes(amount) {
  const fragment = document.createDocumentFragment(); // create empty fragment (fix)
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; // element size
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box) // append to fragment
  }
  boxContainer.innerHTML = ''; // clear
  boxContainer.appendChild(fragment); // render into DOM (fix)
}

function destroyBoxes() {
  boxContainer.innerHTML = ''; // clear block
}

createBtn.addEventListener('click', () => {
  const amount = Number(inputControl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  inputControl.value = ''; // clear text
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);