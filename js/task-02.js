const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  ingredientsList: document.body.querySelector("#ingredients"),
};

const turnIntoElements = (array, tag, newClass) => {
  const arrayOfNewElements = [];

  array.forEach((itemOfArray) => {
    const item = document.createElement(tag);

    item.textContent = itemOfArray;
    item.classList.add(newClass);
    arrayOfNewElements.push(item);
  });

  return arrayOfNewElements;
};

const arrayOfItems = turnIntoElements(ingredients, "li", "item");
refs.ingredientsList.append(...arrayOfItems);
