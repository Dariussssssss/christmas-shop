function timer() {
    const today = new Date();
    const newYear = new Date("January 1, 2026 00:00:00 UTC");
    const restOfTime = newYear - today;
    const days = Math.floor(restOfTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((restOfTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((restOfTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((restOfTime % (1000 * 60)) / 1000);

    document.querySelector(".days").innerText = days;
    document.querySelector(".hours").innerText = hours;
    document.querySelector(".minutes").innerText = minutes;
    document.querySelector(".seconds").innerText = seconds;
}

setInterval(timer, 1000);

