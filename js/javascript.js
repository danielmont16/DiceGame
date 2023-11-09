let randomNumber1 = 1+ Math.round((Math.random())* 5);
let newSource1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",newSource1);

let randomNumber2 = 1+ Math.round((Math.random())* 5);
let newSource2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",newSource2);  

if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}

