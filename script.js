const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");

const welcomeScreen = document.getElementById("welcomeScreen");
const messageScreen = document.getElementById("messageScreen");
const feelingsScreen = document.getElementById("feelingsScreen");

const yesButton = document.getElementById("yesButton");
const timeButton = document.getElementById("timeButton");
const noButton = document.getElementById("noButton");

// First screen
startButton.addEventListener("click", function () {
    welcomeScreen.classList.add("hidden");
    messageScreen.classList.remove("hidden");
});

// Second screen
continueButton.addEventListener("click", function () {
    messageScreen.classList.add("hidden");
    feelingsScreen.classList.remove("hidden");
});

// Response function
function showResponse(message) {
    feelingsScreen.innerHTML = `
        <h1>Thank You, Jackie ❤️</h1>
        <p>${message}</p>
        <p>Whatever your answer, I appreciate your honesty.</p>
    `;
}

// Her responses
yesButton.addEventListener("click", function () {
    showResponse("I'm glad you feel the same way. Let's take our time and see where this goes. 😊");
});

timeButton.addEventListener("click", function () {
    showResponse("Take all the time you need. There's no pressure at all.");
});

noButton.addEventListener("click", function () {
    showResponse("Thank you for being honest with me. I respect how you feel.");
});