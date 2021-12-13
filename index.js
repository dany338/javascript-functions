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

