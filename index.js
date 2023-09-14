var randomNmber1=Math.floor(Math.random()*6)+1;
var image1="./images/dice"+randomNmber1+".png";
var attri1=document.querySelectorAll("img")[0];
attri1.setAttribute("src",image1);




var randomNmber2=Math.floor(Math.random()*6)+1;
var image2="./images/dice"+randomNmber2+".png";
var attri2=document.querySelectorAll("img")[1];
attri2.setAttribute("src",image2);

if(randomNmber1>randomNmber2)
{
    document.querySelector("h1").innerText="🏆 Player 1 wins"
}
else if(randomNmber1<randomNmber2){
    document.querySelector("h1").innerText=" Player 2 wins 🏆"
    
}

else{
    document.querySelector("h1").innerText=" Draw"
}