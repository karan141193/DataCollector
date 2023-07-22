
function handleComp() {
    if (this.value == '01') {
        document.getElementById('comp').disabled = true;
    } else {
        document.getElementById('comp').disabled = false;
    }
}
 
function handleExp() {
    if (this.value == '01') {
        document.getElementById('exp').disabled = true;
    } else {
        document.getElementById('exp').disabled = false;
    }
}
 
function handletechDev() {
    if (this.value == '01') {
        document.getElementById('tech-dev').disabled = true;
    } else {
        document.getElementById('tech-dev').disabled = false;
    }
}

function handletechtest() {
    if (this.value == '01') {
        document.getElementById('tech-tester').disabled = true;
    } else {
        document.getElementById('tech-tester').disabled = false;
    }
}
 
function showDev(){
    var element = document.getElementById("devTech");
    element.style.display = "inline";
}

function hideDev(){
    var element = document.getElementById("devTech");
    element.style.display = "none";
}
 
function showTest(){
    var element = document.getElementById("testerTech");
    element.style.display = "inline";
}

function hideTest(){
    var element = document.getElementById("testerTech");
    element.style.display = "none";
}

function showName(){
    var x = document.getElementById("UserName").value;
    document.getElementById("CandName").innerHTML = x;
}




function showAGrade(){
var e = document.getElementById("edu");
var value = e.value;
var text = e.options[e.selectedIndex].text;
    if(text == "Diploma"){
        document.getElementById("Grade").textContent="D";;
    }
    if(text == "Graduate"){
        document.getElementById("Grade").textContent="C";;
    }
    if(text == "Post Graduate"){
        document.getElementById("Grade").textContent="B";;
    }
    if(text == "Masters"){
        document.getElementById("Grade").textContent="A";;
    }
}


function showResult(){
    var element = document.getElementById("result");
    element.style.display = "inline-block";
}

function enableButton() {
    if (this.value == '01') {
        document.getElementById('button').disabled = true;
    } else {
        document.getElementById('button').disabled = false;
    }
}

function handleRadioHall() {
    if (this.value == '01') {
        document.getElementById('Hall').disabled = true;
    } else {
        document.getElementById('Hall').disabled = false;
    }
}
 
function handleRadioBaker() {
    if (this.value == '01') {
        document.getElementById('Baker').disabled = true;
    } else {
        document.getElementById('Baker').disabled = false;
    }
}

function handleRadioWeather() {
    if (this.value == '01') {
        document.getElementById('WeatherF').disabled = true;
    } else {
        document.getElementById('WeatherF').disabled = false;
    }
}

function handleRadioOther() {
    if (this.value == '01') {
        document.getElementById('Other').disabled = true;
    } else {
        document.getElementById('Other').disabled = false;
    }
}