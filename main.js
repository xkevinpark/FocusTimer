function countDown(min, seconds, stack) {
    let timer = setInterval(() => {
        // once seconds reaches 0, reset seconds to 59
        if(seconds === 0) {
            seconds = 60;
            min--; // decrement min by 1
        }
        seconds--;

        document.querySelector('#timerMin').innerHTML = min;
        document.querySelector('#timerSec').innerHTML = seconds;

        // if min === 0 && seconds === 0, clearInterval
        // end of time:
        if(min === 0 && seconds === 0){
        
        clearInterval(timer);
        
        if (stack[0] === 'work') {
            alert('Great work! Take a 5 min break.')
            resetTimer(5);

        } else {
            alert('Back to work for 25 mins.')
            resetTimer(25);
        }
        stack.pop();
        // flip endTimer to true
        // decrement seconds by 1
        return stack;
        }
    }, 1000)
}

function resetTimer(min) {
    document.querySelector('#timerMin').innerText = min;
    document.querySelector('#timerSec').innerText = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    const stack = [];

    // timeSecs which is set to 0, need to be converted into seconds
    const work = document.querySelector('#work');
    const reset = document.querySelector('#reset');
    const breakButton = document.querySelector('#breakButton');

    work.addEventListener('click', () => {
        // use resetTimer() to set to 25 mins
        if (stack.length === 0) {
            let min = document.querySelector('#timerMin').innerText = 25;
            let seconds = document.querySelector('#timerSec').innerText = 0;
            stack.push('work');
            countDown(min, seconds, stack);
        }
    })
    // reset.addEventListener('click', () => {
    //     stack.pop();
    //     resetTimer(25);
    // });
    breakButton.addEventListener('click', () => {
        if (stack.length === 0) {
            stack.push('break');
            // takeABreak(stack);
            let min = document.querySelector('#timerMin').innerText = 5;
            let seconds = document.querySelector('#timerSec').innerText = 0;
            countDown(min, seconds, stack);
        }
    });
})

