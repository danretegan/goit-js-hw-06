const loginForm = document.getElementsByClassName("login-form")[0];

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evită reîncărcarea paginii la trimiterea formularului.

  const dataForm = {}; //inițializam un obiect gol numit dataForm.
  const email = document.getElementsByName("email")[0];
  const password = document.getElementsByName("password")[0];

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Toate câmpurile trebuie completate");
    return;
  }

  dataForm["email"] = email.value;
  dataForm["password"] = password.value;

  console.log(dataForm); // Afișează obiectul cu datele introduse în consolă.
  loginForm.reset(); // Resetează valorile câmpurilor din formular.
});
