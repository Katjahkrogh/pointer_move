// Tilføjer event listner "mouse move" til body, og går til change color
document.querySelector("body").addEventListener("mousemove", changeColor);

function changeColor(evt) {
  // Finder position på y-axen
  const posY = evt.clientY;

  // Finder højden af vinduet
  const height = window.innerHeight;

  // Udregner hvor meget lightness der skal indstilles
  const lightness = (posY / height) * 100;

  //Tilføjer styling til body, og sætter lightness i procent
  document.body.style.setProperty("--l", `${lightness}%`);
}
