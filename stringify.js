const stringify = obj => {
  const answer = Object.keys(obj).map(key => {
    if (obj[key] instanceof Object) {
      return `"${key}": ${stringify(obj[key])}`;
    }
    return `"${key}": "${obj[key]}"`;
  });
  return `{${answer.join(', ')}}`;
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 4,
    f: 5,
    g: {
      h: 6,
      i: 7,
    }
  },
};

console.log(stringify(obj));