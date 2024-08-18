//embedding in javascript
/*
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);
*/

//joining together two variables
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

//using a concatenation
/*
const button = document.querySelector("button");

function greet(){
    const name = prompt("What is your name");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
*/

/*
// concatenation using +
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name);

 better way of writing above
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`);
*/

//including expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%`;
console.log(output)

//multiline strings
const newline = `One day you finally knew
what you had to do, and began`;
console.log(newline);

//also can use /n
const newerline = `Oneday you finally knew/nwhat you had to do, and began`;
console.log(newerline);

//including quotes in strings
//const badQuotes = "She said "I think so!"";

//one common option is to use a different set of quotes
const goodQuotes1 = 'She said "I think so!"'
const goodQuotes2 = `She said "I'm not going in there!"`;

//other option is to use \
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

//numbers vs. strings
const name = "Front ";
const number = 242;
console.log(name + number);

//using Number() function
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

//using String() function
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);

//w3schools.com/js/js_methods.asp
//length property returns length of string
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = abc.length;
console.log(length);

//extracting string characters
//charAt()
let text = "HELLO WORLD";
let char = text.charAt(0); //0 is first position
console.log(char)

//at()
const web = "W3Schools";
let letter = web.at(2); //let letter = web.at[2]; also works
console.log(letter)


