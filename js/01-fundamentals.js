console.log(`


*****************************************************
******************** = Lectures = *******************
*****************************************************

`);
// ==== Lecture 1: Values and Variables ====
console.log(`
***** Lecture 1: Values and Variables *****
`);
// => Printing values
console.log(40 + 8 + 23 - 10);
console.log('Annie');
console.log(27);

// => Creating a variable
let js = 'fun';

// => Printing a variable
let firstName = 'Annie Vargas';
console.log(firstName);

// ==== Lecture 2: Data Types ====
console.log(`

***** Lecture 2: Data Types *****
`);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof 'Annie'); // string

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun); // string

let year;
console.log(typeof year); // undefined

year = 1994;
console.log(typeof year);
// number

// ==== Lecture 3: let, var & const ====
console.log(`

***** Lecture 3: let, var & const *****
`);
let age = 26;
age = 27;

const birthYear = 1994;

var job = 'programmer';
job = 'teacher';

lastNAme = 'Vargas';
console.log(`
 LET: ${age}
 CONST: ${birthYear}
 VAR: ${job}
 incorrect declaration ${lastNAme}
`);

// ==== Lecture 4: Basic Operators ====
console.log(`

***** Lecture 4: Basic Operators *****
`);
// Math operators
const now = 2042;
const ageAnnie = now - 1994;
const ageVale = now - 1998;

console.log(ageAnnie, ageVale);
console.log(ageAnnie * 2, ageAnnie / 2, 2 ** 3);

const firstN = 'Annie';
const lastN = 'Vargas';
console.log(firstN + ' ' + lastN);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x + 10 = 25
x *= 4; // x * 4 = 100
x++; // x + 1 = 101
x--; // x - 1 = 100

console.log(x);

// Comparison operators
console.log(ageAnnie > ageVale); // <, >, >=, <=
console.log(ageVale >= 18);

const isFullAge = ageVale >= 18;
console.log(now - 1994 > now - 2018);

console.log(25 - 10 - 5); // left to right

let a, b;
a = b = 25 - 10 - 5; // a = b = 10
console.log(`a = ${a} b= ${b}`); // right to left

const averageAge = (ageAnnie + ageVale) / 2;
console.log(ageAnnie, ageVale, averageAge);

// ==== Lecture 5: Strings & Template Strings ====
console.log(`

***** Lecture 5: Strings & Template Strings *****
`);

const fName = 'Annie';
const lName = 'Vargas';
const actualJob = 'web developer';
const BYear = 1994;

const annieV =
  "I'm " +
  fName +
  ' ' +
  lName +
  " and I'm a " +
  actualJob +
  ',  I was born in ' +
  BYear +
  ' and I have ' +
  (2021 - BYear) +
  ' years old.';

const annieTemplate = `I'm ${fName} ${lName} and I'm a ${actualJob}, I was born in ${BYear} and I have ${
  2021 - BYear
} years old.'
  `;

console.log(`
   Concatenated:
    ${annieV}

   Template Strings:
    ${annieTemplate}
  `);

// ==== Lecture 6: Taking decisions: If/else statements ====
console.log(`

***** Lecture 6: Taking decisions: If/else statements *****
`);

const edad = 15;

if (edad >= 18) {
  console.log('You can start driving license');
} else {
  const yearsLeft = 18 - edad;
  console.log(`You're too young, wait another ${yearsLeft} years`);
}

const bYEar = 1991;
let century;

