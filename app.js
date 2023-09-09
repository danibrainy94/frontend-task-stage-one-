const currenTime = document.querySelector('.current-time')


const presentTime = new Date;

function toMilliSeconds (hours, minutes, seconds, milliseconds) {
    let milliSecToHours = hours * 60 * 60 * 1000;
    let milliSecToMinutes = minutes * 60 * 1000;
    let milliSecToSeconds = seconds * 1000 ;

    return result = milliSecToHours + milliSecToMinutes + milliSecToSeconds + milliseconds;
}



currenTime.textContent = toMilliSeconds(presentTime.getUTCHours(), presentTime.getUTCMinutes(), presentTime.getUTCSeconds(), presentTime.getUTCMilliseconds());
