function toggleVideoPlayback() {
  var video = document.querySelector("#infoVideo");
  var playButton = document.querySelector(".video-block__play-button");
  console.log("functions called");
  if (video.paused) {
    video.play();
    playButton.classList.add("playing");
  } else {
    video.pause();
    playButton.classList.remove("playing");
  }
}
