const a = 1;
let b = 2;

const x = () => {
  let b = 4;
  const a = 3;
  let c = 1;
  const d = 6;
  c = 10;
  console.log(a, b);
  return a + b;
};

console.log(a, b, '\n', x());