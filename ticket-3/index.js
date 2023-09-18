function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.toString().length; i++) {
    console.log(number);
    let digit = number.toString()[i];
    console.log(digit);
    if (digit === "9") {
      count++;
    }
  }

  return count;
}
console.log(countNumberOfNinesInNumber(1115.12578469))