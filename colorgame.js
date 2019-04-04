var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var hard=document.querySelector("#hardbtn");
var easy=document.querySelector("#easybtn");
var pickedColor=pickColor();
 var colorDisplay=document.getElementById("text");
colorDisplay.textContent=pickedColor;
var messagetext=document.getElementById("message");

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i <squares.length; i++) 
	{
			squares[i].style.backgroundColor=colors[i];
		
		
			squares[i].style.display="block";
	}	
	h1.style.backgroundColor="#C39BD3";
});

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");

	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i <squares.length; i++) 
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}	
	h1.style.backgroundColor="#C39BD3";
	
});



resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	messagetext.textContent="";
	this.textContent="New Colors";
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i <squares.length; i++) 
	{
		squares[i].style.backgroundColor=colors[i];
	}	
	h1.style.backgroundColor="#C39BD3";
    });


for (var i = 0; i <squares.length; i++) {
squares[i].style.backgroundColor=colors[i];
squares[i].addEventListener("click",function(){
	if(this.style.backgroundColor===pickedColor)
	{
		
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor=pickedColor;
		}
		resetButton.textContent="Play Again!"
		h1.style.backgroundColor=this.style.backgroundColor;
		messagetext.textContent="Correct";
	}
	else
	{
		this.style.backgroundColor="#232323";
		messagetext.textContent="Try Again";
	}
});
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return(colors[random]);
}
function generateRandomColors(num)
{
	var arr=[];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}
function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}