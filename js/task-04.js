const refs = {
  value: document.body.querySelector("#value"),
  decrementBtn: document.body.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.body.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

const updateValue = (newValue) => {
  refs.value.textContent = newValue;
};

const increaseValue = () => {
  counterValue += 1;
  updateValue(counterValue);
};

const decreaseValue = () => {
  counterValue -= 1;
  updateValue(counterValue);
};

refs.incrementBtn.addEventListener("click", increaseValue);
refs.decrementBtn.addEventListener("click", decreaseValue);
