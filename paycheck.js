"use strict";
let stateTax;
let governmentTax;
let totalTax;
let paycheck;
let hours;
let hourlyWage;
let incorrectInput = true;
let overtime = 0;

// while(incorrectInput){
// 	hours = prompt("What are your hours?");
// 	try{
// 		if(hours == "") throw "No input.";
// 		hours = parseInt(hours);
// 		if(Number.isNaN(hours))throw "Your input must be a number greater than 0.";
// 		if(hours <= 0)throw "Your input must be a number greater than 0.";
// 		incorrectInput = false;
// 	}catch(err){
// 		alert(err);
// 	}
// }

hours = prompt("What are your hours?");
hours = parseInt(hours);

while(hours < 0 || Number.isNaN(hours)){
	hours = prompt("Incorrect input. Your hours must be a positive number.");
	hours = parseInt(hours);
}
console.log(hours);
hourlyWage = prompt("What is your hourly wage?");
hourlyWage = parseInt(hourlyWage);

while(hourlyWage < 0 || Number.isNaN(hourlyWage)){
	hourlyWage = prompt("Invalid input. You must have a positive number for your hourly wage.");
	hourlyWage = parseInt(hourlyWage);
}
console.log(hourlyWage);
if (hourlyWage * 40 * 52 <= 11090){
	stateTax = .04;
} else if(hourlyWage * 40 * 52 <= 22190){
	stateTax = .0584;
} else if(hourlyWage * 40 * 52 <= 244270){
	stateTax = .0627;
} else{
	stateTax = .0765;
}

if (hourlyWage * 40 * 52 <= 9325){
	governmentTax = .1;
} else if(hourlyWage * 40 * 52 <= 37950){
	governmentTax = .15;
} else if(hourlyWage * 40 * 52 <= 91900){
	governmentTax = .25;
} else if(hourlyWage * 40 * 52 <= 191650){
	governmentTax = .28;
} else if(hourlyWage * 40 * 52 <= 416700){
	governmentTax = .33
} else if(hourlyWage * 40 * 52 <= 418400){
	governmentTax = .35
} else{
	governmentTax = .396;
}

if (hours > 40){
	overtime = hours - 40;
	hours = 40;
}

totalTax = governmentTax + stateTax;

paycheck = (overtime * (hourlyWage * 1.5)) + (hours * hourlyWage) * (1 - totalTax);

paycheck = paycheck.toFixed(2);

console.log(`Your pay check will be $${paycheck} after tax.`);
alert(`Your pay check will be $${paycheck} after tax.`);