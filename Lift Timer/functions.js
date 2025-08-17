// NOTE: I'm not a JS dev. I'm a C/C++ dev. That's why this is actually readable. Not perfect, but readable.

const TIMER_DISPLAY = "timerDisplay";
const HIGHLIGHT = "highlight";
const BREAK_TIME = 30;

let beginTime = null;
let breakTime = null;
let timerInterval = null;

function start_watch() {
    beginTime = Date.now();
    timerInterval = setInterval(update, 1000);
}

function start_break() {
    const seconds = Math.floor(Date.now() / 1000);

    breakTime = seconds + BREAK_TIME;
}

function update() {
    // Base time variables needed.
    const timeCurrent = Date.now();
    const currentSeconds = Math.floor(timeCurrent / 1000);
    const timeDiff = timeCurrent - beginTime;

    // Time displayed on clock.
    const totalSeconds = Math.floor(timeDiff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Strings to concatenate together and display.
    const hoursString = hours.toString().padStart(2, "0");
    const minutesString = minutes.toString().padStart(2, "0");
    const secondsString = seconds.toString().padStart(2, "0");
    const fullString = `${hoursString}:${minutesString}:${secondsString}`;

    // Grab and set the text.
    const timerDisplay = document.getElementById(TIMER_DISPLAY);
    timerDisplay.textContent = fullString;

    // These conditions control whether or not to flash red that a break has ended.
    const breakHighlight = currentSeconds === breakTime && !timerDisplay.classList.contains(HIGHLIGHT);
    const breakDone = currentSeconds !== breakTime && timerDisplay.classList.contains(HIGHLIGHT);
    if (breakHighlight) {
        timerDisplay.classList.add(HIGHLIGHT);
    }
    else if (breakDone) {
        timerDisplay.classList.remove(HIGHLIGHT);
    }
}