const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.getElementById("questionContainer");

// tombol NO kabur
noBtn.addEventListener("mouseover", () => {
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
});

// klik YES
yesBtn.addEventListener("click", () => {
  alert("ak juga suka km kok ❤️");
});
