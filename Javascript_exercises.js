/*Esercizi JavaScript

ES. 1: Tell the dog age in human years.*/

var dogAge = prompt("What's your dog age?");
var humanAge = ((dogAge-2) * 4) + 21;
alert("Your dog human age is: " + humanAge);

//OPPURE:

var dogAge = prompt("What's your dog age?");
alert("Your dog human age is: " + (((dogAge-2) * 4) + 21));

//OPPURE:

alert("Your dog human age is: " + ((( prompt("What's your dog age?")-2) * 4) + 21));


//ES. 2: Greet the person with the first name letter capitalised.

var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperChaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowerCase();
var capitalisedName = upperChaseFirstChar + restOfName;
alert("Hello, " + capitalisedName);

//OPPURE:

var name = prompt("What is your name?" (alert("Hello, " + name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase())));


//ES. 3: Assume you will live until 90 years old, and calculate how many days, weeks and months you have left.

function lifeInWeeks(age) {

/************Don't change the code above************/

var resultDays = ((365*90)-(365*age));
var resultWeeks = ((52*90)-(52*age));
var resultMonths = ((12*90)-(12*age));
console.log("You have " + resultDays + " days, " + resultWeeks + " weeks, " + resultMonths + " months left.");
/*************Don't change the code below**********/
}

lifeInWeeks(90);

//OPPURE:

function lifeInWeeks(age) {

/************Don't change the code above************/

var yearsRemaining = 90 - age;
var days = yearsRemaining * 365;
var weeks = yearsRemaining * 52;
var months = yearsRemaining * 12;
console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
/*************Don't change the code below**********/
}

lifeInWeeks(90);


/*ES. 4: Calculate the Body Mass Index without calling the function.

Create your function below this line.
The first parameter should be the weight and the second should be the height.*/

function bmiCalculator(weight, height) {
    var bmiResult = Math.round((weight/Math.pow(height,2)));
    return bmiResult;
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal 20 when it's rounded to the nearest whole number.

*/
