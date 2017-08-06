var username = window.prompt("Hello Please write your name here");

 document.getElementById("greeting").innerHTML += ", " + username;

var enterDays = document.getElementById("enterDays");

enterDays.onclick = calculateDays;

function calculateDays(){
  var daysinput = document.getElementById('days');
  var days = daysinput.value;
  var hours = days * 24;
  var minute = hours * 60;

  var daysMessage = document.getElementById("daysMessage");
     if(days < 4){
         daysMessage.innerHTML = "Short trips are always worth it!";
     }
     else if(days < 7){
         daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
     }
     else{
         daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
     }

document.getElementById('hoursMessage').innerHTML = "This means you are going to spend " + hours + " hours.";

document.getElementById('minutesMessage').innerHTML = "This means you are going to spend " + minute + " minutes.";

var timingNext = document.getElementById("timingNext");
 timingNext.removeAttribute("hidden");


}

 timingNext.onclick = function(){
 document.getElementById("budgetSection").removeAttribute("hidden");
 }



var enterBudget = document.getElementById("enterBudget");

enterBudget.onclick = calculateBudget;

function calculateBudget(){

  var budgetinput = document.getElementById("tripBudget");
  var budget = budgetinput.value;
  var indbudget = budget * 64.3 ;
  var daysinput = document.getElementById('days');
  var days = daysinput.value;

  document.getElementById("tripExchangeMsg").innerHTML = "This means you will need " + indbudget + " rupees for this trip";
  document.getElementById("dailyExchangeMsg").innerHTML = "That means you can spend " + indbudget/days + " rupees per day.";
  document.getElementById("exchange10Msg").innerHTML = "You need to spend "+ 64.3*10 + " rupees for the item whose cost is 10 USD";
  document.getElementById("exchange500Msg").innerHTML = "You need to spend " +  64.3*500 + " rupees for the item whose cost is 500 USD";


}


var images = ["image/image1.jpeg", "image/image2.jpeg", "image/image3.jpeg", "image/image4.jpeg" ];
var currentImage = 0;
setInterval(changeImage, 3000);

function changeImage(){
     currentImage++;
     if(currentImage > images.length - 1){
         currentImage = 0;
     }
     document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
 }
