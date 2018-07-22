var johnAvg = (97 + 134+ 105) / 3;
var mikeAvg = (116 + 94 + 123) / 3;
var maryAvg = (97 + 134+ 105) / 3;

switch(true){
    case johnAvg > mikeAvg && johnAvg > maryAvg:
        console.log('John Wins!');
        break;
    case mikeAvg > johnAvg && mikeAvg > maryAvg:
        console.log('Mike Wins!');
        break;        
    case maryAvg > johnAvg && maryAvg > mikeAvg:
        console.log('Mary Wins!');
        break;        
    case maryAvg === johnAvg && johnAvg === mikeAvg:
        console.log('Threeway Tie!');
        break;        
    default:
        console.log('Twoway Tie!');
}