if (bYEar <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// ==== Lecture 7: Type Conversion and Coercion ====
console.log(`

***** Lecture 7: Type Conversion and Coercion *****
`);

// => Type conversion
const inputYear = '1994';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Annie'));
console.log(typeof NaN);

console.log(String(23), 23);

// => Type coercion
console.log('I am ' + 27 + ' years old!');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

// ==== Lecture 8: Truthy and Falsy Values ====
console.log(`

***** Lecture 8: Truthy and Falsy Values *****
`);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job`);
}

let define;
if (define) {
  console.log('Yay! define is defined');
} else {
  console.log('DEFINE is undefined');
}

// ==== Lecture 9: Equality Operators: == vs === ====
console.log(`

***** Lecture 9: Equality Operators: == vs === *****
`);
const ageOperator = '18';
if (ageOperator === 18) console.log('=== You just became an adult! :D');

if (ageOperator == 18) console.log('== You just became an adult! :D');

const favourite = 7; // Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool! 23 is an amazing number :D`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else if (favourite === 9) {
  console.log(`
  favourite = ${favourite}
  The result of: 
  ${favourite} + 3 = ${favourite + 3}`);
} else {
  console.log(`
  favourite = ${favourite}
  The result of: 
  ${favourite} * 3 = ${favourite * 3}
  `);
}

if (favourite !== 23)
  console.log(`Why not 23?
`);

// ==== Lecture 10: Logical Operators ====
console.log(`

***** Lecture 10: Logical Operators *****
`);
const hasDriverLicence = true; // Variable A
const hasGoodVision = true; // Variable B

console.log(hasDriverLicence && hasGoodVision); // AND
console.log(hasDriverLicence || hasGoodVision); // OR
console.log(!hasDriverLicence); // NOT

if (hasDriverLicence && hasGoodVision) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}

const isTired = true; // Variable C
console.log(hasDriverLicence && hasGoodVision && isTired);

if (hasDriverLicence && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}

// ==== Lecture 11: The switch statement ====
console.log(`

***** Lecture 11: The switch statement *****
`);

let day = 'tuesday'; //prompt(`Who gets your rest day?`);

switch (day) {
  case 'monday':
    console.log('*** Switch ***');
    console.log('Daniel');
    break;
  case 'tuesday':
    console.log('*** Switch ***');
    console.log('Aldahir ');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('*** Switch ***');
    console.log('Carlos');
    console.log('David');
    break;
  case 'friday':
    console.log('*** Switch ***');
    console.log('*** Hugo ***');
    break;
  case 'saturday':
    console.log('*** Switch ***');
    console.log(' *** Everybody works ***');
    break;
  case 'sunday':
    console.log('*** Switch ***');
    console.log('*** Everybody works 2 ***');
    break;
  default:
    console.log('*** Switch ***');
    console.log('Enter the day in lowercase!');
}

if (day === 'monday') {
  console.log('*** If else ***');
  console.log('*** Daniel ***');
} else if (day === 'tuesday') {
  console.log('*** If else ***');
  console.log('*** Aldahir ***');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('*** If else ***');
  console.log('*** Carlos ***');
  console.log('*** David ***');
} else if (day === 'friday') {
  console.log('*** If else ***');
  console.log('*** Hugo ***');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('*** If else ***');
  console.log(' *** Everybody works ***');
} else {
  console.log('*** If else ***');
  console.log('Enter the day in lowercase!!');
}
// ============================================
// ===== Practice Assignments for JS =====
// ============================================

console.log(`


*****************************************************
********** = Practice Assignments for JS = **********
*****************************************************

`);

// => Lecture 1: Values and Variables
const country = 'Mexico';
const continent = 'America';
let population = 119530753;

console.log(`LECTURE 1: VALUES AND VARIABLES
    ${country},
    ${population}
    ${continent}`);

// => Lecture 2: Data Types
const isIsland = false;
let language;
console.log(`
LECTURE 2: DATA TYPES
  Log the types of 'isIsland', 'population', 'country' and 'language'
    isIsland => ${typeof isIsland},
    population => ${typeof population},
    country => ${typeof country},
    language => ${typeof language}
  `);

// => Lecture 3: let, const & var
language = 'Spanish';
population = 129580793;
/*
country = 'USA';
isIsland = true;
continent = 'Africa';
*/
console.log(`
LECTURE 3: LET, CONST & VAR
  Think about which variables must be "const" or "let", change them and try to change their values.
    isIsland (const) => ${isIsland},
    population (let) => ${population},
    country (const) => ${country},
    language (let) => ${language},
    continent (const) => ${continent}
  `);

