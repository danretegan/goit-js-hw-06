// Obținem lista categoriilor:
const categoriesList = document.getElementById("categories");
// Obținem toate elementele li cu clasa "item":
const categories = categoriesList.getElementsByClassName("item");
// Afișam in consola numărul total de categorii:
console.log(`Number of categories: ${categories.length}`);

// Parcurgem fiecare categorie și obținem informațiile cerute:
for (let i = 0; i < categories.length; i = i + 1) {
  const category = categories[i];
  const categoryName = category.getElementsByTagName("h2")[0].innerText;
  const elements = category.getElementsByTagName("li");

  // Afișam titlul categoriei și numărul de elemente din aceasta:
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
}
