"use strict";
// Question1
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
let personName = "Raima";
console.log(`"Hello ${personName},would you like to learn some Python today?” `);
// Question 2
//  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
function strToLowerCase(str) {
    return str.toLowerCase();
}
function strToUperCase(str) {
    return str.toUpperCase();
}
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
function anyCasefunc(str, anyFunc) {
    return anyFunc(str);
}
let name1 = "habiba sajid";
let tolowecase1 = anyCasefunc(name1, strToLowerCase);
console.log(tolowecase1);
let toupcase = anyCasefunc(name1, strToUperCase);
console.log(toupcase);
let title = anyCasefunc(name1, toTitleCase);
console.log(title);
// Question 4
//  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famousPerson = "Albert Einstein";
let famousQuote = `“A person who never made a mistake never tried anything new.”`;
console.log(`${famousPerson} once said,${famousQuote}`);
// Question 5
/*5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message. */
let famousPerson2 = "Albert Einstein";
let famousQuote2 = `“A person who never made a mistake never tried anything new.”`;
console.log(`${famousPerson2} once said,${famousQuote2}`);
// Question 6
/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */
let name4 = "\tSajid \nAli";
console.log(name4);
let newName = name4.trim();
console.log(newName);
// Question 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
console.log("addityion", 6 + 2);
console.log("subtraction", 10 - 2);
console.log("multiplication", 4 * 2);
console.log("division", 16 / 2);
// Question 8
console.log("addityion", 6 + 2);
console.log("subtraction", 10 - 2);
console.log("multiplication", 4 * 2);
console.log("division", 16 / 2);
// Question 9
/** Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
 */
let favNum = 90;
console.log(`my fav num is ${favNum}`);
// Question 10
/** Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does.
 */
console.log("addityion", 6 + 2);
// 6+2 =8
console.log("subtraction", 10 - 2);
// 10 - 2 = 8
console.log("multiplication", 4 * 2);
console.log("division", 16 / 2);
// Question 11
/**Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time. */
let friends = ["Raima", "Alina", "Iqra"];
// console.log(friends[1]);
// console.log(friends[0]);
// console.log(friends[2]);
// Question 12
/** Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name. */
function greet(friendsname) {
    for (let i = 0; i < friendsname.length; i++) {
        console.log(`Hi lets meet today ${friendsname[i]}`);
    }
}
let message = greet(friends);
console.log(message);
// Question 13
/**Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
let list = ["Bmw", "bike", "cycle"];
list.forEach((transport) => {
    console.log(`I would like to have ${transport}`);
});
// Question 14
/*  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
let dinnerList = ["Raima", "Alina", "Iqra"];
dinnerList.map((guest) => {
    console.log(`Salam, ${guest} lets have dinner together`);
});
// Question 15
/**Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite. */
console.log("list 2");
dinnerList.splice(0, 1, "Bushra");
dinnerList.map((guest) => {
    console.log(`Salam, ${guest} lets have dinner together`);
});
// Question 16
console.log("new list");
/*More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
 */
