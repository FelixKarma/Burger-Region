const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let currentScore = 0;

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 400);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    // alert("Ton score: " + Math.round(currentScore));
    if (window.confirm("Ton score: " + Math.round(currentScore))) {
      window.location = "http://127.0.0.1:5500/Burger-Region/jeux/jeux.html";
    }
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

// let currentScore = 0;

function updateScore() {
  // Sélectionne l'élément div avec l'id "game-score"
  const scoreElement = document.getElementById("game-score");

  // Met à jour le contenu HTML de l'élément avec le score actuel
  scoreElement.innerHTML = "Score: " + currentScore;
}
const startTime = Date.now();

function updateScore() {
  const currentTime = Date.now();
  const elapsedTime = (currentTime - startTime) / 1000;
  currentScore += elapsedTime;

  // Mise à jour de l'affichage du score
  const scoreElement = document.getElementById("game-score");
  scoreElement.innerHTML = "Score: " + Math.round(currentScore);
}
setInterval(updateScore, 1000);
