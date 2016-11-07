var answerbutton = document.getElementById("answerbutton");
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var answer;
var display = document.getElementById('display');
var droparrow = document.getElementById("droparrow");

answerbutton.addEventListener("click", doMath);


function doMath() {
function calcfunction(){
    var button1 = parseInt(button1.value)
    var button2 = parseInt(button2.value)
}

    if (droparrow.value == "+") {
        answer = parseInt(button1.value) + parseInt(button2.value);
        display.innerHTML = answer;
    }
   else if (droparrow.value == "-") {
        answer = parseInt(button1.value) - parseInt(button2.value)
        display.innerHTML = answer;
    }
 else if (droparrow.value == "*") {
        answer = parseInt(button1.value) * parseInt(button2.value);
        display.innerHTML = answer;
    }
   else if (droparrow.value == "/") {
        answer = parseInt(button1.value) / parseInt(button2.value);
        display.innerHTML = answer;
    }

   else if  (droparrow.value == "√"){
        answer = Math.sqrt(parseInt(button2.value))
        display.innerHTML = answer;
    }
    else if (droparrow.value == "%") {
        answer = Math.round(button1.value) % parseInt(button2.value);
        display.innerHTML = answer;
    }
}