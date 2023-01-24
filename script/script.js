

const INITIAL_TIME_IN_SECONDS = 25 * 60;
let TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;

setInterval( () => {
    TIME_IN_SECONDS--;
    
    const minutes = Math.floor(TIME_IN_SECONDS / 60);
    document.getElementById('min').innerHTML = String(minutes).padStart(2, 0);

    const seconds = TIME_IN_SECONDS % 60;
    document.getElementById('sec').innerHTML = String(seconds).padStart(2, 0);
}, 1000); 