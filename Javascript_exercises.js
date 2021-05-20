//Esercizi JavaScript

//ES. 1: Tell the dog age in human years.
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

//ES. 5: Build a random Love calculator
prompt("What is your name?");
prompt("What is their name?");
var loveScore = Math.random();
loveScore = Math.floor(loveScore*100) + 1; //1-100
if (loveScore > 70) {
    alert("Your match is " + loveScore + "%" + " You really love each other!");
} else {
    alert("Your match is " + loveScore + "%");
}

//ES. 6: Add interpretation to BMI Calculator
function bmiCalculator (weight, height) {
    var interpretation = Math.round((weight/Math.pow(height,2)));
    if (interpretation < 18.5) {
        interpretation = "Your BMI is " + interpretation + ", so you are underweight.";
    } else if (18.5 <= interpretation && interpretation <= 24.9 ) {
        interpretation = "Your BMI is " + interpretation + ", so you have a normal weight.";
    } else if (24.9 < interpretation) {
        interpretation = "Your BMI is " + interpretation + ", so you are overweight.";
    }
    return interpretation;
}
bmiCalculator(60,2);

//ES. 7: Leap years verificator
function isLeap(year) {
    if (year%4 !== 0 || (year%4 === 0 && year%100 === 0 && year%400 !== 0)) {
        return "Not leap year.";
    }
    else if ((year%4 === 0 && year%100 !== 0) || (year%4 === 0 && year%100 === 0 && year%400 === 0)) {
        return "Leap year.";
    }
}

//ES. 8: Use arrays to verify if you are in the guest list or not
var guestList = ["Anna", "Lucia", "Mike", "Gaia"];
var name = prompt("What is your name?");
if (guestList.includes(name)) {
    alert("Welcome " + name.slice(0,1).toUpperCase() + name.slice(1,name.lenght).toLowerCase() + "!");
} else {
    alert("Sorry, maybe next time.");
}

//ES. 9: FizzBuzz
var output = [];
var count = 1;
function fizzBuzz() {
    output.push(count);
    count++;
    if (count%3 === 0 && count%5 === 0) {
        output.push("FizzBuzz");
        count++;
    } else if (count%3 === 0) {
       output.push("Fizz");
       count++;
    } else if (count%5 === 0) {
        output.push("Buzz");
        count++;
    }
    console.log(output);
}
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

//ES. 10: While loop applied to FizzBuzz
var output = [];
var count = 1;
function fizzBuzz() {

    while (count <= 100) {
    if (count%3 === 0 && count%5 === 0) {
        output.push("FizzBuzz");
    } else if (count%3 === 0) {
       output.push("Fizz");
    } else if (count%5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    }
    console.log(output);
}

//ES. 11: For loop applied to FizzBuzz
var output = [];
function fizzBuzz() {

    for (var count = 1; count < 101; count++) {
    if (count%3 === 0 && count%5 === 0) {
        output.push("FizzBuzz");
    } else if (count%3 === 0) {
       output.push("Fizz");
    } else if (count%5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    }
    console.log(output);
}

//ES. 12: Random people selector from array list
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {

/******Don't change the code above*******/

    //Write your code here.
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
/******Don't change the code below*******/
}

//ES. 13: Bottles Of Beer Song: While + If
var numberOfBottles = 5;
var totalBottles = 5;
function lyrics () {
while (numberOfBottles > 0) {
    if(numberOfBottles === 1) {
    console.log(numberOfBottles + " bottle of beer bottles of beer on the wall, " + numberOfBottles + " bottle of beer. Take one down and pass it around, " + (numberOfBottles-1) + " bottles of beer on the wall.");
    numberOfBottles--;
    } else {
    console.log(numberOfBottles + " bottles of beer bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take one down and pass it around, " + (numberOfBottles-1) + " bottles of beer on the wall.");
    numberOfBottles--;
    }
}
console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more," + totalBottles + " bottles of beer on the wall.");
}

//ES. 14: Fibonacci function
function fibonacciGenerator (n) {
var output = [ ];
    if (n > 0) {
        if (n === 1) {
            output = output.push(0);
        } else if ( n === 2) {
            output = output.push(0,1);
        } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length-2] + output[output.length-1]);
            }
        }
        return output;
    }
}
output = fibonacciGenerator();
console.log(output);

//OPPURE:

function fibonacciGenerator (n) {
    var output = [ ];
    if (n > 0) {
        if (n === 1) {
            output = [0];
        } else if ( n === 2) {
            output = [0, 1];
        } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length-2] + output[output.length-1]);
            }
        }
        return output;
    }
}
output = fibonacciGenerator();
console.log(output);
