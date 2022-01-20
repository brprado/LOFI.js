var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "violet",
  progressColor: "purple",
  barWidth: 3,
});
wavesurfer.load("../assets/Bhxa-Ayla .mp3");

//My code
//dom selec
const playBtn = document.querySelector("#playBtn");
const stopBtn = document.querySelector("#stopBtn");
const muteBtn = document.querySelector("#muteBtn");

//events

playBtn.addEventListener("click", () => {
  wavesurfer.playPause();
  if (playBtn.src.includes("play.png")) {
    playBtn.src = "../assets/pause.png";
  } else {
    playBtn.src = "../assets/play.png";
  }
});
stopBtn.addEventListener("click", () => {
  wavesurfer.stop();
  if (stopBtn.src.includes("stop.png")) {
    playBtn.src = "../assets/play.png";
  }
});
muteBtn.addEventListener("click", () => {
  wavesurfer.toggleMute();
  if (muteBtn.src.includes("volume.png")) {
    muteBtn.src = "../assets/mute.png";
  } else {
    muteBtn.src = "../assets/volume.png";
  }
});

wavesurfer.on("finish", () => {
  playBtn.src = "../assets/play.png";
  wavesurfer.stop();
});
