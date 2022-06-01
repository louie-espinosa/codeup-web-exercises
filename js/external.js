"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var userFaveColor = prompt("What's your favorite color?");
alert("Hey, " + userFaveColor + "'s my fave color too!");

var wastedMoney = 3;
var mer = prompt("please rate The little mermaid from 1 to 5")*wastedMoney;
var bB = prompt("please rate Brother Bear from 1 to 5")*wastedMoney;
var herc = prompt("please rate Hercules from 1 to 5")*wastedMoney;
var spent = mer + bB + herc;
alert("Youve wasted "+ spent + " dollars!");

var wages = 380;
var google = prompt("How many hours did you grind at Google this week?")*(wages + 20);
var amazon = prompt("How many hours did you grind at Amazon this week?")*wages;
var faceBook = prompt("How many hours did you grind at Facebook this week?")*(wages - 30);
var weeklyWage = google + amazon + faceBook;
alert("Youve earned " +weeklyWage);

var enrolled = confirm("Is the class still available?") && confirm("Does the class schedule create a conflict?");
alert("You are enrolled!" + enrolled);

var offerStillStands = confirm("Are you buying more than two items?") && confirm("Has the offer expired?") || confirm("Are you a Premium member?");
alert("Enjoy your bonus! " + offerStillStands);

