# Mouse position finding and Showing the Date which the mouse is clicked.

<a href="https://mouse_events_task.surge.sh/" target="_blank">
## HTML CODE

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mouse Events</title>

    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body {
        width: 100vw;
        background-color: azure;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <h1 id="time">Time:</h1>
    <h1 id="x-axis">X-Axis:</h1>
    <h1 id="y-axis">Y-Axis:</h1>
    <script src="./index.js"></script>
  </body>
</html>
```

<br/>
<br/>
<br/>
## JAVASCRIPT CODE

## Events Listener

- In here i will used the addEventListener to get the mouse events

```js
body.addEventListener("click", (e) => {
  console.log(e, e.clientY);
  getCurrentDate();

  console.log(x_value);
  console.log(y_value);

  x_value.innerText = "X-Axis:" + e.clientX;
  y_value.innerText = "X-Axis:" + e.clientY;
});
```

## Get Time

- In here i will make the function which will show the current time and i also make some condition to show the the time corretly if the second,minute is less than to 10 and also show the 12 hourly format based on condition

```js
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
```

## complete code:

```js
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
```
