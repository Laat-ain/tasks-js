function basicOp_V1(operation, value1, value2) {
  return eval(`${value1} ${operation} ${value2}`);
}

function basicOp_V2(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      break;
  }
}

basicOp_V1("+", 4, 7);
basicOp_V1("-", 15, 18);
basicOp_V1("*", 5, 5);
basicOp_V1("/", 49, 7);

basicOp_V2("+", 4, 7);
basicOp_V2("-", 15, 18);
basicOp_V2("*", 5, 5);
basicOp_V2("/", 49, 7);
