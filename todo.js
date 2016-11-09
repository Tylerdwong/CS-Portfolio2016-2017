//Defines my variables so I can use them in my code and they are labeled.
var dropdown = document.getElementById("dropdown");
var submitbutton = document.getElementById("submitbutton");
var outputarea = document.getElementById("outputarea");
var text1 = document.getElementById("text1");

submitbutton.addEventListener("click", buttonfunction);


function buttonfunction() {

  var task = "<div>" + text1.value + "<div>";


  outputarea.innerHTML = outputarea.innerHTML + task;








//Tasks that make my dropdown outputs work and make what I put into my input to appear as I want it to be.
  if (dropdown.value == "underline") {
    outputarea.innerHTML = text1.value;
    outputarea.style.textDecoration = "underline";
    text1.value = "";

  }
  else if (dropdown.value == "redborder") {
    outputarea.innerHTML = text1.value;
    outputarea.style.borderColor = "red";

  }
  else if (dropdown.value == "greenfont") {
    outputarea.innerHTML = text1.value;
    outputarea.style.color = "green";
  }
  else if (dropdown.value == "bluefont") {
    outputarea.innerHTML = text1.value
    outputarea.style.color = "blue";

  }
  //"<div style = 'color'>" + color + "'>" + task + "</div>";
}
outputarea.addEventListener("click", function(evt) {
  var name1 = evt.target;
  name1.parentNode.removeChild(name1);
});
//Task that deletes when I click on what I put into my textbox.  