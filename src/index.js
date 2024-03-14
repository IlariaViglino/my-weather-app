function changeBackground(event) {
  event.preventDefault();
  let body = document.querySelector("body");
  body.classList.add("city-background");
}
let submit = document.querySelector("#submit-button");
submit.addEventListener("submit", changeBackground);
