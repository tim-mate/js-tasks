const refs = {
  input: document.body.querySelector("#name-input"),
  output: document.body.querySelector("#name-output"),
};

const onInputChange = (event) => {
  if (
    event.currentTarget.value.includes(" ") ||
    event.currentTarget.value.length === 0
  ) {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
};

refs.input.addEventListener("input", onInputChange);
