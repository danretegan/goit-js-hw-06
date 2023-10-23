function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById("boxes");
  let boxSize = 30;
  for (let i = 0; i < amount; i = i + 1) {
    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box); // Adaugă div-ul creat ca un copil al elementului boxesDiv pentru a-l afișa pe pagină.
    boxSize = boxSize + 10;
  }
}

function createBoxesHandler() {
  const inputNumber = document.querySelector("input");
  const amount = inputNumber.value; //Aici se preia valoarea introdusă de utilizator în cadrul elementului de input. Această valoare va fi folosită ulterior pentru a determina câte div-uri trebuie create.
  createBoxes(amount);
}

function destroyBoxes() {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = ""; // Atribuirea unei valori goale proprietății innerHTML a elementului boxesDiv are ca rezultat ștergerea completă a conținutului din interiorul acestui element. Acest lucru înseamnă că orice elemente care există în interiorul elementului cu id-ul "boxes" vor fi eliminate complet.
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
createButton.addEventListener("click", createBoxesHandler);
destroyButton.addEventListener("click", destroyBoxes);