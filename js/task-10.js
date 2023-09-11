const refs = {
  createBtn: document.body.querySelector("button[data-create]"),
  destroyBtn: document.body.querySelector("button[data-destroy]"),
  input: document.body.querySelector("#controls input"),
  boxes: document.body.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amountToDo, container) => {
  const amountCreated = container.children.length;
  let newBoxesMarkup = ``;

  for (let i = 1; i <= amountToDo; i += 1) {
    let boxWidth = 0;
    let boxHeight = 0;
    const boxColor = getRandomHexColor();

    boxWidth = 30 + (i + amountCreated - 1) * 10;
    boxHeight = 30 + (i + amountCreated - 1) * 10;
    const boxMarkup = `<div style ='width:${boxWidth}px; height:${boxHeight}px; background-color:${boxColor};'></div>`;
    newBoxesMarkup += boxMarkup;
  }

  container.insertAdjacentHTML("beforeend", newBoxesMarkup);
};

const onCreateBtnClick = () => {
  const wantedAmount = refs.input.value;

  createBoxes(wantedAmount, refs.boxes);
};

const onDestroyBtnClick = () => {
  refs.boxes.innerHTML = ``;
  refs.input.value = 1;
};

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);
