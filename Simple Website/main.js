// Select Elements

var circle = document.getElementById("circle");
var buttonUp = document.getElementById("btn-up");
var buttonDown = document.getElementById("btn-down");
var rotateVal = circle.style.transform;
var rotateSum;
var menuButton = document.querySelector(".menu");
var menuAction = document.querySelector(".menu-content");
menuButton.addEventListener("click", (e) => {
    menuAction.classList.toggle("show");
    menuButton.classList.toggle("show");
});

buttonUp.onclick = function() {
    rotateSum = rotateVal + "rotate(-90deg)";
    console.log(rotateSum);
    circle.style.transform = rotateSum;
    rotateVal = rotateSum;
    console.log(rotateVal);
}
buttonDown.onclick = function() {
    rotateSum = rotateVal + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateVal = rotateSum;
}