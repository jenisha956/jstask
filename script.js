//values and variables

var country="tamilnadu";
var continent="asia";
var population="4million";


//datatypes
let island = true;
let language ;
console.log(typeof(country));
console.log(typeof(continent));
console.log(typeof(population));
console.log(typeof(island));
console.log(typeof(language));

let,const,var

const language="tamil";
var country="tamilnaaaaaadu";
country = "english";
console.log(language,country);

//operators

let country = 9/2+1;
let population=4;
let finland = 6;
let averagepeople = 33;
var description="Portugal is in Europe, and its 11 million peoplespeak portuguese";
console.log(country/population<finland>averagepeople);
console.log(typeof(description));

//literal
let description1 = `Portugal is in Europe, and its ${population} million people speak Portuguese.`;
console.log(description1);
//if/else
var population = 33;
var country  = 130;
if(population >  country){
    console.log("Portugal's population is above average");
}else {
    let different= 33 - population;
    console.log(`Portugal's population is ${different} million below average`);
}

//conversion coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//equality

var numneighbours=0;
prompt('How many neighbour countries does your country have?');
if(numneighbours === 0){
    console.log("only 1 border");
}else if(numneighbours > 1)
{
 console.log("border");
}else{
    console.log("no boredr");
}

//logical operator

let speakenglish= true;
let population = 50;
let islands=WebTransportDatagramDuplexStream;

if(population && speakenglish < 50 && !islands )
{
    console.log("You should live in Portugal :")
}else{
    console.log(" Portugal does not meet your criteria");
}

//switch

let language;
switch("chinese or mandarin"){
        case "chinese or mandarin":
        console.log("MOST number of native speakers!");
        break;
        case "spanish":
        console.log("2nd!");
        break;
        case "english":
        console.log("3rd");
        break;
        case "arabic":
        console.log("4th");
        break;
        case "hindi":
        console.log("5th");
        break;
 default:
    console.log("great language too");       

}

//ternary operator

popoulation = 30;
 console.log((popoulation < 30) ? "Portugal's population is above average" : "Portugal's population is below average");

// assignment 2

let massMark1 = 78;
let heightMark1 = 1.69;
let massJohn1 = 92;
let heightJohn1 = 1.95;

let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;

let BMIMark1 = 28.3;
let BMIJohn1 = 23.9;

let BMIMark2 = 29.1;
let BMIJohn2 = 27;


console.log("Data 1 - BMIMark:", BMIMark1);
console.log("Data 1 - BMIJohn:", BMIJohn1);

console.log("Data 2 - BMIMark:", BMIMark2);
console.log("Data 2 - BMIJohn:", BMIJohn2);


let markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log("Data 1 - Mark has a higher BMI than John:", markHigherBMI1);

let markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log("Data 2 - Mark has a higher BMI than John:", markHigherBMI2);

if(markHigherBMI1 > markHigherBMI2){
    console.log("mark bmi is high");
}else{
    console.log("mark bmi is low");
}

// let fruits1 = ["apple", " mango"];
// let fruits2 = [...fruits1,"jack"];
// console.log(fruits2);
// function sum(...num){
//     return num+a+b;
// }
// console.log(1,2,3,3)

result1=0;
result2=20;
const result = result1 || result2;
console.log(result);
let userInput = ""; 


let username = userInput ?? "Guest";

console.log(username);
 let jeni=["myself","intro"];
 console.log(jeni.splice(0));

const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.filter(element => 3);

console.log(newArray);

const originalArray = [1, 2, 3, 4, 5];

const filteredArray = originalArray.reduce(element => element > 2);
 console.log(filteredArray);


counter application

// data 1

// Challenge #3

let dolphinsScores = [96+ 108+ 89];
let koalasScores = [88+91+ 110];


let scoreDolphins = dolphinsScores.reduce((acc,score) => acc+score,0 );
let scoreKoalas = koalasScores.reduce((acc,score) => acc+score,0 );


if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy!');
} else {
    console.log('Both win the trophy!');
}

// Challenge #4

let bill = 40;


let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const result1 = describeCountry('tn', 6, 'Helsinki');
const result2 = describeCountry('kl', 10, 'City2');
const result3 = describeCountry('Country3', 8, 'City3');

