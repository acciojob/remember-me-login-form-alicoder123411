const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
if (localStorage.getItem("username")) {
  existingBtn.style.display = "block";
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  alert(`Logged in as ${username}`);
  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    localStorage.clear();
    existingBtn.style.display = "none";
  }
});
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
