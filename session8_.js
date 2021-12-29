const fnInputData = (symbol) => {
  // Get data from HTML

  const number = parseInt(document.getElementById("numberInput").value);
  const number_ = parseInt(document.getElementById("numberInput2").value);

  switch (symbol) {
    case "x":
      result = number * number_;
      break;
    case ":":
      result = number / number_;
      break;
    case "+":
      result = number + number_;
      break;
    case "-":
      result = number - number_;
      break;
    case "%":
      result = number % number_;
      break;
    case "^":
      result = number ** number_;
      break;
  }
  document.getElementById(
    "ans"
  ).innerHTML = `${number} ${symbol} ${number_} = ${result}`;
};

const fnSearch = () => {
  const number = document.getElementById("numberInput").value;
  const number_ = document.getElementById("numberInput2").value;
  let counter = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === number_) {
      counter += 1;
    }
  }
  document.getElementById(
    "result"
  ).textContent = `The amount of ${number_} on ${number} are ${counter}`;
};
