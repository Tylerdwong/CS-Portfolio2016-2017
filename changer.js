// Creates Variables amd saves DOM Elements to each
var newBGColor = document.getElementById("newBGColor");
var colorChangButton= document.getElementById("colorChangeButton");

/* EventListener for button
    Sets the body's background color to the user provided value */

colorChangButton.addEventListener("click", function(){
document.body.style.backgroundColor= newBGColor. value;
})