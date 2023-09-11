/* 
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const refs = {
  categories: document.querySelectorAll(".item"),
};

const getCategoriesNumber = (categoriesList) => categoriesList.length;

const getCategoryInfo = (category) => {
  const title = category.querySelector("h2").textContent;
  const categoryItemsNumber = category.querySelector("ul").children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${categoryItemsNumber}`);
};

const getCategoriesInfo = (
  categoriesList,
  getCategoriesNumber,
  getCategoryInfo
) => {
  console.log(`Number of categories: ${getCategoriesNumber(categoriesList)}`);
  categoriesList.forEach(getCategoryInfo);
};

getCategoriesInfo(refs.categories, getCategoriesNumber, getCategoryInfo);
