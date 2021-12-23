const christmas = "Sat Dec 25 2021 12:00:00";

const secondsEl = document.getElementById('seconds');
const minsEl = document.getElementById('mins');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');

// set a countdown for christmas
function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const diff = new Date(christmasDate - currentDate);
    const seconds = diff.getSeconds();
    const minutes = diff.getMinutes();
    const hours = diff.getHours();
    const days = diff.getDate();
    
    daysEl.innerHTML = days;
    
    hoursEl.innerHTML = formatTime(hours);
    
    minsEl.innerHTML = formatTime(minutes);
    
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
//initial call
countdown();

setInterval(countdown, 1000);