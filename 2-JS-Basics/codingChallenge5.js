john = {
    bills : [124,48,268,180,42],
    calcTips : function(){
        this.tips = [];
        this.totals = [];
        for(var i=0; i<this.bills.length; i++){
            var tipPercentage = 0;
            if(this.bills[i] < 50){
                tipPercentage = 0.2;
            }else if(this.bills[i] < 200){
                tipPercentage = 0.15;
            }else{
                tipPercentage = 0.1;
            }
            this.tips.push(tipPercentage*this.bills[i]);
            this.totals.push(this.tips[i]+this.bills[i]);
        }
    }
}

mark = {
    bills : [77,5,110,45],
    calcTips : function(){
        this.tips = [];
        this.totals = [];
        for(var i=0; i<this.bills.length; i++){
            var tipPercentage = 0;
            if(this.bills[i] < 100){
                tipPercentage = 0.2;
            }else if(this.bills[i] < 300){
                tipPercentage = 0.1;
            }else{
                tipPercentage = 0.25;
            }
            this.tips.push(tipPercentage*this.bills[i]);
            this.totals.push(this.tips[i]+this.bills[i]);
        }
    }
}

function getAverageTip(tips){
    var totalTips = 0
    for(var i=0; i<tips.length; i++){
        totalTips += tips[i];
    }
    return totalTips / tips.length;
}

john.calcTips();
mark.calcTips();
console.log('John Bills/Tips/Totals')
console.log(john.bills);
console.log(john.tips);
console.log(john.totals);
console.log('Mark Bills/Tips/Totals')
console.log(mark.bills);
console.log(mark.tips);
console.log(mark.totals);

john.avgTip = getAverageTip(john.tips);
mark.avgTip = getAverageTip(mark.tips);
console.log('John\'s Avgerage Tip:',john.avgTip)
console.log('Mark\'s Avgerage Tip:',mark.avgTip)

if(john.avgTip > mark.avgTip){
   console.log('John is more generous.');
}else if(john.avgTip < mark.avgTip){
   console.log('Mark is more generous.');
}else{
   console.log('Both equally generous.');    
}