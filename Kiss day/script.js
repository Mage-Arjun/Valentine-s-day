/* Some browsers block autoplay until interaction */
document.body.addEventListener("click", function () {
  document.getElementById("bgMusic").play();
});

/* Reveal extra emotional line */
function reveal() {
  document.getElementById("extra").innerHTML =
    "And I promise… every Kiss Day from now on, my lips will search only for yours 😘❤️";
}

/* Create floating hearts and kisses */
function createFloating() {
  const symbols = ["💖", "💕", "💗", "💋", "❤️"];
  const element = document.createElement("div");
  element.classList.add("floating");
  element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
  element.style.left = Math.random() * 100 + "vw";
  element.style.animationDuration = (4 + Math.random() * 4) + "s";
  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 8000);
}

setInterval(createFloating, 500);
