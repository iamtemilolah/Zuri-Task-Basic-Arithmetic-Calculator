// var me = {
//     First_name: "Barakat",
//     last_name: "Suara"
//     my_height: "165cm",
//     country: "Nigeria",
//     contact: "08160613064"
// }

// console.log((me));



// let x = "4";
// let y = "2";

// console.log(x);
// console.log(y);

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);



// console.log('Suara Temilola Barakat')
// console.log('Height: 165cm');
// console.log('Country: Nigeria');


// let value1 = Number(prompt("Enter first number"));
// let value2 = Number(prompt("Enter your second number"));
// let opertor = prompt("Enter your preferred operator(+, -, *, /)");

// const result = (a, b) => {
//     if (opertor == "+") {
//         return a + b;
//     } else if (operator == "-") {
//         return a - b;
//     } else if (operator == "*") {
//         return a * b;
//     } else if (operator == "/") {
//         return a / b;
//     } else {
//         return "invalid operator, Try again!!!";
//     }
// };

// alert('${value1} ${operator} ${value2} = ${result(value1, value2)}');

let value1 = Number(prompt("Enter your first number"));
let value2 = Number(prompt("Enter your second number"));
let myNumber = Number("0, 1, 2, 3, 4, 5, 6, 7, 8, 9,")
let operator = prompt("Enter your preferred operator(+, -, *, /)");
const result = (a, b) => {
  if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  } else if (operator == "*") {
    return a * b;
  } else if (operator == "/") {
    return a / b;
  } else {
    return "invalid operator, Try again!!!";
  }
};
alert(`${value1} ${operator} ${value2} = ${result(value1, value2)}`);