const submit = document.getElementById("submit");
const email = document.getElementById("email");
const error = document.getElementById("error");

submit.addEventListener("click", (e) => {
  const validEmail = "@";
  if (!email.value.match(validEmail)) {
    error.style.display = "block";
  } else {
    setTimeout(() => {
      email.value = "";
    }, 2000);
  }

  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
});
