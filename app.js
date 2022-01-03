function findSmallestInterval(numbers) {
  return numbers.sort((a, b) => a - b).splice(0, 2).reduce((a, b) => b - a)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -3, -2, -1];
console.log(findSmallestInterval(numbers));

function findSmallestInterval2(numbers) {
  const arr = numbers.sort((a, b) => a - b);
  let diff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] < diff) {
      diff = arr[i + 1] - arr[i];
    }
  }
  return diff;
}
console.log(findSmallestInterval2(numbers));