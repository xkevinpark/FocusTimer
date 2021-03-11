function countDown() {
    let min = Number(document.querySelector('#timerMin').innerText);
    let seconds = Number(document.querySelector('#timerSec').innerText);


    let timer = setInterval(() => {
        // once seconds reaches 0, reset seconds to 59
        if(seconds === 0) {
            seconds = 59;
            min--; // decrement min by 1
        }
        seconds--;

        document.querySelector('#timerMin').innerHTML = min;
        document.querySelector('#timerSec').innerHTML = seconds;

        // if min === 0 && seconds === 0, clearInterval
        // end of time:
        if(min === 0 && seconds === 0){

        clearInterval(timer);
        alert('Time\'s up!')
        // flip endTimer to true
        // decrement seconds by 1
        }
    }, 1000)
}

function resetTimer() {
    document.querySelector('#timerMin').innerText = 25;
    document.querySelector('#timerSec').innerText = 0;
}

function takeABreak() {
    document.querySelector('#timerMin').innerText = 5;
    document.querySelector('#timerSec').innerText = 0;
    countDown();
}

document.addEventListener('DOMContentLoaded', () => {


    // timeSecs which is set to 0, need to be converted into seconds
    const work = document.querySelector('#work')
    const reset = document.querySelector('#reset')
    const breakButton = document.querySelector('#breakButton')
    work.addEventListener('click', () => {
        // use resetTimer() to set to 25 mins
        countDown();
    })
    reset.addEventListener('click', resetTimer);
    breakButton.addEventListener('click', () => {
        takeABreak();
    });
})

