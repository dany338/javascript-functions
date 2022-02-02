const a = { prop: { prop: 1 } };
const b = a; // const b = JSON.parse(JSON.stringify(a));
b.prop.prop = 2;
console.log(a);

