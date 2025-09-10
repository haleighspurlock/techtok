//ARRAYS
//Write a simple array and object to practice accessing data.
const snacks = ["blueberry bar", "chippies", "pretzles", "applesauce"];
// const snackInfo = { name: 'chippies', type: 'savory', calories: 200 };
// console.log(snacks[2]);  // Should log 'pretzles'
// console.log(snackInfo.name);  // Should log 'chippies'

//LOOPS
//Use a loop to go through your array and print each snack:
// snacks.forEach(snack => console.log(snack));

//CONDITIONALS
//Use a loop to go through your array and print each snack:
// snacks.forEach(snack => {
//   if (snack === 'chippies') {
//     console.log('bruh, i fucking love chippies!');
//   } else {
//     console.log(snack);
//   }
// });

// //Functions (ES6)
// //Write a function that accepts an array of snacks and returns the one with the most calories.

// const snackCalories = [
//   { name: 'cookie', calories: 200 },
//   { name: 'chips', calories: 150 },
//   { name: 'apple', calories: 95 }
// ];

// const getHighestCalorieSnack = snacks => {
//   let highest = snacks[0];
//   snacks.forEach(snack => {
//     if (snack.calories > highest.calories) {
//       highest = snack;
//     }
//   });
//   return highest.name;
// };

// console.log(getHighestCalorieSnack(snackCalories)); // Should log 'cookie'

// //ES6 Arrow Functions
// //Practice creating arrow functions instead of traditional functions.

// const greet = name => `Hello, ${name}!`;
// console.log(greet('Mom'));

// //SNACK PICKER APP
//Make a simple Snack Picker app that picks a
//random snack from your list and logs it to the console.
const snackies = ["blueberry bar", "chippies", "waterlemon", "popsicle", "pizza"];

const pickRandomSnack = (snackies) => {
  const randomIndex = Math.floor(Math.random() * snackies.length);
  return snackies[randomIndex];
};

console.log(pickRandomSnack(snackies)); // Logs random snack
