var redborder = document.getElementById("redborder");
var underline = document.getElementById("underline");
var greenborder = document.getElementById("greenborder");
var blueborder = document.getElementById("blueborder");
var dropdown = document.getElementById("dropwdown");
var submitbutton = document.getElementById("submitbutton");
var outputarea = document.getElementById("outputarea");
var text1 = document.getElementById("text1");

submitbutton.addEventListener("click", buttonfunction);


function buttonfunction() {

  var task = "<div>" + text1.value + "<div>";


  outputarea.innerHTML = outputarea.innerHTML + task;


}


outputarea.addEventListener("click", function(evt) {
  var name1 = evt.target;
  name1.parentNode.removeChild(name1);

});




// if (dropdown.value == "underline") {
//   outputarea = innerHTML = outputarea.style.textdecoration = "underline";

// }
// else if (dropdown.value == "redborder") {
//   outputarea.innerHTML = outputarea.style.borderColor = "redborder";

// }
// else if (dropdown.value == "greenborder") {
//   outputarea.innerHTML = outputarea.style.borderColor = "green border"

// }
// else if (dropdown.value == "blueborder") {
//   outputarea.innerHTML = outputarea.style.borderColor = "blueborder"

//}
 //"<div style = 'color'>" + color + "'>" + task + "</div>";