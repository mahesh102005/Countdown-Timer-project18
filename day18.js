// Set the event date and time
const eventDate = new Date('December 31, 2024 23:59:59').getTime();

const countdown = () => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.querySelector('.countdown').innerHTML = "<h2>Event Started!</h2>";
    }
};

// Update the countdown every 1 second
const timerInterval = setInterval(countdown, 1000);
