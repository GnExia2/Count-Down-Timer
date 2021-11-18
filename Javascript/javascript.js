console.log("hello google team!");

//Define vars to hold time values
let seconds = 0
let minutes = 0
let hours = 0

//variables to hold display
let displaySeconds = 0
let displayMinutes = 0
let displayHours = 0


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

  //Display updated time
  document.getElementById("clockDisplay").innerHTML = hours + ":" + minutes + ":" + seconds;

}


window.setInterval(stopWatch, 1000)
