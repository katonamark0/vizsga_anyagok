// 🎵 Zene indítása kattintásra
document.body.addEventListener("click", () => {
  const music = document.getElementById("music");
  if (music.paused) {
    music.play();
  }
});

// 🌸 Lebegő szirmok létrehozása
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("falling-petal");

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.body.appendChild(petal);

  // eltűnik 10 mp után
  setTimeout(() => {
    petal.remove();
  }, 10000);
}

// fél másodpercenként új szirom
setInterval(createPetal, 500);