console.log(result1);
console.log(result2);
console.log(result3);
//part -2 
let popoulation = 200;
const percentageOfWorld2 = population => (population / 7900) * 100;

function describePopulation(country,population)
{
return "china has '${million people ,which is about 18.2% of the world"
percentage = describePopulation(percentageofWorld1);
}

describePopulation=(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

const result7 = describePopulation('China', 1441);
const result8 = describePopulation('Country2', 1000);
const result9 = describePopulation('Country3', 2000);

console.log(result7);
console.log(result8);
console.log(result9);
const populations = [0, 1441, 100, 50];

arrow function
const world = percentageofworld3 =>({
    
})

console.log(populations.length === 1);
let million =1441;

function  describePopulation(country,population){
    return ('china has $million people which is about  the world');
}
describePopulation = percentageofworld1(country,population);
 
// 
const percentages =null;
function percentageOfWorld1(percentages){
    return percentages;
}

// Assignment 1
const neighbours = ['Country1', 'Country2', 'Country3'];

// Assignment 2
neighbours.push('Utopia','sweden');

// Assignment 3
neighbours.pop();

// Assignment 4
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}

// Assignment 5
const indexSweden = neighbours.indexOf('Country2');
if (indexSweden !== -1) {
    neighbours[indexSweden] = 'Republic of Sweden';
}



console.log(mycountry.country);
console.log(mycountry["capital"]);

const myCountry = {
    country: 'YourCountry',
    capital: 'CapitalCity',
    population: 10000000, 
  
    describe: function () {
      console.log(`This is ${this.country}, its capital is ${this.capital}, and it has a population of ${this.population} people.`);
    },
  
    checkIsland: function () {
      this.isIsland = this.neighbours.length === 0 ? true : false;
    },
  

  };
  
  
  myCountry.describe();
  
  
  myCountry.neighbours = []; 
  myCountry.checkIsland();
  console.log(myCountry.isIsland);
  

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
  }

const populations =[];


const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}


console.log(percentages2); 

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];


for (let i = 0; i < listOfNeighbours.length; i++) {
  const countries = listOfNeighbours[i];
  for (let j = 0; j < countries.length; j++) {
    console.log(`Neighbour: ${countries[j]}`);
  }
}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
  
// Challenge #5
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(scoreDolphins1, scoreKoalas1);
checkWinner(scoreDolphins2, scoreKoalas2);

// Challenge #6
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
const tips = bills.map(calcTip);
const totals = bills.map((bill, index) => bill + tips[index]);

// Challenge #7
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

if (markBMI > johnBMI) {
  console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})!`);
} else if (johnBMI > markBMI) {
  console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`);
} else {
  console.log('Both have the same BMI!');
}

// Challenge #8
const billsChallenge8 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsChallenge8 = [];
const totalsChallenge8 = [];

const calcTipChallenge8 = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

for (let i = 0; i < billsChallenge8.length; i++) {
  const tip = calcTipChallenge8(billsChallenge8[i]);
  tipsChallenge8.push(tip);
  totalsChallenge8.push(billsChallenge8[i] + tip);
}

const calcAverage = (arr) => arr.reduce((sum, value) => sum + value, 0) / arr.length;
const averageChallenge8 = calcAverage(totalsChallenge8);

// Challenge #9
const printForecast = (arr) => {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast += `... ${arr[i]}ºC in ${i + 1} day(s) `;
  }
  console.log(forecast);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
let count = 0;

function updateCountDisplay() {
  document.getElementById("count-display").textContent = count;
}

function showMaxExceededMessage() {
  document.getElementById("max-exceeded-message").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("max-exceeded-message").classList.add("hidden");
  }, 2000);
}

function showMinExceededMessage() {
  document.getElementById("min-exceeded-message").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("min-exceeded-message").classList.add("hidden");
  }, 2000);
}

function increment() {
  if (count < 9999) {
    count++;
    updateCountDisplay();
  } else {
    showMaxExceededMessage();
  }
}

function decrement() {
  if (count > 0) {
    count--;
    updateCountDisplay();
  } else {
    showMinExceededMessage();
  }
}

