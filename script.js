'use strict';

// Data needed for a later exercise

const weekDays = [
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  Saturday: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`Day ${4 + 3}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Enhanced object literals
  // don't have to do openingHours: openingHours,
  openingHours,

  // same as other function syntax below
  order(starterI, mainI) {
    return [this.starterMenu[starterI], this.mainMenu[mainI]];
  },

  deliveryOrder: function ({
    starterI = 1,
    mainI = 0,
    time = `21:50`,
    address,
  }) {
    console.log(
      `Order for ${this.starterMenu[starterI]} and ${this.mainMenu[mainI]} received! Your order will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your tasty pasty with ${ingredient1}, ${ingredient2}, and ${ingredient3}.`
    );
  },
  orderPizza: function (primIngredient, ...optionalIngredients) {
    console.log(primIngredient);
    console.log(optionalIngredients);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split(`+`));
const getFirst3 = str => str.toUpperCase().slice(0, 3);

for (const flight of flights.split(`+`)) {
  const [typeD, origin, destination, time] = flight.split(`;`);
  const warningD = typeD.toLowerCase().includes(`delayed`) ? `🔴` : ``;
  console.log(
    `${warningD}${typeD.replaceAll(`_`, ` `)} from ${origin
      .toUpperCase()
      .slice(0, 3)} to ${getFirst3(destination)} (${time.replace(
      `:`,
      `h`
    )})`.padStart(51)
  );
}

// // Coding Challenge #4

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const splitText = text.split(`\n`);
//   let counter = 1;
//   for (const words of splitText) {
//     const indexU = words.indexOf(`_`);
//     //console.log(wordLower);
//     const wordUpper =
//       words.slice(0, indexU).toLowerCase() +
//       words[indexU + 1].toUpperCase() +
//       words.slice(indexU + 2).toLowerCase();
//     console.log(wordUpper.trim().padEnd(20) + `✅`.repeat(counter));
//     counter++;
//   }
//   for (const [index, words] of splitText.entries()) {
//     const [first, second] = words.toLowerCase().trim().split(`_`);
//     //console.log(words, first, second);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output.padEnd(20) + `☑`.repeat(index + 1));
//   }
// });

// Input for Coding Challenge #4
/*
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/

// // Strings 3
// console.log(`a+very+nice+duck`.split(`+`));
// console.log(`Steve Gillet`.split(` `));

// const [firstName, lastName] = `John Jacob`.split(` `);

// const properName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
// console.log(properName);

// const capitalizeFirst = function (name) {
//   const nameS = name.split(` `);
//   const namesUpper = [];
//   for (const letter of nameS) {
//     //namesUpper.push(letter[0].toUpperCase() + letter.slice(1));
//     namesUpper.push(letter.replace(letter[0], letter[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(` `));
// };

// const passenger = `john jacob jingle himer smith`;

// capitalizeFirst(passenger);
// capitalizeFirst(`jonny boy`);

// // padding

// const message1 = `Get out of the choppa!`;
// console.log(message1.padStart(25, `-`));
// console.log(`Oreo cookies`.padStart(25, `~`));

// console.log(message1.padEnd(25, `!`));
// console.log(message1.padStart(25, `-`).padEnd(30, `!`));

// const maskCredit = function (cardNumber) {
//   //converts to string by adding string
//   const str1 = cardNumber + ``;
//   const last4 = str1.slice(-4);
//   return last4.padStart(str1.length, `*`);
// };

// console.log(maskCredit(4321324521253215));
// console.log(maskCredit(`4121323521453245`));

// // repeat string
// const message2 = `Get that pink lady out of the peanut butter! `;
// console.log(message2.repeat(4));

// const pinkLadies = function (numberP) {
//   console.log(
//     `There are ${numberP} pink ladies waiting ${`🍎`.repeat(numberP)}`
//   );
// };

// pinkLadies(3);
// pinkLadies(64);

// // Strings 2

// const airline = `Southwest Airlines`;

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger1 = `JoHnathAn`;
// const passenger1Lower = passenger1.toLowerCase();
// const passenger1FirstUpper =
//   passenger1Lower[0].toUpperCase() + passenger1Lower.slice(1);
// console.log(passenger1FirstUpper);

// const correctCapital = function (input) {
//   const inputLower = input.toLowerCase();
//   return inputLower[0].toUpperCase() + inputLower.slice(1);
// };

// console.log(correctCapital(passenger1));
// console.log(correctCapital(`sAmSoN`));

// const email = `stevegillet@gmail.com`;
// const signInEmail = `  SteveGillet@Gmail.com \n`;

// const lowerEmail = signInEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const correctedEmail = signInEmail.toLowerCase().trim();
// console.log(correctedEmail);
// console.log(email === correctedEmail);

// const lowerTrim = function (input1, input2) {
//   const checkString = input2.toLowerCase().trim();
//   return input1 === checkString;
// };

// console.log(lowerTrim(email, signInEmail));

// console.log(signInEmail.trimStart());
// console.log(signInEmail.trimEnd());

// // replacing
// const priceFr = `288,97€`;
// const priceUSA = priceFr.replace(`€`, `$`).replace(`,`, `.`);
// console.log(priceUSA);

// const announce = `All passengers get the fuck out of the door. Go to door 6.`;
// console.log(announce.replaceAll(`door`, `gate`));

// //regular expression. g stands for global
// console.log(announce.replaceAll(/door/g, `gate`));

// // three simple methods that returns booleans

// const plane3 = `F-10 Warthog`;
// console.log(plane3.includes(`F-10`));
// console.log(plane3.includes(`F-22`));
// console.log(plane3.startsWith(`F`));
// console.log(plane3.startsWith(`F-1`));

// if (plane3.startsWith(`F`) && plane3.endsWith(`hog`)) {
//   console.log(`Part of the military hog fam.`);
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`gun`) || baggage.includes(`bomb`))
//     console.log(`You can't come on the plane with that dude.`);
//   else console.log(`Welcome aboard matey.`);
// };

// checkBaggage(`I have a laptop, some mouthwash, and a submachine gun.`);
// checkBaggage(`I have a toothbrush, a towel, and a Bomb.`);
// checkBaggage(`I have a snail, a mouse, and 2 teeth.`);

// // Strings 1

// const airline = `American Airlines`;
// const plane = `757`;

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(`plane`[0]);

// console.log(airline.length);
// console.log(`plane`.length);

// console.log(airline.indexOf(`A`));
// console.log(airline.lastIndexOf(`A`));
// console.log(airline.indexOf(`Airlines`));
// // case sensitive
// console.log(airline.indexOf(`airlines`));
// // substring
// console.log(airline.slice(5));
// console.log(airline.slice(1, 7));

// console.log(airline.slice(airline.indexOf(`American`), airline.indexOf(` `)));
// console.log(airline.slice(airline.lastIndexOf(` `) + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// // B and E are middle seats
// const checkMiddle = function (seat) {
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`) console.log(`You've got the middle seat 😿`);
//   else console.log(`You don't have the middle seat 🍻`);
// };
// // boxing taking string and putting it into an object behind the scenes
// checkMiddle(`4C`);
// checkMiddle(`14E`);
// checkMiddle(`8A`);

// console.log(new String(`tommy gun`));
// console.log(typeof new String(`tommy gun`));

// // Coding Challenge #3

// // 1.)
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.)
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.)
// const gameLength = [...gameEvents.keys()].pop();
// const averageEvent = Math.round(gameLength / gameEvents.size);
// console.log(`An event happened, on average, every ${averageEvent} minutes.`);

