const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne reîncărcarea paginii la trimiterea formularului.

  // Inițializăm un obiect gol numit dataForm.
  // Aici vom stoca datele introduse în formularul de login pentru a le putea afișa, ulterior, în consolă:
  const dataForm = {};

  // Folosim proprietatea elements si obținem o colecție elementsForm a tuturor elementelor din formular:
  const elementsForm = this.elements;

  // Iteram prin colecția elementsForm pentru a accesa fiecare element în parte:
  for (let element of elementsForm) {
    //Ne asigurăm că operăm asupra elementelor diferite de elementul "submit":
    if (element.type !== "submit") {
      // Ne asiguram ca elementele asupra cărora operăm nu sunt câmpuri goale, eliminăm spațiile goale nedorite  de la începutul și de la sfârșitul șirului introdus de utilizator:
      if (element.value.trim() === "") {
        alert("Toate câmpurile trebuie completate");
        return;
      }
      // Colectăm datele introduse de utilizator:
      dataForm[element.name] = element.value;
    }
  }

  console.log(dataForm); // Afișăm  în consolă obiectul cu datele introduse de utilizator.
  this.reset(); // Resetează valorile câmpurilor din formular.
});
