//getting the element from the DOM
const currenTime = document.querySelector('.current-time')


const presentTime = new Date;

//function to calculate the and return the UTC time in milliseconds
function toMilliSeconds (hours, minutes, seconds, milliseconds) {
    let milliSecToHours = hours * 60 * 60 * 1000;
    let milliSecToMinutes = minutes * 60 * 1000;
    let milliSecToSeconds = seconds * 1000 ;

    return result = milliSecToHours + milliSecToMinutes + milliSecToSeconds + milliseconds;
}


//assigning the value of the time calculated to the element in the DOM
currenTime.textContent = toMilliSeconds(presentTime.getUTCHours(), presentTime.getUTCMinutes(), presentTime.getUTCSeconds(), presentTime.getUTCMilliseconds());
