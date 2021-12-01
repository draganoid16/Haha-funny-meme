function playmeme(){
document.getElementById("button1").style.display="none";
document.getElementById("video").style.display="block";
}

function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('video', {
      videoId: 'M7lc1UVf-VE',
      playerVars: { 'autoplay': 1, 'controls': 0 },
      events: {
        'onReady': onPlayerReady,
        'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError
      }
    });
  }


