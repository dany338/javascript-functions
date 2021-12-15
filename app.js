function findSmallestInterval(numbers) {
  return numbers.sort((a, b) => a - b).splice(0, 2).reduce((a, b) => b - a)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -3, -2, -1];
console.log(findSmallestInterval(numbers));