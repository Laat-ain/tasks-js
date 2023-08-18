function stringy_V1(size) {
  return "".padStart(size, "10");
}

function stringy_V2(size) {
  return "10".repeat(size).slice(0, size);
}

function stringy_V3(size) {
  let count = 1;
  let newString = "";
  do {
	newString += (count % 2 === 0) ? 0 : 1;
  } while (count++ < size);

  return newString;
}

stringy_V1(5);
stringy_V2(5);
stringy_V3(5);
