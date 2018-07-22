var markWeight, johnWeight;
var markHeight, johnHeight;
var markBmi, johnBmi;
var markMoreOutOfShape;

markWeight = prompt('Marks Weight')
markHeight = prompt('Marks Height')
johnWeight = prompt('John Weight')
johnHeight = prompt('John Height')


markBmi = markWeight / markHeight^2;
johnBmi = johnWeight / johnHeight^2;

console.log('Mark BMI: ' + markBmi);
console.log('John BMI: ' + johnBmi);

if(markBmi > johnBmi){
    console.log('Mark is a Fatty');
}else{
    console.log('John is a Fatty');
}    