function updateClock(){
    const now = new Date();
    const getHours = now.getHours().toString().padStart(2,0);
    const getMins = now.getMinutes().toString().padStart(2,0);
    const getSecs = now.getSeconds().toString().padStart(2,0);
    const timeString = `${getHours}:${getMins}:${getSecs}`

    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);