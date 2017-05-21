

/*INFOGRAPHIC */

var onedrink = document.getElementById("one");
var twodrink = document.getElementById("two");
var threedrink = document.getElementById("three");
var fourdrink = document.getElementById("four");
var info = document.getElementById("infographic");
var rece = document.getElementById("bodyAll");



var dBut1 = document.getElementById("drinkglass1");
var dBut2 = document.getElementById("drinkglass2");
var dBut3 = document.getElementById("drinkglass3");
var dBut4 = document.getElementById("drinkglass4");



var backBut = document.getElementById("backbut");
var fOne = document.getElementById("factone");
var fTwo = document.getElementById("facttwo");
var fThree = document.getElementById("factthree");
var fFour = document.getElementById("factfour");

var sounds = document.getElementById("sounds");
var switchs = "clink.mp3";


dBut4.addEventListener("click", function () {
    info.style.display = "block";
    rece.style.display = "none";
    fourdrink.style.display = "block";
    fOne.style.display = "none";
    fTwo.style.display = "none";
    fThree.style.display = "none";
    fFour.style.display = "block";
    sounds.src = switchs;
    sounds.play();
});

dBut3.addEventListener("click", function () {
    info.style.display = "block";
    rece.style.display = "none";
    threedrink.style.display = "block";
    fOne.style.display = "none";
    fTwo.style.display = "none";
    fFour.style.display = "none";
    fThree.style.display = "block";
    sounds.src = switchs;
    sounds.play();
    
});

dBut2.addEventListener("click", function () {
    info.style.display = "block";
    rece.style.display = "none";
    twodrink.style.display = "block";
    fOne.style.display = "none";
    fThree.style.display = "none";
    fFour.style.display = "none";
    fTwo.style.display = "block";
    sounds.src = switchs;
    sounds.play();
    
});
dBut1.addEventListener("click", function () {
    info.style.display = "block";
    rece.style.display = "none";
    onedrink.style.display = "block";
    fTwo.style.display = "none";
    fThree.style.display = "none";
    fFour.style.display = "none";
    fOne.style.display = "block";
    sounds.src = switchs;
    sounds.play();
});

backBut.addEventListener("click", function(){
   info.style.display = "none";
    rece.style.display = "block";
    onedrink.style.display = "none";
    twodrink.style.display = "none";
    threedrink.style.display = "none";
    fourdrink.style.display = "none";
   
});