// // 4.)
// for (const [minute, event] of gameEvents) {
//   const eventsStr = minute <= 45 ? `[First Half]` : `[Second Half]`;
//   console.log(`${eventsStr} ${minute}: ${event}`);
// }

// // Iterating Maps

// const quiz = new Map([
//   [`question1`, `Which is the best language?`],
//   [11, `C++`],
//   [12, `Java`],
//   [13, `JS`],
//   [`correct`, 13],
//   [true, `Right!`],
//   [false, `Wrong!`],
// ]);

// console.log(quiz);
// //looks the same
// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(quiz.get(`question1`));
// for (const [key, value] of quiz) {
//   if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
// }
// const answer1 = Number(prompt(quiz.get(`question1`)));
// console.log(answer1);

// console.log(quiz.get(answer1 + 10 === quiz.get(`correct`)));

// // convert map to aarray
// console.log([...quiz]);
// console.log([quiz.entries()]);
// console.log([...quiz.keys()]);
// console.log([...quiz.values()]);

// // Maps

// const restaurantMap = new Map();
// restaurantMap.set(`keyName`, `Classic French`);
// restaurantMap.set(2, `Paris, France`);

// console.log(restaurantMap.set(3, `Munich, Germany`));

// restaurantMap
//   .set(`categories`, [`French`, `Classic`, `Organic`, `Scratch`])
//   .set(`open`, 5)
//   .set(`close`, 26)
//   .set(true, `We're Open!`)
//   .set(false, `We're Closed.`);

