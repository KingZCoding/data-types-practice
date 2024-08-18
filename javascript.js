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

//slicing strings
//slice(start, end)
//substring(start, end)
//substr(start, length)
// if first number - counts from end of string

let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(-12, -6);
console.log(part);

let str = "Apple, Banana, Kiwi";
let part2 = str.substring(7, 13);
console.log(part2);

let str2 = "Apple, Banana, Kiwi";
let part3 = str2.substr(7, 6); //can ommit second param to slice rest fo string
console.log(part3);

//converting text to Upper Case
let text3 = "Hello World!";
let text4 = text3.toUpperCase();
console.log(text4);

//converting to Lower Case
let text5 = "Hello World!";
let text6 = text5.toLowerCase();
console.log(text6);

//concat() joins two or more strings
let text7 = "Hello";
let text8 = "World";
let text9 = text7.concat(" ", text8);
console.log(text9);

//string trim
//trim() removes white space from both sides
//trimStart() removes from start
//trimEnd() removes from end
/*
let text1 = "   Hello World!    ";
let text2 = text1.trim();

let text1 = "   Hello World!    ";
let text2 = text1.trimStart();

let text1 = "   Hello World!    ";
let text2 = text1.trimEnd();

*/
/*
//padStart
let num = "5";
let padded = num.padStart(4,"0");
console.log(padded);

//padEnd
let num = "5";
let padded = num.padEnd(4,"0");
console.log(padded);
*/
//to pad a number turn it into a string first
let numb = 5;
let text10 = numb.toString();
let padded = text10.padEnd(4,"0");
console.log(padded);

//repeat a string
let text11 = "Hello world!";
let result = text11.repeat(2);
console.log(result);

//replace something in a string
let text12 = "Please visit Microsoft!";
let newText = text12.replace("Microsoft", "W3Schools");
console.log(newText);

// using /i makes case not matter
//let text = "Please visit Microsoft!";
//let newText = text.replace(/MICROSOFT/i, "W3Schools");

// using /g will replace all in the file
//let text = "Please visit Microsoft and Microsoft!";
//let newText = text.replace(/Microsoft/g, "W3Schools");









