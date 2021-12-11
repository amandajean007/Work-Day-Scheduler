// Today's date is presented at the top of the page
var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));

// Variables connecting Javascript to HTML
var hour9 = document.getElementById("nine");
var hour10 = document.getElementById("ten");
var hour11 = document.getElementById("eleven");
var hour12 = document.getElementById("twelve");
var hour1 = document.getElementById("one");
var hour2 = document.getElementById("two");
var hour3 = document.getElementById("three");
var hour4 = document.getElementById("four");
var hour5 = document.getElementById("five");

// variables defining hours to compare with moment
var nine = moment('09:00', 'HH:mm');
var ten = moment('10:00', 'HH:mm');
var eleven = moment('11:00', 'HH:mm');
var twelve = moment('12:00', 'HH:mm');
var one = moment('13:00', 'HH:mm');
var two = moment('14:00', 'HH:mm');
var three = moment('15:00', 'HH:mm');
var four = moment('16:00', 'HH:mm');
var five = moment('17:00', 'HH:mm');
var six = moment('18:00', 'HH:mm');


// Functions to color code the scheduler
function addClass9() {
    if(moment().isAfter(ten)) {
        hour9.className=("col-8 past");
    }
    if(moment().isBefore(nine)){
        hour9.className=("col-8 future");
    } 
    if(moment().isBetween(nine, ten)){
        hour9.className=("col-8 present");
    }
}

function addClass10() {
    if(moment().isAfter(eleven)) {
        hour10.className=("col-8 past");
    }
    if(moment().isBefore(ten)){
        hour10.className=("col-8 future");
    } 
    if(moment().isBetween(ten, eleven)){
        hour10.className=("col-8 present");
    }
}

function addClass11() {
    if(moment().isAfter(twelve)) {
        hour11.className=("col-8 past");
    }
    if(moment().isBefore(eleven)){
        hour11.className=("col-8 future");
    } 
    if(moment().isBetween(eleven, twelve)){
        hour11.className=("col-8 present");
    }
}

function addClass12() {
    if(moment().isAfter(one)) {
        hour12.className=("col-8 past");
    }
    if(moment().isBefore(twelve)){
        hour12.className=("col-8 future");
    } 
    if(moment().isBetween(twelve, one)){
        hour12.className=("col-8 present");
    }
}

function addClass1() {
    if(moment().isAfter(two)) {
        hour1.className=("col-8 past");
    }
    if(moment().isBefore(one)){
        hour1.className=("col-8 future");
    } 
    if(moment().isBetween(one, two)){
        hour1.className=("col-8 present");
    }
}

function addClass2() {
    if(moment().isAfter(three)) {
        hour2.className=("col-8 past");
    }
    if(moment().isBefore(two)){
        hour2.className=("col-8 future");
    } 
    if(moment().isBetween(two, three)){
        hour2.className=("col-8 present");
    }
}

function addClass3() {
    if(moment().isAfter(four)) {
        hour3.className=("col-8 past");
    }
    if(moment().isBefore(three)){
        hour3.className=("col-8 future");
    } 
    if(moment().isBetween(three, four)){
        hour3.className=("col-8 present");
    }
}

function addClass4() {
    if(moment().isAfter(five)) {
        hour4.className=("col-8 past");
    }
    if(moment().isBefore(four)){
        hour4.className=("col-8 future");
    } 
    if(moment().isBetween(four, five)){
        hour4.className=("col-8 present");
    }
}

function addClass5() {
    if(moment().isAfter(six)) {
        hour5.className=("col-8 past");
    }
    if(moment().isBefore(five)){
        hour5.className=("col-8 future");
    } 
    if(moment().isBetween(five, six)){
        hour5.className=("col-8 present");
    }
}

// Add appropriate highlight class
addClass9();
addClass10();
addClass11();
addClass12();
addClass1();
addClass2();
addClass3();
addClass4();
addClass5();

// Variables connecting to HTML form Elements
var feedbackFieldNine = document.getElementById("nine");
var feedbackFieldTen = document.getElementById("ten");
var feedbackFieldEleven = document.getElementById("eleven");
var feedbackFieldTwelve = document.getElementById("twelve");
var feedbackFieldOne = document.getElementById("one");
var feedbackFieldTwo = document.getElementById("two");
var feedbackFieldThree = document.getElementById("three");
var feedbackFieldFour = document.getElementById("four");
var feedbackFieldFive = document.getElementById("five");

