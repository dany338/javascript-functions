function solution(N, K) {
  let str             = `${N}`;
  let first_character = str[0];
  let a               = first_character;
  let first           = +a;
  
  let second_character= str[1];
  let b                = second_character;
  let second           = +b;

  let third_character = str[2];
  let c               = third_character;
  let third           = +c;
  
  let first_temp      = first;
  for(let i = 1; i <= K; i++) {
    first_temp++;
  }
  console.log('first_temp', first_temp);
  let first_max       = first_temp + second + third;
  console.log('first_max', first_max);

  let second_temp     = second;
  for (let i = 1; i <= K; i++){
      second_temp++;
  }
  console.log('second_temp', second_temp);
  let second_max      = first + second_temp + third;
  console.log('second_max', second_max);
  
  let third_temp      = third;
  for (let i = 1; i <= K; i++){
    third_temp++;
  }
  console.log('third_temp', third_temp);
  let third_max = first + second + third_temp;
  console.log('third_max', third_max);
       
  let first_possible   = +first_max;
  let second_possible  = +second_max;
  let third_possible   = +third_max;
  let arr = [first_possible, second_possible, third_possible];
  let max = arr[0];
  for (let i = 0; i < 3; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
  }
  return max;
}
console.log(solution(512,10));