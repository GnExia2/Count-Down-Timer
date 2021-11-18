console.log("hello google team!");

//Define vars to hold time values
let seconds = 0;
let minutes = 0;

//variables to hold display
let displaySeconds = 0;
let displayMinutes = 0;


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


    document.getElementById("clockDisplay").innerHTML = displayMinutes + ":" + displaySeconds;
}


  //Display updated time


//function that is tied to start button that will change the text to stop when started and start when stopped
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

//function that is tied to reset button to reset the watch
function reset(){
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  document.getElementById("clockDisplay").innerHTML = "00:00";
  document.getElementById("startStop").innerHTML = "Start";
}




//Function to reset the stopWatch