// Add one new guest to the beginning of your array.
dinnerList.unshift("warda");
// Add one new guest to the middle of your array.
dinnerList.splice(0, dinnerList.length / 2 + 1, "Amir");
// Use append() to add one new guest to the end of your list.
dinnerList.push("wajeeha");
dinnerList.map((guest) => {
    console.log(`Salam, ${guest} lets have dinner together`);
});
// Question 19
// // Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
let dinnerguest = dinnerList.length;
console.log("number of guests:", dinnerguest);
// Question 18
/**Seeing the World: Think of at least five places in the world you’d like to visit.*/
// Create an array of places to visit (not in alphabetical order)
const placesToVisit = [
    "Paris",
    "Kyoto",
    "Santorini",
    "New York",
    "Rio de Janeiro",
];
// Print the array in its original order
console.log("original order:\n ", placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log(["alphabetical order:\n", ...placesToVisit].sort());
// Show that the original array is still in its original order
console.log("original order:\n", placesToVisit);
// Print the array in reverse alphabetical order without modifying the original list
console.log(["reverse alphabetical order:\n ", ...placesToVisit].sort().reverse());
// Show that the original array is still in its original order
console.log("original array is still in its original order:/n", placesToVisit);
// Reverse the order of your list
placesToVisit.reverse();
console.log("Reverse:\n", placesToVisit);
// Reverse the order of your list again to return to the original order
placesToVisit.reverse();
console.log("Reverse the order of your list again:\n", placesToVisit);
// Sort your array so it's stored in alphabetical order
placesToVisit.sort();
console.log("stored in alphabetical order:\n", placesToVisit);
// Sort to change your array so it's stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("stored in reverse alphabetical order:\n", placesToVisit);
//   Question 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items. 
// Create an array of famous mountains
let mountains = [
    "Mount Everest",
    "K2",
    "Matterhorn",
    "Denali",
    "Mount Kilimanjaro",
];
for (const mountain of mountains) {
    console.log(mountain);
}
;
let cities = [
    {
        name: "New York",
        country: "United States",
        population: 8398748,
    },
    {
        name: "Paris",
        country: "France",
        population: 2140526,
    },
    {
        name: "Tokyo",
        country: "Japan",
        population: 13929286,
    },
    {
        name: "Sydney",
        country: "Australia",
        population: 5312163,
    },
];
// Print information about each city
console.log("List of Famous Cities:");
for (const city of cities) {
    console.log(`City: ${city.name}`);
    console.log(`Country: ${city.country}`);
    console.log(`Population: ${city.population}`);
    console.log("-----------");
}
//  Question 22
/**Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program. */
let myArray = [1, 2, 3, 4, 5];
console.log("invalid index:", myArray[15]);
console.log("valid index", myArray[2]);
// Question 23
/**Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
let car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False
// Test 3
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // True
// Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
// Test 5
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru'); // True
// Test 6
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False
// Test 7
console.log("Is car < 'volvo'? I predict True.");
console.log(car < 'volvo'); // True (Comparison based on lexicographic order)
// Test 8
console.log("Is car > 'zebra'? I predict False.");
console.log(car > 'zebra'); // False (Comparison based on lexicographic order)
// Test 9
console.log("Is car.length == 6? I predict False.");
console.log(car.length == 6); // False (The length of 'subaru' is 6)
// Test 10
console.log("Is car.length != 5? I predict True.");
console.log(car.length != 5); // True (The length of 'subaru' is not equal to 5)
// Question 24
/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
// Tests for equality and inequality with strings
let fruit = 'apple';
let color = 'red';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // True
console.log("Is color != 'green'? I predict True.");
console.log(color != 'green'); // True
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana'); // False
console.log("Is color != 'red'? I predict False.");
console.log(color != 'red'); // False
// Tests using the lower case function
let text = 'Hello, World!';
console.log("Is text.toLowerCase() == 'hello, world!'? I predict True.");
console.log(text.toLowerCase() == 'hello, world!'); // True
// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2); // True
console.log("Is num1 < num2? I predict False.");
console.log(num1 < num2); // False
console.log("Is num1 >= num2? I predict True.");
console.log(num1 >= num2); // True
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2); // False
// Tests using "and" and "or" operators
let isSunny = true;
let isWarm = true;
console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm); // True
console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm); // True
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry', 'kiwi'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana')); // True
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape')); // False
// Test whether an item is not in an array
let vegetables = ['carrot', 'broccoli', 'spinach'];
console.log("Is 'potato' not in the vegetables array? I predict True.");
console.log(!vegetables.includes('potato')); // True
console.log("Is 'broccoli' not in the vegetables array? I predict False.");
console.log(!vegetables.includes('broccoli')); // False
// Question 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
function alienColor(color) {
    let alien_color = "";
    if (alien_color === 'green') {
        console.log("Congratulations! You just earned 5 points.");
    }
    return alien_color;
}
console.log(alienColor("yellow"));
// Question 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
function alcolor(color) {
    let alien_color = "";
    if (alien_color === 'green') {
        console.log("Congratulations! You just earned 5 points.");
    }
    else {
        console.log("player just earned 10 points.");
    }
    return alien_color;
}
console.log(alcolor("yellow"));
// Question 27
// 
// Question 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
const age = 30; // Change the age to test different scenarios
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// question 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/
// Create an array of your three favorite fruits
let favorite_fruits = ['apple', 'banana', 'strawberry'];
// Check for specific fruits in the array
if (favorite_fruits.includes('banana')) {
    console.log('You really like bananas!');
}
if (favorite_fruits.includes('apple')) {
    console.log('You really like apples!');
}
if (favorite_fruits.includes('kiwi')) {
    console.log('You really like kiwis!');
}
else {
    console.log('Kiwis are not in your list of favorite fruits.');
}
if (favorite_fruits.includes('strawberry')) {
    console.log('You really like strawberries!');
}
if (favorite_fruits.includes('orange')) {
    console.log('You really like oranges!');
}
else {
    console.log('Oranges are not in your list of favorite fruits.');
}
// Question 30
/**Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 */
// Create an array of usernames
let usernames = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
// Loop through the array and print greetings
for (const username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// Question 31
/**No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
const users = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
// Check if the list of users is empty
if (users.length === 0) {
    console.log('We need to find some users!');
}
else {
    // Loop through the array and print greetings
    for (const username of users) {
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