// console.log(restaurantMap.get(`keyName`));
// console.log(restaurantMap.get(true));
// console.log(restaurantMap.get(2));

// const time = 18;
// console.log(
//   restaurantMap.get(
//     time > restaurantMap.get(`open`) && time < restaurantMap.get(`close`)
//   )
// );

// console.log(restaurantMap.has(`categories`));
// restaurantMap.delete(3);
// console.log(restaurantMap);
// console.log(restaurantMap.size);
// //restaurantMap.clear();
// console.log(restaurantMap);
// restaurantMap.set([4, 5], `Test`);
// console.log(restaurantMap);
// //won't work because the two arrays have the same value but are different arrays in memory
// console.log(restaurantMap.get([4, 5]));

// const mapArray = [6, 7];
// restaurantMap.set(mapArray, `Test Array`);
// console.log(restaurantMap.get(mapArray));

// restaurantMap.set(document.querySelector(`h1`), `Heading`);
// console.log(restaurantMap);

// // Sets

// const ordersSet = new Set([`Banana`, `Party`, `Banana`, `Bed`, `Pants`]);
// console.log(ordersSet);

// console.log(new Set(`Steve`));

// console.log(ordersSet.size);
// console.log(ordersSet.has(`Banana`));
// ordersSet.add(`Garlic`);
// ordersSet.add(`Garlic`);
// console.log(ordersSet);
// ordersSet.delete(`Garlic`);
// console.log(ordersSet);
// ordersSet.clear();
// console.log(ordersSet);

// ordersSet.add(`Garlic`);
// ordersSet.add(`Banana`);
// ordersSet.add(`Party`);
// ordersSet.add(`Bed`);
// ordersSet.add(`Pants`);
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // real world example

// const staff = [
//   `Technician`,
//   `Assistant`,
//   `Supervisor`,
//   `Manager`,
//   `Assistant`,
//   `Technician`,
// ];

// const staffSet = [...new Set(staff)];
// console.log(staffSet);
// console.log(
//   new Set([
//     `Technician`,
//     `Assistant`,
//     `Supervisor`,
//     `Manager`,
//     `Assistant`,
//     `Technician`,
//   ]).size
// );

// console.log(new Set(`stevegillet`).size);

// //Coding Challenge 2
// //1
// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }
// //2
// const oddsEntities = Object.entries(game.odds);

// let averageOdds = 0;
// for (const [, odds] of oddsEntities) {
//   averageOdds += odds;
// }
// console.log(averageOdds / oddsEntities.length);
// //3
// for (const [result, odds] of oddsEntities) {
//   let str = game[result] ? `victory for ${game[result]}` : `draw`;
//   console.log(`Odds of ${str}: ${odds}`);
// }
// //bonus
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// // Object Looping

// //property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openString = `We are open ${properties.length} days a week.`;

// for (const day of properties) {
//   openString += `${day}, `;
// }

// console.log(openString);

