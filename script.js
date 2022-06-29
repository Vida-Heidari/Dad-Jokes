const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");
const spinnerEl = document.querySelector(".spinner-element");

jokeBtn.addEventListener("click", generateJoke);

window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    spinnerEl.classList.add("hidden");

    generateJoke();
  }, 2000);
});

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => (jokeEl.innerHTML = data.joke))
    .catch((err) => (jokeEl.textContent = "Failed to Fetch data!"));

  jokeEl.classList.add("joke--animation");
  jokeBtn.setAttribute("disabled", "true");
  setTimeout(() => {
    jokeEl.classList.remove("joke--animation");
    jokeBtn.removeAttribute("disabled");
  }, 1200);
}
