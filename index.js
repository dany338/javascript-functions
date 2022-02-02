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

function buildPalindrome(st) {
  let i = 0;
  let aux;
  while(st != st.split('').reverse().join('')){
      aux = st.split('')
      aux.splice(st.length-i, 0 ,st[i])
      st = aux.join('');
      i++;
  }
  return st;
}

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

function computeMultiplesSum(n) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  let result = 0;
  for(let i= 0; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
          result += i;
      }
  }
  return result;
}


// JavaScript code​​​​​​‌​​‌​‌‌​​‌‌‌‌​​​‌​​​​​‌​‌ below
// Use printErr(...) to debug your solution.

function closestToZero(numbers) {
  // Your code goes here
  if (numbers.length === 0) return 0;

  let closest = numbers[0];

  for (let number of numbers) {
      let absNumber  = Math.abs(number);
      let absClosest = Math.abs(closest);
      if (absNumber <  absClosest) {
          closest = number;
      } else if (absNumber === absClosest && closest < 0) {
          closest = number;
      }
  }
  return closest;
}


// JavaScript code​​​​​​‌​​‌​‌‌​​‌‌‌‌​​​‌​​​​​‌​‌ below
// Use printErr(...) to debug your solution.

function nextWeek(date) {
  // Your code goes here...
  let today = new Date();

  return new Date(today.setDate(date.getDate() + 7));
}


// JavaScript code​​​​​​‌​​‌​‌‌​​‌‌‌‌​​​‌​​​​​‌​‌ below
// Use printErr(...) to debug your solution.

function helloProperties(obj) {
  // Your code goes here
  const objKeys = Object.keys(obj);
  const answer = objKeys.map(value => {
    return `Hello-${value}`
  });
  return answer;
}


// JavaScript code​​​​​​‌​​‌​‌‌​​‌‌‌‌​​​‌​​​​​‌​‌ below
// Use printErr(...) to debug your solution.

function isOnEvenPosition(table, value) {
  // You code goes here...
  for (let i = 0; i < table.length; i++) {
    if (i % 2 === 0 && table[i] === value) {
      return true;
    }
  }
  return false;
}

// JavaScript code​​​​​​‌​​‌​‌‌​​‌‌‌‌​​​‌​​​​​‌​‌ below
// Use printErr(...) to debug your solution.
// var a = [{key:6},{key:9},{key:2},{key:1},{key:12},{key:63}, {key:20},{key:25},{key:13},{key:19},{key:32},{key:70}, {key:14},{key:7},{key:8}]
//Expected: 70,63,32,25,20,19,14,13,12,9,8,7,6,2,1
function customSort(table, criteria) {
  // Your code goes here
  return table.sort((a, b) => b[criteria] - a[criteria]);
}


// var art = printChar('A');
// printErr(art);
// print(scanChar(art));
function scanChar(str) {
  // Your code goes here
  const first = "A";
  const last = "Z";
  for (let i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
    const c = String.fromCharCode(i);
    if (printChar(c) === str) {
      return c;
    }
  }

  return '?'
}

// print(reshape(3, "abc de fghij")); //  "abc\ndef\nghi\nj"
// print(reshape(2, "1 23 456")); // "12\n34\n56"
function reshape(n, str) {
  let regex = new RegExp(`.{${n}}`, "g");
  return str.replace(/\s/g, '').replace(regex, "$&\\n");
}

/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
      let str = "";
      if (i % 3 === 0) str += "Fizz";
      if (i % 5 === 0) str += "Buzz";
      if (str === "") str = i;
      console.log(str);
  }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');


/*
 * Complete the function below.
 */
function counting(s) {
    let curr = 1;
    let prev = 0;
    let ans = 0;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) curr++
        else ans += Math.min(curr, prev), prev = curr, curr = 1
    }
    
    return ans + Math.min(curr, prev)
}

function isDuoDigit(number) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  
  return (new Set(Math.abs(number).toString()).size <= 2 ) ? 'y' : 'n';
}

// JavaScript code​​​​​​‌​​‌​‌‌‌​​​​‌​​​​‌​‌‌​​‌​ below
// Use printErr(...) to debug your solution.

function factorial(n) {
  if (n < 0) return;
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

let i; // actua como un almacenador global y va aumentando su valor contenido de 3 en 3 cada vez que se vuelve a ejecutar
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
} // va aumentando de 3 o 6 o 9 o 13, 16, 19, 22, en 3 primero imprime 3 y luego  imprime siempre 3