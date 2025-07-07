function playSong(src) {
  const player = document.getElementById('audioPlayer');
  player.src = src;
  player.play();
  console.log("Now playing:", src);
}

document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  document.querySelectorAll("#songList .song-card").forEach(song => {
    song.style.display = song.innerText.toLowerCase().includes(filter) ? "block" : "none";
  });
});
