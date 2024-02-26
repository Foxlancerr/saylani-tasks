let body = document.querySelector("body");
body.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);
  getCurrentDate();
});

function getCurrentDate() {
  let date = new Date();
  console.log(
    date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds());
}
