var randomNumber1 = Math.round(Math.random()*6);
var randomNumber2 =Math.round(Math.random()*6);
var player1 = prompt("Enter Player1 name:");
var player2 = prompt("Enter Player2 name:");

document.querySelector("p.P1").innerHTML = player1;
document.querySelector("p.P2").innerHTML = player2;

 if(randomNumber1 ===1)
 {
   document.querySelector("img.img1").setAttribute("src","images/dice1.png");
 }
 else if(randomNumber1 ===2)
 {
   document.querySelector("img.img1").setAttribute("src","images/dice2.png");
 }
 else if(randomNumber1 ===3)
 {
   document.querySelector("img.img1").setAttribute("src","images/dice3.png");
 }
 else if(randomNumber1 ===4)
 {
   document.querySelector("img.img1").setAttribute("src","images/dice4.png");
 }
 else if(randomNumber1 ===5)
 {
   document.querySelector("img.img1").setAttribute("src","images/dice5.png");
 }
 else
 {
   document.querySelector("img.img1").setAttribute("src","images/dice6.png");
 }

 if(randomNumber2 ===1)
 {
   document.querySelector("img.img2").setAttribute("src","images/dice1.png");
 }
 else if(randomNumber2 ===2)
 {
   document.querySelector("img.img2").setAttribute("src","images/dice2.png");
 }
 else if(randomNumber2 ===3)
 {
   document.querySelector("img.img2").setAttribute("src","images/dice3.png");
 }
 else if(randomNumber2 ===4)
 {
   document.querySelector("img.img2").setAttribute("src","images/dice4.png");
 }
 else if(randomNumber2 ===5)
 {
   document.querySelector("img.img2").setAttribute("src","images/dice5.png");
 }
 else
 {
   document.querySelector("img.img2").setAttribute("src","images/dice6.png");
 }

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = player1 + " Wins!🚩";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = player2 +" Wins!🚩";
}

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "It's a tie, try again."
}

document.querySelector(".btn").addEventListener("click",function(){
  location.reload();
})
