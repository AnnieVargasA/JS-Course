//Printing values
let js = 'fun';
console.log(40 + 8 + 23 - 10);
console.log('Annie');
console.log(27);

//Printing a variable
let firstName = 'Annie Vargas';
console.log(firstName);

//Practice Assignments for JS - Values and Variables
const country = 'Mexico';
const continent = 'America';
const population = '119,530,753';

console.log(
  `LECTURE: VALUES AND VARIABLES
  
    Hi, I'm from ${country},
    it has ${population} people and
    it's located in ${continent}.`
);

let lol = [1, 2, 3, 4, 5, 6];
console.log(lol.reduce((acc, count) => acc + count, 0));

const test = function (n, arr) {
  let col1 = [];
  let col2 = [];
  let col3 = [];
  let sumMin = 0;
  let sumMax = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    col1.push(element[0]);
    col2.push(element[1]);
    col3.push(element[2]);
  }
  col1.sort((a, b) => a - b);
  col2.sort((a, b) => a - b);
  col3.sort((a, b) => a - b);

  sumMin = col1[0] + col2[0] + col3[0];
  sumMax = col1[2] + col2[2] + col3[2];

  return sumMax - sumMin;
};

console.log(
  test(3, [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
