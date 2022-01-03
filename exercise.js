// atse esarf eneit sal sarbalap la séver

const isReversePhrase = str => str.split(' ').map((cad) => cad.split('').reverse().join('')).join(' ');

console.log(isReversePhrase("atse esarf eneit sal sarbalap la séver"));