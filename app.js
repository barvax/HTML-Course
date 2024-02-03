let x =encodeURIComponent("/lesson 1/video/createFolder.mp4")
const videoSource = document.getElementById('videoSource')


function playVideo() {
    videoSource.src = x;
    console.log(videoSource.src);
   // videoSource.play();
}
