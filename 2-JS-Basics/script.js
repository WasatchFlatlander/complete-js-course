/*************************
*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

//Variable Naming Rules

job = 'Teacher';
console.log(job);


// Type Coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old. Job:' + job + ' MarriageStatus:' + isMarried);

// Variable Mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' years old. Job:' + job + ' MarriageStatus:' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);


// Math Operators
var curYear, yearJohn, yearMark;
var ageJohn, ageMark;
ageJohn = 28;
ageMark = 33;
curYear = 2020;
yearJohn = curYear - 28;
yearMark = curYear - 33;

console.log(yearJohn);
console.log(curYear + 2);
console.log(curYear * 2);
console.log(curYear / 2);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log('Is John Older? ' + johnOlder);

// typeof operator
console.log('Type of johnOlderVar:' + typeof(johnOlder));
console.log('Type of ageJohn:' + typeof(ageJohn));





//operator precidence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;

console.log('Is John Come of Age? ' + isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var averageAge = (ageJohn + ageMark) / 2;

console.log('Average age John/Mark: ' + averageAge);

// Multiple assignments
var x,y;
x = y = (3+5)*4 - 6; //26
console.log(y)

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
console.log(++x);


// if else statements

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married!')
}else{
    console.log(firstName + ' is single!')
}

var isMarried = true;
if(isMarried){
    console.log(firstName + ' is married!')
}else{
    console.log(firstName + ' is single!')
}


var firstName = 'John';
var age = 16;

if(age < 13){
    console.log(firstName + ' is a boy');
}else if(age >= 13 && age < 20){
    console.log(firstName + ' is a teenager');
}else if(age >= 20 && age < 30){
    console.log(firstName + ' is a young man');
}else{
    console.log(firstName + ' is a man');
}

// Ternary(conditional) operator

var firstName = 'John';
var age = 22;

//age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = (age >= 18) ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);


// switch statement
var job = 'driver';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' is a bum.');
}

switch(true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}

// Falsy values: undefined, null, 0, '', NaN
// truthy values: not falsy;

var height = 23;
if(height || height === 0){
    console.log('Variable is defined.');
}else{
    console.log('Variable is NOT defined.');
}

// Equality operators
if(height == '23'){
    console.log('The == operator does type coercion');
}
if(height === '23'){
    console.log('The == operator does type coercion');
}




// functions

function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);


function yearsUntilRetirement(birthYear, firstName){
    var age = calculateAge(birthYear);
    var yearsToRetirement = 65-age;
    if(yearsToRetirement > 0){
        console.log(firstName + ' has ' + yearsToRetirement + ' years to retirement.');        
    }else{
        console.log(firstName + ' is on the beach.');              
    }

}




// Function Statements and Expressions


//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids to code!';
            break;
        case 'driver':
            return firstName + ' drives a cab in lisbon.';
            break;
        case 'designer':
            return firstName + ' designs beautiful websites.';
            break;
        default:
            return firstName + ' is a bum.';
    }
}
    
console.log(whatDoYouDo('teacher','Josh'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));


var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
console.log(names.length);

//mutated data
names[1] = 'Ben';
console.log(names[1]);
names[names.length] = 'Mary';
console.log(names.length);

// different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

// array functions
john.push('Blue');
john.unshift('Mr.');
john.pop();
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);
console.log(john.indexOf(1990));
console.log(john.indexOf(23));

// Objects and properties

// Difference between objects and arrays (order does not matter)

// object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new object syntaxt
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);



var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
}

john.calcAge();
console.log(john);



// Loops and Iteration

for(var i = 0; i < 10; i++){
    console.log(i);
}

var john = ['John','Smith',1990,'designer',false];
for(var i=0; i<john.length; i++){
    console.log(john[i]);
}

var i = 0
while(i < john.length){
    console.log(john[i]);
    i++;
}
*/

var john = ['John','Smith',1990,'designer',false];
for(var i=0; i<john.length; i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}


console.log('Reverse #1')
for(var i=0; i<john.length; i++){
    console.log(john[john.length - i - 1]);
}

console.log('Reverse #2')
for(var i=john.length-1; i>=0; i--){
    console.log(john[i]);
}