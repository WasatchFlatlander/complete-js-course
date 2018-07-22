(function(){
    scoreCounter = function(){
        var score = 0;
        return function(lastAnswerCorrect){
            score += lastAnswerCorrect;
            console.log('-----SCORE:'+score+'-----');
        }
    }

    var Question = function(questionPrompt, answers, correctAnswer){
        this.questionPrompt = questionPrompt;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function(){
        console.log(this.questionPrompt);
        for(var i=0; i<this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.evaluateAnswer = function(answer){
        if(answer === this.correctAnswer){
            console.log('Correct Answer!');
           ;
        }else{
            console.log('Incorrect Answer!');
        }
        return answer === this.correctAnswer;
    }

    takeQuiz = function(quizQuestions){
        var updateScore = scoreCounter();
        while(true){
            var questionIndex = Math.floor(Math.random() *questions.length);
            var curQuestion = quizQuestions[questionIndex]; 
            curQuestion.displayQuestion();
            var answer = prompt('Type the index of the correct answer or \'exit\' to quit');
            if(answer === 'exit'){
                console.log('Quiz Exitted');
                break;  
            } 
            var answerCorrect = curQuestion.evaluateAnswer(parseInt(answer));
            updateScore(answerCorrect);    
        }    
    }
    
    q1 = new Question('Is Javascript Cool?', ['Yes','No, It Sucks'], 0);
    q2 = new Question('What is your favorite color?', ['Red','Blue','Orange'],2);
    q3 = new Question('Who is the smartest in the family?', ['Josh','Hosanna','Ellianna','Madeline','Jackson'],4);
    questions = [q1,q2,q3];
    takeQuiz(questions);
    
}());