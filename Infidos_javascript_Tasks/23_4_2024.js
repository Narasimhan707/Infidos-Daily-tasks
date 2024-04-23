let i = 200;

for (let j = 1; j <= i; j++) {
  if (j % 4 === 0 && j % 6 === 0) {
    console.log(j + ' Fizz Buzz');
  } else if (j % 4 === 0) {
    console.log(j + ' Fizz');
  } else if (j % 6 === 0) {
    console.log(j + ' Buzz');
  } else {
  }
}

let string = 'welcome to js';

let result = '';

for (let i = 0; i < string.length; i++) {
  result += string[i];
}

console.log(result);

//Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

let array = [11, 55, 12, 23, 43, 52, 83, 8, 4, 14, 74];

let sum = 0;


  array.sort();
  array.reverse();
  for (let i = array.length; i >=5; i--) {
    sum+=array[i]; 
  }

console.log(sum);
