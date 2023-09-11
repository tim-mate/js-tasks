const refs = {
  input: document.body.querySelector("#validation-input"),
};

const onInputBlur = (event) => {
  let newClass =
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
      ? "valid"
      : "invalid";

  if (
    event.currentTarget.classList.contains("invalid") &&
    newClass === "valid"
  ) {
    event.currentTarget.classList.replace("invalid", newClass);
  } else {
    event.currentTarget.classList.add(newClass);
  }
};

refs.input.addEventListener("blur", onInputBlur);
