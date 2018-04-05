'use strict';

function retrieveStringInput(...args) {
  let validInput = false;
  let userInput = "";
  let desiredLength = args;
  while(!validInput) {
    userInput = prompt("Please input a string with length >= "+desiredLength+".");
    if(userInput.length >= desiredLength) {
      validInput = true;
    } else {
      userInput = prompt("Please try again. Please enter a string with length >= "+desiredLength+".")
    }
   }
   return userInput;
}
/*
#1 Char Swap Function
*/
function CharSwap() {
  let input = retrieveStringInput(1);
  if(input.length > 1) {
    alert(input[input.length-1] + input.slice(1, input.length-1) + input[0]);
  } else {
    alert(input);
  }
}

CharSwap();

/*
#2 Hi String
*/
function HiString() {
  let input = retrieveStringInput(2);
  if((input[0] == 'H'|| input[0] == 'h')&& (input[1] == 'i' || input[1] == 'I')) {
    alert(input);
  } else {
    alert("Hi"+input);
  }
}

HiString();

/*
#3 Three Chars To Front
*/
function ThreeCharsToFront() {
  let input = retrieveStringInput(3);
  alert(input.slice(input.length-3, input.length) + input.slice(0,input.length-3));
}

ThreeCharsToFront();

/*
#4 Strings to Sentence
*/
function StringsToSentence() {
  let input = prompt("Please type a list of items seperated by commas.");
  input = input.trim();
  let inputArr = input.split(',');
  alert("I love "+ inputArr[0]+", "+ inputArr[1] + " are red, and " + inputArr[2] + " rock!");
}

StringsToSentence();

/*
#5 Upper or Lower
*/
function UpperOrLower() {
  let input = prompt("Please enter a string.");
  if(input.length < 3) {
    alert(input.toUpperCase());
  } else {
    alert(input.slice(0,3).toLowerCase() + input.slice(3));
  }
}

UpperOrLower();

/*
#6 Integer Swap
*/
function IntegerSwap() {
  let properInput = false;
  let input;
  let inputArr = [];
  while(!properInput) {
    input = prompt("Please enter a list of 1 or more integers, seperated by commas. (example: 2, 3)");
    input = input.split(',');
    for(let index of input) {
      inputArr.push(index.trim());
    }
    if(Number.isInteger(Number(inputArr[0]))) {
      properInput = true;
    } else {
      input = prompt("Please try again. Please enter a list of 1 or more integers seperated by commas. (example: 2, 3)");
    }
  }

  if(inputArr.length == 1) {
    alert(inputArr);
  } else {
    let oldFront = inputArr.splice(0, 1);
    let oldBack = inputArr.pop();
    inputArr.splice(0,0,oldBack);
    inputArr.splice(inputArr.length, 0, oldFront);
    alert(inputArr);
  }
}

IntegerSwap();

/*
#7Longest String
*/
function LongestString(){
  let input = prompt("Please enter a list of 1 or more strings, seperated by commas.");
  input = input.split(',');
  let inputArr = [];
  for(let index of input) {
    inputArr.push(index.trim());
  }
  let longest = inputArr.reduce(function (a, b) { return a.length > b.length ? a : b; });
  alert(longest);
}

LongestString();

/*
#8 Largest Even Number
*/
function LargestEvenNumber() {
  let input = prompt("Please enter a list of 1 or more numbers, seperated by commas.");
  input = input.split(',');
  let inputArr = [];
  for(let index of input) {
    inputArr.push(Number(index.trim()));
  }
  let evenArr = [];
  for(let index of inputArr) {
    if(index % 2 == 0) {
      evenArr.push(Number(index));
    }
  }
  alert(Math.max(...evenArr));
}

LargestEvenNumber();

/*
#9 Current Day Time
*/
function CurrentDayTime() {
  let now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes= now.getMinutes();
  let nightDay;
  if(hour < 13) {
    nightDay = "AM";
  } else {
    nightDay = "PM";
    hour = hour % 12;
  }
  alert("Today is "+day+".\nIt is "+hour+":"+minutes+nightDay+".");
}

CurrentDayTime();

/*
#10 Unlimited function
*/
function UnlimitedFunction(...args) {
  alert(args);
}

UnlimitedFunction("rogerRabbit", 23, {color:"red"}, "Mark Few", 29.99999999);
