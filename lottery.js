const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function lottery() {
  const result = [];
  while (result.length < 6) {
    const num = randomIntFromInterval(1, 49);
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log(lottery());