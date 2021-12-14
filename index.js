// Palindrome
// ==========
// A palindrome is text that can be read from left to right or right to left with the same result. An example is the the phrase "race car". Note that white space, punctuation, and differences in case are not considered when determining if a word is a palindrome.
// Given a string, determine if the string is a palindrome or not.
// Examples
// --------
// isPal("racecar") -> true
// isPal("A Santa Lived As a Devil At NASA") -> true
// isPal("Eva, Can I Stab Bats In A Cave?") -> true
// isPal("No lemon, no melon") -> false
// isPal("A Santa Lived As a Devil At NASA") -> true

const isPal = (str) => {
  str = str.replace(/\s/g, '').replace(",", '').replace("?", '').toLowerCase()
  const splitted = str.split('').reverse().join('')
  return str == splitted
}
const palidromeOne = isPal("racecar")

const palidromeTwo = isPal("A Santa Lived As a Devil At NASA")

const palidromeThree = isPal("Eva, Can I Stab Bats In A Cave?")

const palidromeTFour = isPal("Eva, Can I Stab Bats In A Cave?sdsdsdsd")
console.log(`${palidromeOne} ${palidromeTwo} ${palidromeThree} ${palidromeTFour}`)

// ==========
// Fibonacci
// 1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352,24157817,39088169,63245986,102334155,165580141,267914296,433494437,701408733,1134903170,1836311903,2971215073,4807526976,7778742049,12586269025,20365011074,32951280099,53316291173,86267571272,139583862445,225851433717,365435296162,591286729879,956722026041,1548008755920,2504730781961,4052739537881,6557470319842,10610209857723,17167680177565,27777890035288,44945570212853,72723460248141,117669030460994,190392490709135,308061521170129,498454011879264,806515533049393,1304969544928657,2111485077978050,3416454622906707,5527939700884757,8944394323791464,14472334024676221,23416728348467685,37889062373143906,61305790721611591,99194853094755497,160500643816367088,259695496911122585,420196140727489673,679891637638612258,1100087778366101931,1779979416004714189,2880067194370816120,4660046610375530309,7540113804746346429,12200160415121876738,19740274219868223167,........................................
// 1,1
//   1+1=2
//     2+3=5
//       3+5=8
//         5+8=13........................................
// ==========
const n1 = 1;
const n2 = 2;
const r = 0;
for (let index = 0; index < 100; index++) {
  r = n1 + n2;
  n1 = n2;
  n2 = r;
  console.log(r)
}


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci(n) {
  const fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib //fib[n]
}

// ==========
// multiply
// ==========
// Write a function that multiplies two numbers and returns the result.
const multiply = (a, b) => " ".repeat(a).repeat(b).length

const multiply = (a, b) => {
  if (b === 0) return 0
  if (b === 1) return a
  return a + multiply(a, b - 1)
}

const multiply = (a, b) => {
  let result = 0
  while (b > 0) {
    result += a
    b--
  }
  return result
}

const multiply = (a, b) => a / (1 - b)

const multiply = (a, b) => {
  let result = 0
  const positivo = Math.abs(b) === b
  for (let i = 0; i < Math.abs(b); i++) {
    result = positivo ? result + a : result - a
  }
  return result
}

// ==========
// repeatedString
// ==========
const repeated = (s, n) => {
  const lowered = str.toLowerCase()
  const splitted = lowered.split('')
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) acc[el]++
    else acc[el] = 1
    return acc
  }, {})
  return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

// ==========
// flatten
// ==========
const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []) // [1,2,3,4,5,6,7,8,9,10]))
const d = flatten([1, [2, [3, [4, 5]]]])
console.log(d)

// ==========
const clean = (arr) => arr.reduce((acc, el) => { 
  if (el) acc.push(el) 
  return acc 
}, [])
const c = clean([1, 2, undefined, 3, null, 0, 5])
console.log(c)

// ==========
// A pangram is a sentence that contains every letter of the alphabet. The goal of this function is to determine if the sentence given is a pangram or not
export const isPangram = str => {
  const regex = /([a-z])(?!.*\1)/gi;
  return (str.match(regex) || []).length === 26;
};

// ==========