let musicButton = document.querySelector('#musicButton')

//adding audio to button
musicButton.addEventListener('click', playSong)
let isPlaying = false
var audio = new Audio('/audio/Golden.mp3')
//adding audio to button
function playSong() {
  if (!isPlaying) {
    audio.play()
    isPlaying = true
  } else {
    audio.pause()
    isPlaying = false
  }
}

const container = document.querySelector('.container')
const nightmode = document.querySelector('#nightmode')
nightmode.onclick = (event) => {
  event.preventDefault()
  container.classList.toggle('active')
}