// => Lecture 4: BASIC OPERATORS
Finland = 5525292;
description =
  country +
  ' is in ' +
  continent +
  ' and its ' +
  population +
  ' people speak ' +
  language;
/*
country = 'USA';
isIsland = true;
continent = 'Africa';
*/
console.log(`
LECTURE 4: BASIC OPERATORS
  1. How many people would live in each half?
    ${population / 2}
  2. ${population++}
  3. Does your country have more people than Finland? 
    ${population >= Finland}
  4. Does your country have less people than the average country?
    ${population <= 33000000}
  5. ${description}
  `);

// => Lecture 5: STRINGS & TEMPLATE STRINGS
const description2 = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log(`
LECTURE 5: STRINGS & TEMPLATE STRINGS
  1. Recreate the 'description' variable from the last assigment, this time using the template literal strings.
  
    ${description2}
  `);

// => Lecture 6: TAKING DECISIONS: IF/ELSE STATEMENTS
console.log(`
LECTURE 6: TAKING DECISIONS: IF/ELSE STATEMENTS
  1. If your country is greater that 33 million, log a string like this to the console:
   'Portugal's population is above average'.
   Otherwise, log a string like
   'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population).
  2. After checking the result, change the population temporarily to 13 and then to 130.
    See the diferent results, and set the population back to original.
  `);

if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33000000 - population} below average`
  );
}

// => Lecture 7: TYPE CONVERSION AND COERCION
console.log(`
LECTURE 7: TYPE CONVERSION AND COERCION
  1. Predict the result of these 5 operations without executing them:
      '9' - '5';
      '19' - '13' + '17';
      '19' - '13' + 17;
      '123' < 57;
      5 + 6 + '4' + 9 - 4 -2;
  2. Execute the operations to check if you were right.
      '9' - '5' = ${'9' - '5'}
      '19' - '13' + '17' = ${'19' - '13' + '17'}
      '19' - '13' + 17 = ${'19' - '13' + 17}
      '123' < 57 = ${'123' < 57}
      5 + 6 + '4' + 9 - 4 -2 = ${5 + 6 + '4' + 9 - 4 - 2}
  `);

// => Lecture 9: Equality Operators: == vs === ====

console.log(`
LECTURE 9: Equality Operators: == vs ===
1. Declare a variable 'numNeighbours' based on a prompt input like
this:
  prompt ('how many neighbour countries does your country have?');

2. If there is only one neighbour, log to the console 'Only one border!' (use loose equality == for now).

3. Use an else-if block to log 'More tha 1 border' in case
'numNeighbours' is greater than 1.

4. Use an else block to log 'No borders' (this block will be
executed when 'numNeighbours' is 0 or any other value).

5. Test then code with different values of 'numNeighbours',
including 1 and 0.

6. Change == to ===, and test the code again, with the same values
of 'numNeighbours'. Notice what happens when there is exactly
1 border! Why is happening?

7. Finally, convert 'numNeighbours' to a number, and watch
what happens now when you input 1.

8.Reflect on why we should use the === operator and type conversion
in this situation.
  `);

const numNeighbours = 2;
// Number(
//   Prompt(`How many neighbour countries does your country have?`)
// );

if (numNeighbours === 1) {
  console.log(`Only one border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border!`);
} else {
  console.log(`No borders!`);
}

// => Lecture 10: Local Operators

console.log(`
LECTURE 10: Local Operators

  1. Comment out the previous code so the prompt doesn't get in the
  way.

  2. Let's say Sarah is looking for a new country to live in. She
  wants to live in a country that speaks english, has less than 50
  million people and is not an island.

  3. Write an if statement to help Sarah figure out if your country is
  right for her.
  You will need to write a condition that accounts for all of Sarah's criteria.Take your time with
  this, and check part of the solution if necessary.

  4. If yours is the right country, log a string like this:
  'You should live in Portugal :)'.
  If not, log 'Portugal does not meet your criteria :('.
  
  5. Probably your country does not meet all the criteria. So go back and temporarily 
  change some variables in order to make the condition true (unless you live in Canada :D).
