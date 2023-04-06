//Check Answer Function
/* This Function Carries Out Two Tasks - Checks if User Answer is Correct, Adds Data to the PlayerAreaObject */
function CheckAnswer(playArea, answerInput){
    /* Worm */
    //This Block of Code Appends the string "Correct" to the score Array declared in scrambleplay.html if the Answer Matches
    if(playArea.value == 'o r w m' && answerInput.value == 'worm'){
        console.log("You Are Correct");
        PlayAreaObject.score.push('Correct');
    //This Block of Code Appends the string 'Incorrect' to the score Array declared in scrambleplay.html if the Answer Does not Match
    }else if(playArea.value == 'o r w m' && answerInput.value != 'worm') {
        console.log("You Are Incorrect");
        PlayAreaObject.score.push('Incorrect');   
    };

    /* Check Stream*/
    if(playArea.value == 'a t r e s m' && answerInput.value == 'stream'){
        console.log("You Are Correct");
        PlayAreaObject.score.push('Correct')
    }else if(playArea.value == 'a t r e s m' && answerInput.value != 'stream'){
        console.log("You Are Incorrect");
        PlayAreaObject.score.push('Incorrect');
    }




    //Adds Data to the PlayerAreaObject
	function appendData(){
		PlayAreaObject.userAnswers.push(answerInput.value);
		PlayAreaObject.playAreaOutput.push(playArea.value);

		/* To show that we have access to the PlayAreaObject and PlayerData*/
		console.log(`List of Previous Words Output: ${PlayerData[0].playAreaOutput}`);
		console.log(`List of Player Answers: ${PlayAreaObject.userAnswers}`);
		console.log(`Array of Player Score: ${PlayerData[0].score}`);
			
	}

    //Calls Function
    appendData();

    //This Block of Code Increases the Score by 1 for each 'Correct' that is in the array score declared in PlayAreaObject
    for(i=0; i<PlayAreaObject.score.length; i++){
        if(PlayAreaObject.score[i] == 'Correct'){
            score.textContent++;
        }
    }
    
};