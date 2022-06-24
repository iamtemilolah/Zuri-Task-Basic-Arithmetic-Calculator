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
