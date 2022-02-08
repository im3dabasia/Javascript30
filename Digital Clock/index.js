const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setdate() {
    const currTime = new Date();

    // for SECONDS HAND
    const seconds = currTime.getSeconds();
    const deg2sec = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${deg2sec}deg)`;

    // for MINS HAND
    const minutes = currTime.getMinutes();
    const deg2min = ((minutes / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${deg2min}deg)`;

    // for HOUR HAND
    const hours = currTime.getHours();
    const deg2hour = ((hours % 12) * 30) + 90;
    hourHand.style.transform = `rotate(${deg2hour}deg)`;
}

setInterval(setdate, 1000)
