"use strict";
let taxPercent;
let totalPay;
let hours;
let hourlyWage;
let normalWeekHours = 40;
let overtimeRate = 1.5;
let overtimePay;
let paycheck;

// let incorrectInput = true;
// while(incorrectInput) {
// 	hours = prompt("What are your hours?");
// 	try{
// 		if(hours == "") throw "No input.";
// 		hours = parseInt(hours);
// 		if(Number.isNaN(hours))throw "Your input must be a number greater than 0.";
// 		if(hours <= 0)throw "Your input must be a number greater than 0.";
// 		incorrectInput = false;
// 	}catch(err) {
// 		alert(err);
// 	}
// }
// incorrectInput = true;

// while(incorrectInput) {
// 	hourlyWage = prompt("what is your hourly wage?");
// 	try{
// 		if(hours == "") throw "No input detected.";
// 		hourlyWage = parseInt(hourlyWage);
// 		if(Number.isNaN(hourly)) throw "Your input must be a number.";
// 		if(hours <= 0) throw "Your input must be greater than 0.";
// 		incorrectInput = false;
// 	}catch(err) {
// 		alert(err);
// 	}
// }

hours = determineHoursWorked();
hourlyWage = determineHourlyWage();
console.log(hours);
console.log(hourlyWage);

taxPercent = determineTaxPercentage(hourlyWage);
overtimePay = calculateOvertimePay(hours, hourlyWage, normalWeekHours, overtimeRate);
totalPay = calculateTotalPay(hours, hourlyWage, overtimePay).toFixed(2);
paycheck = calculatePaycheck(totalPay, taxPercent).toFixed(2);

console.log(`You made $${totalPay} before tax, and after taxes your paycheck is $${paycheck}. (deng govment)`);
alert(`You made $${totalPay} before tax, and after taxes your paycheck is $${paycheck}. (deng govment)`);




function determineHoursWorked() { 
	let hours;

	hours = prompt("What are your hours?");
	hours = parseInt(hours);

	while(hours < 0 || Number.isNaN(hours)){
		hours = prompt("Incorrect input. Your hours must be a positive number.");
		hours = parseInt(hours);
	}	
	return hours;
}

function determineHourlyWage() { 
	let hourlyWage;

	hourlyWage = prompt("What is your hourly wage?");
	hourlyWage = parseInt(hourlyWage);

	while(hourlyWage < 0 || Number.isNaN(hourlyWage)){
		hourlyWage = prompt("Invalid input. You must have a positive number for your hourly wage.");
		hourlyWage = parseInt(hourlyWage);
	}
	return hourlyWage;
}

function determineTaxPercentage(hourlyWage) {
	let stateTax;
	let governmentTax;
	let taxPercent;
	if (hourlyWage * 40 * 52 <= 11090) {
		stateTax = .04;
	} else if(hourlyWage * 40 * 52 <= 22190) {
		stateTax = .0584;
	} else if(hourlyWage * 40 * 52 <= 244270) {
		stateTax = .0627;
	} else {
		stateTax = .0765;
	}

	if (hourlyWage * 40 * 52 <= 9325) {
		governmentTax = .1;
	} else if(hourlyWage * 40 * 52 <= 37950) {
		governmentTax = .15;
	} else if(hourlyWage * 40 * 52 <= 91900) {
		governmentTax = .25;
	} else if(hourlyWage * 40 * 52 <= 191650) {
		governmentTax = .28;
	} else if(hourlyWage * 40 * 52 <= 416700) {
		governmentTax = .33
	} else if(hourlyWage * 40 * 52 <= 418400) {
		governmentTax = .35
	} else {
		governmentTax = .396;
	}
	taxPercent = governmentTax + stateTax;

	return  taxPercent;
}

function calculateOvertimePay(hours, hourlyWage, normalWeekHours, overtimeRate) {
	if(hours > normalWeekHours) {
		let overtime = hours - normalWeekHours;
		let overtimePay = overtime * hourlyWage * overtimeRate;

		return overtimePay;
	}else {

		return 0;
	}
}

function calculateTotalPay(hours, hourlyWage, overtimePay) {
	let totalPay = hours * hourlyWage + overtimePay;
	return totalPay;
}

function calculatePaycheck(totalPay, taxPercent){
	let paycheck = totalPay * (1 - taxPercent);
	return paycheck;
}