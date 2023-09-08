const currenTime = document.getElementsByClassName('.current-time')

currenTime.textContent = 

function toMilliSeconds (hours, minutes, seconds) {
    const secondsToMilliseconds = seconds * 1000;
    const minutesToMilliseconds = minutes* 60 * 1000;
    const hoursToMilliseconds = hours * 60 * 60 * 1000;
    return secondsToMilliseconds + minutesToMilliseconds + hoursToMilliseconds;
}