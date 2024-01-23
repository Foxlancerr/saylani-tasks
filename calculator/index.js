
// const value = [2, 3, 2, 7, 5, 5, 2];
// const operator = ["*", "/", "+", "-", "+", "*"];

// const shallowArr = [...value];
// for (let i = 0; i < value.length; i++) {
//   switch (operator[i]) {
//     case "*":
//       shallowArr[0] = shallowArr[0] * shallowArr[1];
//       shallowArr.splice(1, 1);
//       //   console.log(shallowArr);
//       break;
//     case "/":
//       shallowArr[0] = shallowArr[0] / shallowArr[1];
//       shallowArr.splice(1, 1);
//       //   console.log(shallowArr);
//       break;
//     case "+":
//       shallowArr[0] = shallowArr[0] + shallowArr[1];
//       shallowArr.splice(1, 1);
//       //   console.log(shallowArr);
//       break;
//     case "-":
//       shallowArr[0] = shallowArr[0] - shallowArr[1];
//       shallowArr.splice(1, 1);
//       //   console.log(shallowArr);
//       break;
//   }
// }

// let [total] = shallowArr;
// console.log(total);

function calculator(num1, num2,operator){
  switch(operator){
    case '+':
      return num1 + num2
      break;
    case '-':
      return num1 - num2
      break;
    case '*':
      return num1 * num2
      break;
    case '/':
      return num1 / num2
      break;
  }
}

console.log(calculator(10,10,"+"))
console.log(calculator(10,10,"-"))
console.log(calculator(10,10,"/"))
console.log(calculator(10,10,"*"))


