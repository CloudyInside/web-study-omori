//
//Script para ocultar o mostrar divs en función de donde se clicka

const navButtons = document.querySelectorAll('[id^="showButton"]');
const divContainers = document.querySelectorAll(".content-container");
const videoPlayer = document.getElementById("video-player");
const storeDiv = document.getElementById("store-section");

navButtons.forEach((button, index) => {
	button.addEventListener("click", function () {
		// Oculta el resto de divs
		divContainers.forEach((container) => (container.style.display = "none"));
		videoPlayer.style.display = "none";
		storeDiv.style.display = "none";

		// Muestra el div de contenido correspondiente
		divContainers[index].style.display = "flex";
	});
});

document.addEventListener("click", function (event) {
	const target = event.target;
	if (!target.id.startsWith("showButton")) {
		// Oculta todos los divs de contenido si se clicka fuera
		divContainers.forEach((container) => (container.style.display = "none"));
		videoPlayer.style.display = "block";
		storeDiv.style.display = "block";
	}
});

//Script para no reproducir audio y vídeo simultáneamente

const audioPlayer = document.getElementById("audio-player");

videoPlayer.addEventListener("play", function () {
	// Pausa el audio cuando se reproduce el vídeo
	audioPlayer.pause();
});

videoPlayer.addEventListener("pause", function () {
	// Reanuda la reproducción del audio cuando se pausa el vídeo
	audioPlayer.play();
});

//Script para bajar el volumen del audio de fondo

var audio = document.getElementById("audio-player");
audio.volume = 0.03;

//Script para enseñar los controles de vídeo cuando se hace hover

// Agregamos un evento al video para quitar el atributo 'controls' cuando el cursor sale del video.
videoPlayer.addEventListener("mouseout", function () {
	videoPlayer.removeAttribute("controls");
});

// Agregamos un evento al video para restaurar el atributo 'controls' cuando el cursor está sobre el video.
videoPlayer.addEventListener("mouseover", function () {
	videoPlayer.setAttribute("controls", "controls");
});
