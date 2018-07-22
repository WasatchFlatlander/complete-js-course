mark = {
    name : 'Mark',
    mass : 180,
    height : 1.8,
    updateBmi : function(){
        return this.bmi = this.mass / this.height^2;
    }
};

john = {
    name : 'John',
    mass : 179,
    height : 1,
    updateBmi : function(){
        return this.bmi = this.mass / this.height^2;
    }
};



if(mark.updateBmi() === john.updateBmi()){
    console.log('Equally Fatty.');
}else if(mark.bmi > john.bmi()){
    console.log('Mark is a fatty.');
}else{
    console.log('John is a fatty.');
}
    
