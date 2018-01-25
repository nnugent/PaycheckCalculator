"use strict";

let hours = prompt("What are your hours?");
while(hours <= 0){
	hours = prompt("Invalid input, you must have a positive number of hours.");
}
let hourlyWage = prompt("What is your hourly wage?");

while(hourlyWage <= 0){
	hourlyWage = prompt("Invalid input, your must have a positive number for your hourly wage.");
}
let stateTax;
let governmentTax;
let totalTax;

if (hourlyWage*40*52 <= 11090){
	stateTax = .04;
} else if(hourlyWage*40*52 <= 22190){
	stateTax = .0584;
} else if(hourlyWage*40*52 <= 244270){
	stateTax = .0627;
} else (hourlyWage*40*52 > 244270)
	stateTax = .0765;

if (hourlyWage*40*52 <= 9325){
	governmentTax = .1;
} else if(hourlyWage*40*52 <= 37950){
	governmentTax = .15;
} else if(hourlyWage*40*52 <= 91900){
	governmentTax = .25;
} else if(hourlyWage*40*52 <= 191650){
	governmentTax = .28;
} else if(hourlyWage*40*52 <= 416700){
	governmentTax = .33
} else if(hourlyWage*40*52 <= 418400){
	governmentTax = .35
} else (hourlyWage*40*52 > 418400)
	governmentTax = .396;


totalTax = governmentTax + stateTax;

let paycheck = (hours * hourlyWage) * (1 - totalTax);

paycheck = paycheck.toFixed(2);

console.log(`Your pay check will be $${paycheck} after tax.`);
alert(`Your pay check will be $${paycheck} after tax.`);