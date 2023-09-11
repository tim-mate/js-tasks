const refs = {
  text: document.body.querySelector("#text"),
  input: document.body.querySelector("#font-size-control"),
};

const updateFontSize = (newFontSize, element) => {
  element.style.fontSize = `${newFontSize}px`;
};

const onInputChange = (event) => {
  updateFontSize(event.currentTarget.value, refs.text);
};

refs.input.addEventListener("input", onInputChange);