// //property values
// const values = Object.values(openingHours);
// console.log(values);

// // entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}.`);
// }

// //Optional Chaining

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.Friday)
//   console.log(restaurant.openingHours.Friday.open);

// // with optional chaining
// //before question mark if not nullish
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// for (const day of weekDays) {
//   console.log(day);
//   let openTime = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${openTime}.`);
// }

// //optional chaining for methods
// console.log(restaurant.order?.(3, 1) ?? `Method doesn't exist.`);
// console.log(restaurant.orderRisotto?.(3, 1) ?? `Method doesn't exist.`);

// // optional chaining for arrays
// const users = [{ name: `Jimmy`, email: `jimmyJohnson@gmail.com` }];

// console.log(users[0]?.name ?? `User array empty.`);

// Enhanced Object Literal

// // Looping Arrays
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of fullMenu) console.log(item);

// for (const [item, element] of fullMenu.entries()) {
//   console.log(`${item + 1}: ${element}`);
// }

// console.log([...fullMenu.entries()]);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //Football Bet Challenge 1
// //1.)
// // original way
// // const players1 = [...game.players[0]];
// // console.log(players1);
// // const players2 = [...game.players[1]];
// // console.log(players2);
// // better way
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2.)
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3.)
// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);
// // 4.)
// const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// console.log(players1Final);
// // 5.)
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// //alternate method
// //const {odds: {team1, x: draw, team2}} = game;
// // 6.)
// const printGoals = function (...players) {
//   console.log(players);
//   let goals = 0;
//   for (let i = 0; i < players.length; i++) goals++;
//   // better is to do goals = players.length
//   console.log(`Number of goals is: ${goals}`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7.)
// //original answer
// let winningTeam = team1;
// let winningIndex;
// const oddsArray = [team1, draw, team2];
// const namesArray = [`Team 1`, `Draw`, `Team 2`];
// for (let i = 0; i < oddsArray.length; i++) {
//   winningTeam > oddsArray[i] && (winningTeam = oddsArray[i]);
// }
// console.log(`${winningTeam} is the most likely outcome.`);
// //better answer -draw
// team1 < team2 && console.log(`Team 1 is most likely to win`);
// team1 > team2 && console.log(`Team 2 is most likely to win`);

// //Nullish Coalescing

// let defaultGuests2 = 10;
// restaurant.numGuests2 = 0;
// const guestsSS2 = restaurant.numGuests2 || defaultGuests2;
// console.log(guestsSS2);

// //Nullish values: null and undefined (treats 0 and `` as truthy)
// const guestsZero = restaurant.numGuests2 ?? defaultGuests2;
//console.log(guestsZero);

// // Short Circuiting
// //logical operators can use and return any data type
// //short circuiting if first value is truthy it will be returned immediately
// console.log(43 || `Thompson`);
// console.log(`` || `Samson`);
// console.log(true || 0);
// //skips falsy values till the end
// console.log(undefined || null);

// console.log(undefined || 0 || `` || `Hello` || 23 || null);

// // doesn't work if default guests is 0
// let defaultGuests = 10;
// //restaurant.numGuests = 23;
// const guests = restaurant.numGuests ? restaurant.numGuests : defaultGuests;
// console.log(guests);

// const guestsSS = restaurant.numGuests || defaultGuests;
// console.log(guestsSS);

// console.log(`~~~~AND~~~~`);
// console.log(0 && `Lacy`);
// console.log(3 && `Tom Clancy`);

// console.log(`Hello` && 23 && null && `Pot`);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`pot`, `stones`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`String cheese`, `orange juice`);

// //Rest Pattern
// //similar but opposite to spread

// //spread because on right side
// const arraySpread = [1, 2, ...[4, 23]];

// //Rest Pattern on left
// const [a, b, ...leftOvers] = [3, 3, 6, 4];

// console.log(arraySpread);
// console.log(a, b, leftOvers);

// const [pizza, ...combinedMenuSpizza] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, combinedMenuSpizza);

// // rest objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // functions
// const add1 = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add1(4, 5);
// add1(32, 31, 2, 35);

