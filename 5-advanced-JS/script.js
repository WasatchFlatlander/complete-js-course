// Function constructor

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2018-this.yearOfBirth);
    }
}

Person.prototype.calculateAge = function(){
    console.log(2018-this.yearOfBirth);
}
Person.prototype.lastName = 'Smith';


var john = new Person('John',1990,'teacher');
var jane = new Person('Jane',1969,'designer');
var mark = new Person('Mark',1948,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);
*/

// Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2018-this.yearOfBirth);
    }    
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
    name: { value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value:'designer'} 
});

// primatives vs objects
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//functions
console.log('FUNCTIONS');
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a,b){
    a = 30;
    b.city = 'San Francisco';
}

change(age,obj);
console.log(age);
console.log(obj);

*/

//Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = []
    for(var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018-el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67*el)); 
    }else{
        return -1;
    }
}

ages = arrayCalc(years,calculateAge);
isFullAges = arrayCalc(ages,isFullAge);
maxHeartRates = arrayCalc(ages,maxHeartRate);
console.log(years);
console.log(ages);
console.log(isFullAges);
console.log(maxHeartRates);
*/


/*
//Functions returning another function

//switch on job 
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you explain what UX design is?');
        };
    }else if(job === 'teacher'){
        return  function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var name = 'josh';
var job = 'teacher';
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var randomQuestion = interviewQuestion('ski bum');

teacherQuestion(name);
designerQuestion(name);
randomQuestion(name);
interviewQuestion('teacher')('JacksonRobert');

*/


//IIFE
/*
function game(){
    var score = Math.random()*10;
    console.log(score>=5);
}
game();

(function(goodLuck){
    var score = Math.random()*10;
    console.log(score>=5-goodLuck);
})(5);
*/

/*
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2018-yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

yearsToRetirementUs = retirement(62);
yearsToRetirementEuro = retirement(57);
yearsToRetirementUs(1980);
yearsToRetirementEuro(1980);

//switch on job 
function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you explain what UX design is?');
        }else if(job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        }else{
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

// lecture: bind, call and apply


/*

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + 
            this.name + ', I\'m  a ' + 
            this.job + ' and I\'m ' + 
            this.age + ' years old.')
        } else if( style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m  a ' + 
            this.job + ' and I\'m ' + 
            this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

//method borrowing
//call lets you set the this variable to different object
//john.presentation('formal','morning');
//john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly','afternoon'])
var johnFriendly = john.presentation.bind(john, 'friendly');
//Bind allows you to curry arguments to preset to make the function have less variables
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = []
    for(var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018-el;
}

function isFullAge(limit, el){
    return el >= limit;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67*el)); 
    }else{
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);
//Bind - copy of a function with a preset argument
var fullAgesJapan = arrayCalc(ages,  isFullAge.bind(this, 20));
console.log(ages);
console.log(fullAgesJapan);

*/

//Quiz Game Coding Challenge





(function(){
    // my special code
    logQuestionToConsole = function(questionPrompt, possibleAnswers){
        console.log(questionPrompt);
        for(var i=0; i<possibleAnswers.length; i++){
            console.log(i + ': ' + possibleAnswers[i]);
        }
    }

    evaluateAnswer = function(answer, correctAnswer){
        if(answer == correctAnswer){
            console.log('Correct Answer!');
            return 1;
        }else if(answer === 'exit'){
            console.log('Quiz Finished');
            return -1;
        }else{
            console.log('Incorrect Answer!');
            return 0;
        }
        return answer === correctAnswer;
    }

    question = function(questionPrompt, possibleAnswers, correctAnswer){
        return function(){
            logQuestionToConsole(questionPrompt, possibleAnswers);
            var answer = prompt(questionPrompt);
            var isCorrect = evaluateAnswer(answer, correctAnswer);
            return isCorrect;
        }
    }
    
    scoreCounter = function(){
        var score = 0;
        return function(lastAnswerCorrect){
            score += lastAnswerCorrect;
            console.log('-----SCORE:'+score+'-----');
        }
    }

    takeQuiz = function(questions){
        var updateScore = scoreCounter();
        while(true){
            var questionNumber = Math.floor(Math.random() *questions.length);
            var result = questions[questionNumber]()
            if(result === -1)
            {
                break;
            }else{
                updateScore(result);    
            }
        }
    }
    
    question1 = question('Is Javascript Cool?', ['Yes','No, It Sucks'], 0);
    question2 = question('What is your favorite color?', ['Red','Blue','Orange'],2);
    question3 = question('Who is the smartest in the family?', ['Josh','Hosanna','Ellianna','Madeline','Jackson'],4);

    questions = [question1,question2,question3];
//    questions[0]();
    takeQuiz(questions);
}());
