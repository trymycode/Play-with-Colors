var numSquares = 6;
var colors = generateRandomColors(numSquares);
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
for(var i = 0 ; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			document.querySelector(".left").classList.toggle("displayN");
			document.querySelector(".right").classList.toggle("displayN");
			messageDisplay.textContent = "Correct!";
			audioWin();
			resetButton.textContent = "Wanna Play Again?"
			changeColors(clickedColor);
			document.querySelector("h1").style.backgroundColor = pickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "try again";
			resetButton.textContent = "Wanna Play Again?";

		}
	})
}

resetButton.addEventListener("click", function(){
	this.textContent = "New Colors";
	reset();
	audio();
	document.querySelector(".left").classList.add("displayN");
	document.querySelector(".right").classList.add("displayN");
})

// easy btn
easyBtn.addEventListener("click", function(){
	document.querySelector(".left").classList.add("displayN");
	document.querySelector(".right").classList.add("displayN");
	audio();
 easyBtn.classList.add("selected");
 hardBtn.classList.remove("selected");
 numSquares = 3;
 colors = generateRandomColors(numSquares);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for(var i = 0; i < squares.length; i++){
 	if(colors[i]){
 		squares[i].style.backgroundColor = colors[i];
 	}
 	else
 	{
 		squares[i].style.display = "none";
 	}
 }
});
// hard btn

hardBtn.addEventListener("click", function(){
	document.querySelector(".left").classList.add("displayN");
	document.querySelector(".right").classList.add("displayN");
 	easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
	numSquares = 6;
	audio();
	colors = generateRandomColors(numSquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	resetButton.textContent = "New Colors";
 	for(var i = 0; i < squares.length; i++)
 	 {
  		squares[i].style.backgroundColor = colors[i];
 		squares[i].style.display = "block";
 	
 	 }

});


function changeColors(color){
	for( var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i< num; i++){
		arr.push(randomColor());
	}

	return arr;

}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}

function reset(){
	
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i= 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	document.querySelector("h1").style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

function audio(){
	var audio = new Audio("water-drop.mp3");
	audio.currentTime = 0;
	audio.play();
	setTimeout(function(){
		audio.pause();
	}, 1000);
	
}

function audioWin(){
	var audio = new Audio("win.mp3");
	audio.currentTime = 0;
	audio.play();
	setTimeout(function(){
		audio.pause();
	}, 2000);
	
}