// const origArray = [7, 3, 2];
// add1(...origArray);

// restaurant.orderPizza(`Shrooms`, `pineapple`, `banana`);
// restaurant.orderPizza(`prosciutto`);

// //rest pattern used where we would seperate variables by commas

// //Spread Operator

// const array2 = [3, 2, 5];
// const badNewArray2 = [1, 2, array2[0], array2[1], array2[2]];
// console.log(badNewArray2);

// const goodNewArray2 = [1, 2, ...array2];
// console.log(goodNewArray2);

// console.log(...goodNewArray2);

// const newMainMenu = [...restaurant.mainMenu, `Lasagna`];
// console.log(newMainMenu);

// //copying array

// const mainMenuCopy = [...restaurant.mainMenu];

// //combining arrays

// const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(wholeMenu);

// // Iterables: arrays, strings, maps, sets. Not objects sadly.
// const str = `Sam`;
// const letters = [...str, ` `, `S.`];
// console.log(letters);
// console.log(...str);
// // //Does not work because spread only works where values seperated by commas are expected
// // console.log(`${...str} Thompson`);

// const ingredients = [
//   prompt(`Let\'s make some pasty boys. Ingredient 1:`),
//   prompt(`Ingredient 2:`),
//   prompt(`Ingredient 3:`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //Objects
// const newJoint = {
//   founded: 1996,
//   ...restaurant,
//   name: `Mama Mia Mario's`,
//   founder: `Mario`,
// };
// console.log(newJoint);

// const copyRestaurant = { ...newJoint };
// copyRestaurant.name = `Salami Mami's`;
// console.log(copyRestaurant.name);
// console.log(restaurant.name);
// console.log(newJoint.name);

// //Destructuring Objects
// restaurant.deliveryOrder({
//   time: `21:15`,
//   address: `315 N Utica`,
//   mainI: 2,
//   starterI: 0,
// });

// //testing default arguments
// restaurant.deliveryOrder({
//   address: `315 N Utica`,
//   mainI: 2,
// });

// //Destructuring Objects
// const { name, openingHours, categories } = restaurant;

// console.log(name, categories, openingHours);

// //renaming variables
// const {
//   name: restaurantName,
//   openingHours: hoursOfOperation,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hoursOfOperation, tags);

// //new variables, default values
// const { menu = [], starterMenu: appetizers = [] } = restaurant;
// console.log(menu, appetizers);

// //mutating variabales
// let a2 = 21;
// let b2 = 123;
// const obj = { a2: 3, b2: 2, c2: 1 };

// ({ a2, b2 } = obj);
// console.log(a2, b2);

// //nested objects
// const {
//   fri: { open: openingTime, close: closingTime },
// } = openingHours;
// console.log(openingTime, closingTime);

// const array1 = [3, 46, 23];
// const a = array1[0];
// const b = array1[1];
// const c = array1[2];

// //Destructuring Array
// const [x, y, z] = array1;

// console.log(a, b, c);
// console.log(z, y, x);
// console.log(array1);

// const [best, secondBest] = restaurant.mainMenu;
// console.log(best, secondBest);

// let [, , gluten, vegetarian] = restaurant.starterMenu;
// console.log(vegetarian, gluten);

// // //switching items
// // const temp = vegetarian;
// // vegetarian = gluten;
// // gluten = temp;

// console.log(vegetarian, gluten);

// [vegetarian, gluten] = [gluten, vegetarian];
// console.log(vegetarian, gluten);

// console.log(restaurant.order(0, 1));
// const [starter, main] = restaurant.order(1, 2);
// console.log(starter, main);

// //nested destructuring
// const nestedArray = [22, 34, [2, 5]];
// const [i, , k] = nestedArray;
// console.log(i, k);

// const [, , [l, m]] = nestedArray;
// console.log(l, m);

// // default values
// const [f, g, h] = [8, 9];
// console.log(f, g, h);

// const [o = 1, p = 1, q = 1] = [4, 5];
// console.log(o, p, q);
