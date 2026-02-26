// Reprodu
export function initHoverSound() {
  const rings = document.querySelector(".rings");
  const hoverSound = document.getElementById("hover-sound");

  if (rings && hoverSound) {
    rings.addEventListener("mouseenter", function () {
      hoverSound.currentTime = 0;
      hoverSound.play().catch((error) => {
        console.log("Error al reproducir el sonido:", error);
      });
    });
  }
}
