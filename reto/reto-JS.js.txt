// Animación para mover la nube de izquierda a derecha
const nube = document.getElementById("nube");
let nubePosition = -150; // Posición inicial de la nube
setInterval(() => {
  nubePosition += 1;
  if (nubePosition > 800) nubePosition = -150; // Reinicia cuando sale del contenedor
  nube.style.left = `${nubePosition}px`;
}, 30);

// Animación del sol (baja y sube)
const sol = document.getElementById("sol");
let solDirection = 1;
let solPosition = 45; // Altura inicial del sol
setInterval(() => {
  solPosition += solDirection * 0.5; // Cambia la posición
  if (solPosition > 100 || solPosition < 45) solDirection *= -1; // Cambia de dirección
  sol.style.top = `${solPosition}px`;
}, 50);

// Reproduce un sonido al hacer clic en los objetos
function playSound() {
  const sound = new Audio("https://www.fesliyanstudios.com/play-mp3/387"); // Sonido de clic
  sound.play();
}

// Agrega evento de clic a cada objeto
document.querySelectorAll(".objeto").forEach((objeto) => {
  objeto.addEventListener("click", playSound);
});

// Campo de texto para contar caracteres
const inputField = document.createElement("input");
inputField.type = "text";
inputField.placeholder = "Escribe aquí...";
inputField.style.marginTop = "20px";
inputField.style.display = "block";
inputField.style.width = "300px";
inputField.style.padding = "10px";
inputField.style.fontSize = "16px";

const charCounter = document.createElement("p");
charCounter.textContent = "Caracteres: 0";
charCounter.style.fontSize = "18px";

document.body.appendChild(inputField);
document.body.appendChild(charCounter);

// Actualiza el contador en tiempo real
inputField.addEventListener("input", () => {
  charCounter.textContent = `Caracteres: ${inputField.value.length}`;
});
