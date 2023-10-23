// Exercițiul 9
// Scrieți un script care schimbă culorile de fundal al elementului <body>, prin stiluri inline, atunci când se face click pe button.change-color și afișați valoarea culorii în span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", function () {
  // Se generează o culoare aleatoare folosind funcția getRandomHexColor():
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor; // Se actualizează stilul de fundal al întregii pagini (reprezentată de document.body) cu culoarea generată aleator.

  colorSpan.textContent = randomColor; // Se actualizează textul din interiorul elementului span cu clasa "color" cu valoarea culorii generate aleator:
});
