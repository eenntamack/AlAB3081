const n1 = 33;
const n2 = 24;
const n3 = 41;
const n4 = 30;
let isOver25;

//PART 1:

//1. checking if all numbers are divisible by 5
let divByFive = (n1 % 5 == 0);
console.log(`n1 divided by 5 is: ${divByFive}`);

divByFive = (n2 % 5 == 0);
console.log(`n2 divided by 5 is: ${divByFive}`);

divByFive = (n3 % 5 == 0);
console.log(`n3 divided by 5 is: ${divByFive}`);

divByFive = (n4 % 5 == 0);
console.log(`n4 divided by 5 is: ${divByFive}`);

//2. Check if first number is bugger than the last number

let firstIsBigger = (n1 > n4);
console.log(`the first number is bigger than the smaller number is ${firstIsBigger}`);

//3. Arithmetic chain
console.log('Arithmetic chain answer: ' + ((n2 - n1) * n3)/ n4);

//4. Checking if every number is divisible by 5
let isDivisibleBy5 = (n1 % 5) == 0 || (n2 % 5) == 0 || (n3 % 5) == 0 || (n4 % 5) == 0;

console.log(`It is ${isDivisibleBy5} that at least one number is divisible by 5`);



//PART 2.
let distance = 1500;
let rate1 = 55;
let rate2 = 60;
let rate3 = 75;

let rateMilePerGallon1 = 30;
let rateMilePerGallon2 = 28;
let rateMilePerGallon3 = 23;

let budget = 175;
let costPerGallon = 3;

//Below shows how many gallons will be used at each rate

console.log(`For 55 miles per hour, 30 miles per gallon you will use: ${1500/rateMilePerGallon1} gallons.\n`);
console.log(`For 60 miles per hour, 28 miles per gallon you will use: ${1500/rateMilePerGallon2} gallons.\n`);
console.log(`For 75 miles per hour, 23 miles per gallon you will use: ${1500/rateMilePerGallon3} gallons.\n`);

let option1 = 1500/rateMilePerGallon1;
let option2 = 1500/rateMilePerGallon2;
let option3 = 1500/rateMilePerGallon3;

//Below determines whether we have the budget for the trip

console.log(`Budget availibility for option 1 is ${budget >= (option1 * 3)}.`);
console.log(`Budget availibility for option 2 is ${budget >= (option2 * 3)}.`);
console.log(`Budget availibility for option 3 is ${budget >= (option3 * 3)}.`);

//Below is the amount of time it will take for every speed

console.log(`At 55 miles per hour, it will take you ${1500/rate1}hrs.`);
console.log(`At 60 miles per hour, it will take you ${1500/rate2}hrs.`);
console.log(`At 75 miles per hour, it will take you ${1500/rate3}hrs.`);
