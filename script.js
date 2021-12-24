const christmas = "25 Dec 2021" ;

const secondsEl = document.getElementById('seconds');
const minsEl = document.getElementById('mins');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');

// set a countdown for christmas
function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const diff = new Date(christmasDate - currentDate) / 1000;

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const mins = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60;
    
    daysEl.innerHTML = days;
    
    hoursEl.innerHTML = formatTime(hours);
    
    minsEl.innerHTML = formatTime(mins);
    
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
//initial call
countdown();

setInterval(countdown, 1000);