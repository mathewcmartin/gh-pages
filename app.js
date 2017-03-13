'use strict';

var middleName = prompt('Can you guess if my middle name is Charles? \(Yes or No\)');
middleName.toLowerCase();
if (middleName === 'no') {
  alert('Wow, you guessed that my middle name is not Charles. It\'s actually Clifford.');
  console.log(middleName);
} else {
  alert('You are right, my middle name is actually Clifford.');
  console.log(middleName);
}
var interests = prompt('Can you guess if I\'m interested in coding?');
if (interests.toLowerCase() === 'yes') {
  alert('Nice, you guessed my primary interest is coding.');
  console.log(interests);
} else {
  alert('Actually, my primary interest is coding.');
  console.log(interests);
}
var interestingFact = prompt('Do you think I attended more than 5 public schools thru High School?');
if (interestingFact.toLowerCase() === 'yes') {
  alert('You are good! I did attend more than 5 schools. I actually attended 6 schools as a \'military brat\' growing up.');
  console.log(interestingFact);
} else {
  alert('Nope, it was 6 public schools. I was a military brat and moved quite a lot growing up.');
  console.log(interestingFact);
}
var careerGoals = prompt('Do you think my ideal job is that as a Cartographer?');
if (careerGoals.toLowerCase() === 'yes') {
  alert('You must have a crystal ball! Yep, being a Cartographer is in fact my career goal');
  console.log(careerGoals);
} else {
  alert('Well almost... my career goal is in fact to be a Cartographer.');
  console.log(careerGoals);
}
var focus = prompt('Is Python the computer language you think I\'m focusing my studies?');
if (focus.toLowerCase() === 'yes') {
  alert('Impressive, you are on the money!');
  console.log(focus);
} else {
  alert('Actually, I\'m focusing my study on Python, as it is apparently the current standard in the GIS industry');
  console.log(focus);
}
var failedAttempts = [];
var computerChoice = Math.floor((Math.random() * 10) + 1);
var guessNumber = prompt('Guess a number between 1 and 10.');
for (var i = 1; i < 4; i++) {
  if (guessNumber === null) {
    alert('You did not guess a number.');
    console.log(guessNumber);
    var guessNumber = prompt('Please guess a number.');
    alert(failedAttempts + ' was guessed already');
    continue;
} if (guessNumber === computerChoice) {
  alert('You guessed it!');
  console.log(guessNumber);
  alert(failedAttempts + ' was guessed already');
  break;
} else if (guessNumber < computerChoice) {
  alert('Try Again!');
  failedAttempts.push(guessNumber);
  alert(failedAttempts + ' was guessed already');
  var guessNumber = prompt('Please guess another number between ' + guessNumber + ' and 10');
  continue;
} else if (guessNumber > computerChoice) {
  alert('Try again! Pick another number between 1 and ' + guessNumber);
  failedAttempts.push(guessNumber);
  alert(failedAttempts + ' was guessed already');
  var guessNumber = prompt('Please pick another number between 1 and ' + guessNumber);
  continue;
}
}
var userAnswers = [];
var userGuess = prompt('Can you guess the state where I was born?');
userAnswers.push(userGuess);
for (var i = 1; i < 6; i++) {
  console.log(i);
  if (userGuess.toLowerCase() === 'california') {
    alert('You are good! I was in fact born in California.');
    console.log(userGuess);
    break;
  } else if (userGuess.toLowerCase() !== 'california') {
  alert('Sorry, try again!');
  console.log(userGuess);
  var userGuess = prompt('Guess another state please.');
  continue;
}
}
