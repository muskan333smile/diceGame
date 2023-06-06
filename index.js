
var random1 = Math.random();
random1 = random1 * 6;
random1 = Math.floor(random1)+1;

var first = "images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",first);

var random2 = Math.random();
random2 = random2 * 6;
random2 = Math.floor(random2)+1;

var second = "images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",second);


if(random1>random2)
{
    document.querySelector("h1").innerHTML = "player 1 win ❤️"; 
}
else if(random1<random2)
    {
        document.querySelector("h1").innerHTML="player 2 win ❤️";
    }
    else{
        document.querySelector("h1").innerHTML="game tie";
    }
