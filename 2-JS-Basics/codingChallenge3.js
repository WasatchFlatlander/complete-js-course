function calculateTip(amount){
    if(amount < 50){
        return Math.max(amount*0.2, 0);
    }else if(amount < 200){
        return amount*0.15
    }else{
        return amount*0.1;
    }
}

function getTotals(bills, tips){
    totals = []
    for(i = 0; i<bills.length; i++){
        totals.push(bills[i]+tips[i]);
    }
    return totals;
}

var bills = [124, 48, 268];
var tips = []
var totals = []

for(i=0; i < bills.length; i++){
    tips.push(calculateTip(bills[i]));
}
totals = getTotals(bills,tips);

console.log(bills)
console.log(tips);
console.log(totals);