`);

const anasCountry = 'Mexico';
const anasCountryPeople = 20600909;
const anasCountryLanguage = 'English';
const anasCountryIsIsland = false;

if (
  anasCountryLanguage === 'English' &&
  anasCountryPeople < 50000000 &&
  anasCountryIsIsland === false
) {
  console.log(`You should live in ${anasCountry} :D`);
} else {
  console.log(`${anasCountry} does not meet your criteria :()`);
}
// ============================================
// ============= Coding Challenges ============
// ============================================

console.log(`


*****************************************************
**************** = Coding Challenges = **************
*****************************************************

`);

// => Coding Challenge #1
console.log(`
***** Coding Challenge #1 *****

  Mark and Jhon are trying to compare their BMI (Body Mass Index),
  which is calculated using the formula:
  
    BMI = mass / height ** 2 = mass / (height * height)
    (mass in kg and height:  in meter).
  `);
// Mark
let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;

// Jhon
let jhonMass = 92;
let jhonHeight = 1.95;
let jhonBMI = jhonMass / (jhonHeight * jhonHeight);

// Comparison
let markHighterBMI = markBMI > jhonBMI;

console.log(` 
Data 1:  
  Mark's weights 78kg  and is 1.69m tall.
  Jhon's weights 92kg and is 1.95m tall.

    Mark's BMI : ${markBMI.toFixed(2)}
    Jhon's BMI: ${jhonBMI.toFixed(2)}
  
    Is Mark's BMI higher than Jhon's BMI?
    ${markHighterBMI}

`);

// Mark
markMass = 95;
markHeight = 1.88;
markBMI = markMass / markHeight ** 2;

// Jhon
jhonMass = 85;
jhonHeight = 1.76;
jhonBMI = jhonMass / (jhonHeight * jhonHeight);

// Comparison 2
markHighterBMI = markBMI > jhonBMI;

console.log(`
Data 2:  
  Mark's weights 95kg  and is 1.88m tall.
  Jhon's weights 85kg and is 1.76m tall.

    Mark's BMI : ${markBMI.toFixed(2)}
    Jhon's BMI: ${jhonBMI.toFixed(2)}

    Is Mark's BMI higher than Jhon's BMI?
    ${markHighterBMI}
`);

// => Coding Challenge #2
console.log(`
***** Coding Challenge #2 *****

  Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

  `);
if (markBMI > jhonBMI) {
  console.log(
    `Mark's BMI (${markBMI.toFixed(
      2
    )}) is higher than John's (${jhonBMI.toFixed(2)})!`
  );
} else {
  console.log(
    `Jhon's BMI (${markBMI.toFixed(
      2
    )}) is higher than Mark's (${jhonBMI.toFixed(2)})!`
  );
}

// => Coding Challenge #3
console.log(`
***** Coding Challenge #3 *****

  There are 2 gymnastics teams, 'Dolphins' and 'Koalas'. They compete against each other 3 times. The winner with the highest average score wins a trophy! 
  `);

/*
    Data 1 :
      Dolphins: 96 + 108 + 89
      Koalas: 88 + 91 + 110
    
    Data Bonus 1 :
      Dolphins: 97 + 112 + 101
      Koalas: 109 + 95 + 123

    Data Bonus 2 :
      Dolphins: 97 + 112 + 101
      Koalas: 109 + 95 + 106
  */
const dolphinsScore = ((97 + 12 + 110) / 3).toFixed(2);
const koalasScore = ((109 + 95 + 106) / 3).toFixed(2);

console.log(`
  Dolphins' score: ${dolphinsScore}
  Koalas' score: ${koalasScore} 
`);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log(`Dolphins wins!`);
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
  console.log(`Koalas wins!`);
} else if (
  dolphinsScore === koalasScore &&
  koalasScore >= 100 &&
  dolphinsScore >= 100
) {
  console.log(`It's a draw!`);
} else {
  console.log(`Need to raise score!`);
}
0;
