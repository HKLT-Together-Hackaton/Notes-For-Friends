//color change button from index.html - homepage
const container = document.querySelector('.container')
const nightmode = document.querySelector('#nightmode')
nightmode.onclick = (event) => {
  event.preventDefault()
  container.classList.toggle('active')
}

//song shuffler button from index.html - homepage
function getSong() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  let songs = [
    '1+1.m4a',
    'Countdown.m4a',
    'CuandoMeEnamoro.mp3',
    'Decisiones.mp3',
    'DejalaQueVuelva.mp3',
    'Golden.mp3',
    'HayMiDios.mp3',
    'PirataeTesouro.mp3',
    'playingForYou.mp3',
    'babyBeMine.mp3.mp3',
    'misterambiguous.mp3',
    'pianoMan.mp3',
    'rosario.mp3.mp3',
    'wouldntItBeNice.mp3',
  ]
  let songPick = songs[getRandomInt(14)]
  console.log(songPick)
  return songPick
}
songVariable = getSong()

let musicButton = document.querySelector('#musicButton')
musicButton.addEventListener('click', playSong)
let isPlaying = false
var audio = new Audio(`/audio/${songVariable}`)
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

//challenge button function - on homepage and information page
function challenger() {
  let challenge = prompt('Would you like a challenge? (yes/no')

  if (challenge === 'yes' || challenge === 'Yes') {
    alert(
      'There are three hidden links on this page that you can discover by hovering your cursor over the content👩‍💻 Good luck!'
    )
  } else {
    alert('Maybe next time!')
  }
}
let challengeButton = document.querySelector('#challengeButton')
challengeButton.addEventListener('click', challenger)
