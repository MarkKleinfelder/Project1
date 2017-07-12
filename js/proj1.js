window.onload = function ready(){
	console.log("WE'RE RUNNING JAVASCRIPT");
	//clearInterval(beginTimer);
	
};


//--------------------START BUTTON---------------------//

function gameStart(){
  document.getElementById('showQ').classList.toggle('hideMe',false);
  document.getElementById('showQTwo').classList.toggle('hideMe', false);
  document.getElementById('answerBox').classList.toggle('hideMe',false);
  document.getElementById('answerBoxTwo').classList.toggle('hideMe',false);
  setTimeout(function(){
  	pOneBegin();
  }, 3000);
};




//--------------------PLAYER ONE BUTTONS AND SCORE-------------------------------//
var pOneScore = 0;
var pOneTime = 0;
var pOneTimer;
function pOneBegin(){
  setQ();
 pOneTimer = setInterval(function(){
		pOneTime++;
		document.getElementById('pOneTimer').innerHTML = pOneTime;
 }, 100);
}
function pOneStop(){
	clearInterval(pOneTimer);
	pOneScore = pOneTime;
	document.getElementById('pOneScore').innerHTML = pOneScore;
	console.log('button working');
};
//-------------------PLAYER TWO BUTTONS AND SCORE-----------------------------------//

var pTwoScore = 0;
var pTwoTime = 0;
var pTwoTimer;
function pTwoBegin(){
 pTwoTimer = setInterval(function(){
		pTwoTime++;
		document.getElementById('pTwoTimer').innerHTML = pTwoTime;
 }, 100);
}
function pTwoStop(){
	clearInterval(pTwoTimer);
	pTwoScore =pTwoTime;
	document.getElementById('pTwoScore').innerHTML = pTwoScore;
	console.log('button working');
};


 



//---------------------PLAYER ONE PLACES QUESTIONS IN BOX-------------------//

var questionOne = ['r', 'u', 'e'];
var pOneQ;

function setQ(){
	pOneQ=questionOne[0];
	document.getElementById('qBox').innerHTML = pOneQ;
	
};

//--------------------PLAYER ONE ANSWER CHECK--------------------------//


var answer = document.getElementById('answerBox');
var challenge = document.getElementById('qBox');

function checkAnswer(){
	console.log('checking answer. Thanks!');
	if(answer.value == pOneQ){
		console.log('Correct!');
		challenge.innerHTML = '';
		pOneStop();
		document.getElementById('answerBox').value = '';

	}else{
		console.log('wrong');
		document.getElementById('answerBox').value = '';
	}
};


//-----------------PLAYER TWO PLACES QUESION IN BOX----------//

var questionTwo = ['v', 'u', 'e'];
var pTwoQ;

function setQTwo(){
	pTwoQ=questionTwo[0];
	document.getElementById('qBoxTwo').innerHTML = pTwoQ;
	
};





//---------------PLAYER 2 ANSWER CHECK----------------// 

var answerTwo = document.getElementById('answerBoxTwo');
var challengeTwo = document.getElementById('qBoxTwo');

function checkAnswerTwo(){
	console.log('checking answer 2. Thanks!');
	if(answerTwo.value == pTwoQ){
		console.log('P2 Correct!');
		challengeTwo.innerHTML = '';
		document.getElementById('answerBoxTwo').value = '';

	}else{
		console.log('P2 wrong');
		document.getElementById('answerBoxTwo').value = '';
	}
};






/*
	pOneAns;

	function checkAnswer(){
	var pOneAns = document.getElementById('answer').value;

	console.log(pAnswer);
	if(answer.value == ''){
	alert('COMLETE THE CHALLENGE');
} else if{
	alert("Well Done");
	answer.value = 'pOneQ[0]';

}	
};
*/

