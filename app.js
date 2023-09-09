const currenTime = document.getElementsByClassName('.current-time')

// currenTime.textContent = toMilliSeconds;


const presentTime = new Date;

// const hours = presentTime.getUTCHours();
// const minutes = presentTime.getUTCMinutes();
// const Seconds = presentTime.getUTCSeconds();
// const Milliseconds = presentTime.getUTCSeconds();


function toMilliSeconds (hours, minutes, seconds, milliseconds) {
    let milliSecToHours = hours * 60 * 60 * 1000;
    let milliSecToMinutes = minutes * 60 * 1000;
    let milliSecToSeconds = seconds * 1000 ;

    return result = milliSecToHours + milliSecToMinutes + milliSecToSeconds + milliseconds;
}

console.log(toMilliSeconds(presentTime.getUTCHours(), presentTime.getUTCMinutes(), ));

// console.log(toMilliSeconds(presentTime.getUTCHours(), presentTime.getUTCMinutes(), presentTime.getUTCSeconds(), presentTime.getUTCMilliseconds())));