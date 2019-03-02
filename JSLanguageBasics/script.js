/* 
This lecture was about variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/***********************
 * Variable mutation and type coercion
 */
/*
 var firstName = 'John';
 var age = 28;

 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 // Variable mutation

 age = 'twenty eight';
 job = 'driver';

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt('What is his las Name?');
console.log(firstName + ' ' + lastName);
*/
/***********************
 * Basic operators
 */

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
var yearJohn = now - 28;
var yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now/10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
console.log(typeof x);
*/
/**************************
* Operator precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);
// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/ 2;
console.log(average);

//Multiple assignments

var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//More operators

x *= 2;
console.log(x);
x++ //increment
console.log(x);
*/ 

/***************
* Coding Challenge 1
*/
/*
var massMark = 85; // kg
var massJohn = 89; // kg
var heightMark = 1.75; // meters
var heightJohn = 1.87; // meters 

var bmiMark = massMark / (heightMark ** 2);

var bmiJohn = massJohn / (heightJohn ** 2);

var higherBMI = bmiMark > bmiJohn;

console.log(Math.round(bmiMark, 1));
console.log(Math.round(bmiJohn, 1));

console.log("Is Mark's BMI higher than John's?" + " " + higherBMI);
*/
/*******************
* End Code Challenge 1
*/

/**********
* If / Else Statements
*/
/*
var firstName = 'Ellis';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
*/
/*
var massMark = 85; // kg
var massJohn = 89; // kg
var heightMark = 1.75; // meters
var heightJohn = 1.87; // meters

var bmiMark = massMark / heightMark ** 2;
var bmiJohn = massJohn / heightJohn ** 2;
if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
}else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/*var higherBMI = bmiMark > bmiJohn;
console.log(Math.round(bmiMark, 1));
console.log(Math.round(bmiJohn, 1));

console.log("Is Mark's BMI higher than John's?" + " " + higherBMI);*/

/******************
* Boolean Logic
*/
/*
var firstName = 'Ellis';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.'); 
} else if(age >= 13 && age <20) { //Between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}
*/

/****************
* Ternary Operator and Switch Statements
*/
/*var firstName = 'Ellis';
var age = 16;
// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink); //Ternary operator
*/

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/ // If/Else that shows the same

// Switch Statement: switches a variable
/*var job = 'instructor'
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;

    default: 
        console.log(firstName + ' does something else.');
}

age = 22;
switch (true) {
    case age < 13:
        console.log(firstName + " is a boy.");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + " is a teenager.");
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + " is a man.");
}*/

/* Truthy and Falsy Values and equality Operators */

//falsy values: undefined, null, 0, "", NaN
//truthy values: NOT falsy values

/*var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

//Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}*/

/****************
* Coding Challenge 2
*/
/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + 'points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else{
    console.log('There is a draw');
}
*/
/*if (scoreJohn > scoreMike) {
    console.log('John\'s team with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw.');
}*/

/*****************
* Functions
*/

/*function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageEllis = calculateAge(1990);
var ageSahara = calculateAge(1948);
var ageCeela = calculateAge(1969);

console.log(ageEllis, ageSahara, ageCeela);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement =  65 - age;

    if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1990, 'Ellis');
yearsUntilRetirement(1948, "Sahara");
yearsUntilRetirement(1969, "Ceela"); */

/*****************
* Function Statements and Expressions
*/
//Function Declaration
//function whatDoYouDo(job, firstName) {}

//Function Expression
/*var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'Ellis'));
console.log(whatDoYouDo('designer', 'Tamsin'));
console.log(whatDoYouDo('driver', 'Clio'));*/
//JS expression always gives an immediate value
//JS statements perform actions

/*****************
* Arrays
*/
 //Initialize new array
/*var names = ['Tamsin', 'Ellis', 'Clio'];
var years = new Array(1990, 1969, 1948); 
console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'Ariadne';
names[5] = 'Ramses';
console.log(names);

//Different Data Types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
//Returns position of element in array
//Useful for finding out if element is in array

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'; 
console.log(isDesigner);*/

/*****
* Coding Challenge 3
*/


/*function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    }else if (bill >= 50 && bill < 200) {
        percentage = .15;
    }else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues); */

/*******
* Objects and Properties
*/

/*var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Tamsin', 'Ellis', 'Ella'],
    job: 'teacher',
    isMarried: false 
}; 
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

//Mutate or change properties 
john.job = 'designer';
john['isMarried']=true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);*/

/*****
* Objects and Methods
*/

/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Tamsin', 'Ellis', 'Ella'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear; 
    }
};

john.calcAge();
console.log(john); */

/*****
* Coding Challenge 4
*/

var mark = {
    fullName: 'Mark Stevens',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * 2);
        return this.bmi;
    }
};

var john = {
    fullName: 'John Franks',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * 2);
        return this.bmi;
    }
};



john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi); 
} else {
    console.log(john.fullName + mark.fullName + ' have the same BMI.')
};