// Variables connecting to HTML Save Buttons
var saveButton9 = document.getElementById("saveButton9");
var saveButton10 = document.getElementById("saveButton10");
var saveButton11 = document.getElementById("saveButton11");
var saveButton12 = document.getElementById("saveButton12");
var saveButton1 = document.getElementById("saveButton1");
var saveButton2 = document.getElementById("saveButton2");
var saveButton3 = document.getElementById("saveButton3");
var saveButton4 = document.getElementById("saveButton4");
var saveButton5 = document.getElementById("saveButton5");

// (Set Item) Function definitions to Save to Local Storage
function nineAm() {
   	localStorage.setItem("9 AM ", feedbackFieldNine.value);
}
function tenAm() {
    localStorage.setItem("10 AM ", feedbackFieldTen.value);
}
function elevenAm() {
    localStorage.setItem("11 AM ", feedbackFieldEleven.value);
}
function twelvePm() {
    localStorage.setItem("12 PM ", feedbackFieldTwelve.value);
}
function onePm() {
    localStorage.setItem("1 PM ", feedbackFieldOne.value);
}
function twoPm() {
    localStorage.setItem("2 PM ", feedbackFieldTwo.value);
}
function threePm() {
    localStorage.setItem("3 PM ", feedbackFieldThree.value);
}
function fourPm() {
    localStorage.setItem("4 PM ", feedbackFieldFour.value);
}
function fivePm() {
    localStorage.setItem("5 PM ", feedbackFieldFive.value);
}

// Event Listeners to Call on Save to Local Storage Functions
saveButton9.addEventListener("click", nineAm);
saveButton10.addEventListener("click", tenAm);
saveButton11.addEventListener("click", elevenAm);
saveButton12.addEventListener("click", twelvePm);
saveButton1.addEventListener("click", onePm);
saveButton2.addEventListener("click", twoPm);
saveButton3.addEventListener("click", threePm);
saveButton4.addEventListener("click", fourPm);
saveButton5.addEventListener("click", fivePm);

// (Get Item) Function definitions for displaying tasks in the timeslot
function retrieveResponse9() {
    feedbackFieldNine.value = localStorage.getItem("9 AM ");
}
function retrieveResponse10() {
    feedbackFieldTen.value = localStorage.getItem("10 AM ");
}
function retrieveResponse11() {
    feedbackFieldEleven.value = localStorage.getItem("11 AM "); 
}
function retrieveResponse12() {
    feedbackFieldTwelve.value = localStorage.getItem("12 PM ");
}
function retrieveResponse1() {
    feedbackFieldOne.value = localStorage.getItem("1 PM ");
}
function retrieveResponse2() {
    feedbackFieldTwo.value = localStorage.getItem("2 PM ");
}
function retrieveResponse3() {
    feedbackFieldThree.value = localStorage.getItem("3 PM ");
}
function retrieveResponse4() {
    feedbackFieldFour.value = localStorage.getItem("4 PM ");
}
function retrieveResponse5() {
    feedbackFieldFive.value = localStorage.getItem("5 PM ");
}

// Call on (Get Item) functions
retrieveResponse9();
retrieveResponse10();
retrieveResponse11();
retrieveResponse12();
retrieveResponse1();
retrieveResponse2();
retrieveResponse3();
retrieveResponse4();
retrieveResponse5();

// Event Listners for Clear Buttons
clearButton9.addEventListener("click", function() { localStorage.removeItem("9 AM "); retrieveResponse9(); });
clearButton10.addEventListener("click", function() { localStorage.removeItem("10 AM "); retrieveResponse10(); });
clearButton11.addEventListener("click", function() { localStorage.removeItem("11 AM "); retrieveResponse11(); });
clearButton12.addEventListener("click", function() { localStorage.removeItem("12 PM "); retrieveResponse12(); });
clearButton1.addEventListener("click", function() { localStorage.removeItem("1 PM "); retrieveResponse1(); });
clearButton2.addEventListener("click", function() { localStorage.removeItem("2 PM "); retrieveResponse2(); });
clearButton3.addEventListener("click", function() { localStorage.removeItem("3 PM "); retrieveResponse3(); });
clearButton4.addEventListener("click", function() { localStorage.removeItem("4 PM "); retrieveResponse4(); });
clearButton5.addEventListener("click", function() { localStorage.removeItem("5 PM "); retrieveResponse5(); });