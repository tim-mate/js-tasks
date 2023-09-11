const refs = {
  colorToggle: document.body.querySelector(".change-color"),
  colorDisplay: document.body.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onColorToggleClick = () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;
  refs.colorDisplay.innerHTML = newColor;
};

refs.colorToggle.addEventListener("click", onColorToggleClick);
