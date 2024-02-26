let body = document.querySelector("body");
let time = document.querySelector("#time");
let x_value = document.querySelector("#x-axis");
let y_value = document.querySelector("#y-axis");

body.addEventListener("click", (e) => {
  console.log(e, e.clientY);
  getCurrentDate();

  console.log(x_value);
  console.log(y_value);

  x_value.innerText = "X-Axis:" + e.clientX;
  y_value.innerText = "X-Axis:" + e.clientY;
});

function getCurrentDate() {
  let date = new Date();

  time.textContent =
    "Time:" +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
}