function reset() {
  count = 0;
  updateCountDisplay();
}
Challenge #10

const players1 = game.players[0];
const players2 = game.players[1];


const [gk, ...fieldPlayers] = players1;


const allPlayers = [...players1, ...players2];


const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];


const { team1, x: draw, team2 } = game.odds;


function printGoals(...players) {
  players.forEach((player) => console.log(player));
}


const lowerOddTeam = team1 < team2 ? 'team1' : 'team2';
console.log(`The team more likely to win is ${lowerOddTeam}`);


printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// Challenge #11

game.scored.forEach((player, i) => console.log(`Goal ${i + 1}: ${player}`));


const averageOdd = (team1 + draw + team2) / 3;
console.log(`Average Odd: ${averageOdd.toFixed(2)}`);


console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of draw: ${draw}`);
console.log(`Odd of victory ${game.team2}: ${team2}`);


const scorers = {};
game.scored.forEach((player) => {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
});
console.log('Scorers:', scorers);
// Challenge #12

const events = [...new Set(gameEvents.values())];


gameEvents.forEach((value, key) => {
  if (value === '🔶 Yellow card' && key === 64) {
    gameEvents.delete(key);
  }
});


const averageMinutes = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${averageMinutes} minutes`);

// 
gameEvents.forEach((value, key) => {
  const half = key <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${key}: ${value}`);
});
// Challenge 13
const convertToCamelCase = (underscoreCase) => {
    const words = underscoreCase.split('_');
    const camelCase = words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    return camelCase;
  };
  
  
  console.log(convertToCamelCase('underscore_case')); 
  console.log(convertToCamelCase('first_name')); 
  console.log(convertToCamelCase('Some_Variable')); 
  console.log(convertToCamelCase('calculate_AGE')); 
  console.log(convertToCamelCase('delayed_departure'));

// Challenge 14
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
  
    registerNewAnswer: function () {
      const input = prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      );
      const choice = Number(input);
  
      if (
        Number.isInteger(choice) &&
        choice >= 0 &&
        choice < this.options.length
      ) {
        this.answers[choice]++;
        this.displayResults();
      } else {
        alert('Invalid input. Please enter a valid option number.');
      }
    },
  
    displayResults: function () {
      console.log('Poll results:', this.answers);
    },
  };
  
  // Challenge 15
  function checkDogs(dogsJulia, dogsKate) {
    const juliaCorrected = dogsJulia.slice(1, -2);
    const allDogs = [...juliaCorrected, ...dogsKate];
  
    allDogs.forEach((age, index) => {
      const status = age >= 3 ? 'adult' : 'puppy';
      console.log(`Dog number ${index + 1} is an ${status}, and is ${age} years old`);
    });
  }
  
  // Challenge #16
  function calcAverageHumanAge(ages) {
    const humanAges = ages.map((age) =>
      age <= 2 ? 2 * age : 16 + age * 4
    );
  
    const adults = humanAges.filter((age) => age >= 18);
    const average =
      adults.reduce((acc, age) => acc + age, 0) / adults.length;
  
    return average;
  }
  
  // Challenge #17
  const calcAverageHumanAge2 = (ages) =>
    ages
      .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter((age) => age >= 18)
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  
  // Challenge #18
  const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
  ];
  
  dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
  const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
  
  console.log(
    sarahDog.curFood > sarahDog.recommendedFood
      ? "Sarah's dog is eating too much!"
      : "Sarah's dog is eating too little!"
  );
  
  const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .flatMap((dog) => dog.owners);
  
  const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood)
    .flatMap((dog) => dog.owners);
  
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  const anyDogEatingRecommendedAmount = dogs.some(
    (dog) => dog.curFood === dog.recommendedFood
  );
  
  console.log(`Any dog eating recommended amount: ${anyDogEatingRecommendedAmount}`);
  
  const anyDogEatingOkayAmount = dogs.some(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  );
  
  console.log(`Any dog eating okay amount: ${anyDogEatingOkayAmount}`);
  
  const dogsOkayAmount = dogs.filter(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  );
  
  const sortedDogs = [...dogs].sort(
    (a, b) => a.recommendedFood - b.recommendedFood
);
  
  