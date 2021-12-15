type Animal = {name: string};
type Primate = {name: string};
type Orangutan = Animal & Primate;

type Value = 0 | 1;

const tupleMixed: [Value, Value] = [0, 1];
const tupleMixed2: Array<Value> = [0, 1];
// const tupleMixed3: [Value] = [0, 1];

function computeMultiplesSum(n: number): number {
  // Write your code here
  // To debug: console.error('Debug messages...');
  for (let index = 0; index < n; index++) {
    const element = index;
    if(element % 3 === 0 || element % 5 === 0){
      return element;
    }
  }
  return -1;
}