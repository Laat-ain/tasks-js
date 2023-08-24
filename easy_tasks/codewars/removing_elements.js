function removeEveryOther_V1(arr) {
  return arr.filter((_, index) => !(index % 2));
}

function removeEveryOther_V2(arr) {
  const newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

removeEveryOther_V1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
removeEveryOther_V2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
