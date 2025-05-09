//アコーディオン
var accordion = function () {
  this._target = document.querySelectorAll('.accordion .accordion_ttl');
  if (!this._target.length) return;
  this.init();
}
accordion.prototype = {

  init: function () {
    var _self = this;
    for (var i = 0; this._target.length > i; i++) {
      this._target[i].addEventListener('click', this.onClickHD, false);
    }
  },
  onClickHD: function (e) {

    var parent = e.currentTarget.parentNode;
    var next = e.currentTarget.nextElementSibling;

    if (parent.classList.contains("active")) {
      Velocity(next, 'slideUp', { duration: 300, easing: 'easeInOutSine', begin: function () { parent.classList.remove("active") } });
    } else {
      Velocity(next, 'slideDown', { duration: 300, easing: 'easeInOutSine', begin: function () { parent.classList.add("active") } });
    }
  }
}

window.addEventListener('DOMContentLoaded', function () {
  new accordion();
});

//動画再生

var target = document.querySelectorAll('.video');

var done = false;
var tag = "";
var firstScriptTag;
var player;
var gnnber;
var scriptLoaded = false;
var youtubeDom = document.getElementById('movie-modal');
var tblvideoID = [];
const videoElements = document.querySelectorAll('.video[data-youtube]');
videoElements.forEach((element) => {
  const youtubeId = element.getAttribute('data-youtube');
  tblvideoID.push(youtubeId);
});
var youtubeDom = document.getElementById('movie-modal');
var target = document.querySelectorAll('.video');
var target_arr = [].slice.call(target);

function playVid(e) {
  var targetDom = e.parentNode.parentNode;
  gnnber = target_arr.indexOf(targetDom);
  if (scriptLoaded) {
    if (player) {
      player.destroy();
      player = null;
    }
    onYouTubeIframeAPIReady();
  }
  else {
    tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    scriptLoaded = true;
  }
}
function onYouTubeIframeAPIReady() {
  //	let tblvideoID = ["FSZLNVvRCwE","BUN1Zen6JeA","EW0yd9O0zEo","dD98Ez2CyC4","A4H4Evy4aW8","ykRnc_7Y0T4","anH-p3UbxB0","fsUCr4OecBk","z4nDH0n5H3Y","XN9y-5djNo4","S3OG182SYbA","KHsi4W5_jak","dtsRqWag668","4CkXjqAHy_M","g3KL5tMS-lE","_RS9OwDnZqw","Maus6Zi1Ra4","uAsVzPPgjOM","XFrbkLlJM6g","RSuWVbvUp24"]
  //	let i  = gnnber;
  player = new YT.Player('playerId',
    {
      videoId: tblvideoID[gnnber],
      playerVars: { 'rel': 0 },
      events:
      {
        'onReady': onPlayerReady,
        // ************************************			'onStateChange': onPlayerStateChange
      }
    });
}

function onPlayerReady(event) {
  Velocity(youtubeDom,
    { opacity: 1 },
    {
      display: "flex",
      begin: function () {
        event.target.seekTo(0);
      },
      complete: function () {
        event.target.playVideo()
      }
    }, { duration: 60, delay: 0 });
}


function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
  if (event.data == YT.PlayerState.ENDED) {
    done = false;
  }
}
function stopVideo() {
  player.stopVideo();
}
function closeVid() {
  Velocity(youtubeDom,
    { opacity: 0 },
    {
      display: "none",
      complete: function () {
        player.stopVideo();
      }
    }, { duration: 60, delay: 0 });
}
