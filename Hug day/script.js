const correctPassword = "hugday"; // CHANGE THIS

function checkPassword() {
    const userInput = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (userInput === correctPassword) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

        document.getElementById("bgMusic").play();
    } else {
        error.innerText = "Wrong password, try again my love 💔";
    }
}
