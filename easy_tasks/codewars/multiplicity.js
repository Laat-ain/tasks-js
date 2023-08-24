function findMultiples(integer, limit) {
  let count = integer;
  const masNumber = [];

  do {
    if (count % integer === 0) masNumber.push(count);
  } while (count++ < limit);

  return masNumber;
}

findMultiples(5, 25);
