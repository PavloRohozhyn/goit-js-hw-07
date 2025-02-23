function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('.change-color').addEventListener('click', () => {
  const bgColor = getRandomHexColor() // fix
  document.body.style.backgroundColor = bgColor;
  document.querySelector('.color').textContent = bgColor;
})
