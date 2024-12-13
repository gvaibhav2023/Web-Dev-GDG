document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer Logic
    const timerElement = document.getElementById("timer");
    const messageBtn = document.getElementById("messageBtn");

    // Update Countdown function
    function updateCountdown() {
        const now = new Date();
        const nextYear = new Date(now.getFullYear() + 1, 0, 1); // Next Year's January 1st
        const timeDifference = nextYear - now;

        if (timeDifference <= 0) {
            timerElement.textContent = "00:00:00:00";
            alert("Happy New Year!");
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        // Format the timer as DD:HH:MM:SS
        timerElement.textContent = `${days}:${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    // Set an interval to update the countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();  // Initial call to display the countdown immediately

    // Button Click Event for the "Preview" button
    messageBtn.addEventListener("click", () => {
        alert("Happy New Year!");
    });

    // Creative Section: Gradient Color Generator
    const colorBox = document.getElementById("colorBox");
    const changeColorBtn = document.getElementById("changeColorBtn");

    // Function to generate a random color
    const generateRandomColor = () => {
        const randomColor = () => Math.floor(Math.random() * 256);
        return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    };

    // Update background color
    const updateBackgroundColor = () => {
        const color1 = generateRandomColor();
        const color2 = generateRandomColor();
        colorBox.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    };

    // Event listener for changing the background color
    changeColorBtn.addEventListener("click", updateBackgroundColor);
    updateBackgroundColor(); // Initial background color
});
