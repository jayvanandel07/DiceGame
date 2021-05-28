var randomint1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomint1+".png");

var randomint2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomint2+".png");

if (randomint1>randomint2){
    document.querySelector("h1").textContent="Player 1 Won";
    document.querySelector(".player-1 p").textContent="Player 1 👑";
}

else if (randomint1<randomint2) {
    document.querySelector("h1").textContent="Player 2 Won";
    document.querySelector(".player-2 p").textContent="Player 2 👑";
}

else{
    document.querySelector("h1").textContent="DRAW";
    
}