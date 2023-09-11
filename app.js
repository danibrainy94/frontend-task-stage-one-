//getting the element from the DOM
const currentTime = document.querySelector('.current-time');

//function to get and return the UTC time in milliseconds
function updateTime() {
    let realTime = new Date();
    let currentTimeMilliseconds = realTime.getTime();
    currentTime.textContent = `UTC Time: ${currentTimeMilliseconds}`;
}

// Run updateTime() every second
setInterval(updateTime, 1000); 

