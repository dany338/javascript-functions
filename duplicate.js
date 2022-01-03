function duplicates(arr) {
  return  [ ...new Set(arr)];
  const object = {};
  const result = [];
  arr = arr.sort((a, b) => a - b);
  arr.forEach((i) => {
    if (!object[i]) {
      object[i] = 0;
    }
    object[i] += 1;
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const prop in object) {
    if (object[prop] === 1) {
      // eslint-disable-next-line radix
      result.push(parseInt(prop));
    }
  }
  return result;
}

console.log(duplicates([7, 6, 4, 3, 3, 4, 9]));