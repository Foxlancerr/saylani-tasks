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
  y_value.innerText = "Y-Axis:" + e.clientY;
});

function getCurrentDate() {
  let date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hour == 12) {
    hour = 1;
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  time.textContent = "Time:" + hour + ":" + minute + ":" + second;
}
