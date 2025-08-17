let TIMER_DISPLAY = "timerDisplay"
let HIGHLIGHT = "highlight"

let beginTime = null;
let timerInterval = null;

function start_watch() {
    beginTime = Date.now();
    timerInterval = setInterval(update, 10);
}

function update() {
    let timerDisplay = document.getElementById(TIMER_DISPLAY);
    let timeDiff = Date.now() - beginTime;

    let totalSeconds = Math.floor(timeDiff / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    let hoursString = hours.toString().padStart(2, "0");
    let minutesString = minutes.toString().padStart(2, "0");
    let secondsString = seconds.toString().padStart(2, "0");
    let fullString = hoursString + ":" + minutesString + ":" + secondsString;

    timerDisplay.textContent = fullString;

    if (totalSeconds % 30 == 0) {
        timerDisplay.classList.add(HIGHLIGHT);
    }
    else {
        timerDisplay.classList.remove(HIGHLIGHT);
    }

}