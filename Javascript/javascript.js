console.log("hello google team!");

//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables to hold display
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;


//variable to hold setInterval
let interval = null;

//defined variable to hold stopwatch status
let status = "stopped";

//countdown logic
function stopWatch (){
  seconds++


  //logic to determine next value;
  if (seconds / 60 === 1) {
    seconds = 0
    minutes++

    if (minutes / 60 === 1) {
      minutes = 0
      hours++
    }
  }

  // when seconds/minutes/hours are only 1 digit, add a leading value of 0
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  }
  else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  }
  else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  }
  else {
    displayHours = hours;
  }


  //Display updated time
  document.getElementById("clockDisplay").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


//function for button startStop
function startStop (){
  if (status === "stopped") {

    //start stopwatch when status is set to start
    interval = window.setInterval(stopWatch, 1000)
    document.getElementById("startStop").innerHTML = "Stop"
    status = "started"

  }
  else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start"
    status = "stopped"

  }
}





//Function to reset the stopWatch
