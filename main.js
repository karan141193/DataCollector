
function handleSelect() {
    if (this.value == '01') {
        document.getElementById('edu').disabled = true;
    } else {
        document.getElementById('edu').disabled = false;
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

function handleRadioDev() {
    if (this.value == '01') {
        document.getElementById('dev').disabled = true;
    } else {
        document.getElementById('dev').disabled = false;
    }
}
 
function handleRadioTest() {
    if (this.value == '01') {
        document.getElementById('tester').disabled = true;
    } else {
        document.getElementById('tester').disabled = false;
    }
}