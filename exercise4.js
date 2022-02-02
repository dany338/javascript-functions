const a = 1;
let b = 2;

const x = () => {
  const a = 3;
  let b = 4;
  let c = 1;
  const d = 6;
  c = 10;
  console.log('a, b, c', a, b, c);
  return a + b + c;
};
b = 10;

console.log(a, b, '\n', x());