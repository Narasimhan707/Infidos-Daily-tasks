let array = [23, 43, 5, 645, 3242, 2342, 434, 33, 32, 12, 45];

function positionFinder(a) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === a) {
      return i;
    }
  }
}

console.log(positionFinder(434));



function duplicateFinder(a) {
  let duplicates = 0;
  let array3 = [23, 43, 5, 645, 23, 23, 23, 3242, 2342, 434, 33, 32, 12, 45];

  for (let i = 0; i < array3.length; i++) {
    if (array3[i] === a) {
      duplicates++;
    }
  }

  return duplicates;
}

console.log(duplicateFinder(23));


let array4 = [32, 45, 26, 43, 54, 63, 71, 88, 93, 102];
let even = [];
let odd = [];

function oddOrEven(a) {

  let evenIndex = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      even[evenIndex] = a[i];
      evenIndex++; 
      console.log(even);
    }
  }
  return even;
}

console.log(oddOrEven(array4));


let array2 = [23, 43, 5, 645, 3242, 2342, 434, 33, 32, 12, 45];

function positionFinder(a) {
  let i = 0;
  while (i < array.length) {
    if (array[i] === a) {
      return i;
    }
    i++;
  }
}
