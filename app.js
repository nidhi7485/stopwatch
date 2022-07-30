const timeEl = document.querySelector(".watch .time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const stopBtn = document.getElementById("stop");

let seconds = 0;
let interval = null;

// eventListner

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
stopBtn.addEventListener("click", stop);

// timer function
function timer() {
  seconds++;
  let secs = seconds % 60;
  let mins = Math.floor(seconds / 60);
  let hour = Math.floor(seconds / 3600);

  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }

  timeEl.innerText = `${hour}:${mins}:${secs}`;
  console.log(secs);
}
timer();

//start function
function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

// stop function
function stop() {
  clearInterval(interval);
  interval = null;
}

// reset function
function reset() {
  stop();
  seconds = 0;
  timeEl.innerText = "00:00:00";
}
