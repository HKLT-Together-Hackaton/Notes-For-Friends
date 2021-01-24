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
    'babyBeMine.mp3',
    'misterambiguous.mp3',
    'pianoMan.mp3',
    'rosario.mp3',
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
  let challenge = prompt('Would you like a challenge? yes/no')

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

//game button function - on homepage and information page
let answers = ['Rock', 'Paper', 'Scissors']
function Gamechallenger() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  let challenge = prompt('Would you like to play a game?🙃 yes/no')

  if (challenge === 'yes' || challenge === 'Yes') {
    let answer = prompt(
      'Rock✊ Paper✋ Scissors✌️ SHOOT! (please write in lower-case): '
    )
    let answerPick = answers[getRandomInt(3)]
    console.log(answerPick)
    alert(answerPick + '!!!')
    if (answer == 'paper' && answerPick == 'Paper') {
      alert('Tie! Good game🤝💛')
    }
    if (answer == 'rock' && answerPick == 'Rock') {
      alert('Tie! Good game🤝💛')
    }
    if (answer == 'scissors' && answerPick == 'Scissors') {
      alert('Tie! Good game🤝💛')
    }
    if (answer == 'paper' && answerPick == 'Rock') {
      alert('You Win! Good game🤝💛')
    }
    if (answer == 'rock' && answerPick == 'Paper') {
      alert('Mwahaha! Good game🤝💛')
    }
    if (answer == 'scissors' && answerPick == 'Rock') {
      alert('Mwahaha! Good game🤝💛')
    }
    if (answer == 'paper' && answerPick == 'Scissors') {
      alert('Mwahaha! Good game🤝💛')
    }
    if (answer == 'rock' && answerPick == 'Scissors') {
      alert('You win! Good game🤝💛')
    }
    if (answer == 'scissors' && answerPick == 'Paper') {
      alert('You win! Good game🤝💛')
    }
  } else {
    alert('Maybe next time!')
  }
}

let gameButton = document.querySelector('#gameButton')
gameButton.addEventListener('click', Gamechallenger)

