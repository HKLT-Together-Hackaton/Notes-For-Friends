// import axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import NewMessage from './newMessage'
import ChatBox from './chatBox'

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
  return songPick
}

let songVariable = getSong()
let isPlaying = false
let audio = new Audio(`/audio/${songVariable}`)

function playSong() {
  //adding audio to button
  if (!isPlaying) {
    audio.play()
    isPlaying = true
  } else {
    audio.pause()
    isPlaying = false
  }
}

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

class ChatView extends React.Component {
  render() {
    return (
      <div className="row">
        {/* <!-- column 1: the left side of the screen (profile, info box, navigation box) --> */}
        <div className="col-4">
          {/* <!-- profile pic --> */}
          <div className="profilePic">
            <img
              src="https://www.onthisday.com/images/people/michael-jackson-medium.jpg"
              alt="Michael Picture"
              width="100"
            />
          </div>
          <div className="infoBox">
            {/* <!-- infobox --> */}
            Profile:
            <div>
              <strong>
                <span className="blueText">Name</span>
              </strong>
              : Michelle
            </div>
            <div>
              <strong>
                <span className="blueText">Interest</span>
              </strong>
              : Coding
            </div>
            <div>
              <strong>
                <span className="blueText">Time-zone</span>
              </strong>
              : 00:00
            </div>
          </div>
          <br />
          {/* <!-- still in column 1: the navigation box is divided into 3 colums) --> */}
          <div className="row guideHeading">
            <div className="col-5">
              {/* <!-- header of the navigation box--> */}
              <div>Channels</div>
            </div>
            <div className="col-5">
              <div>Friends</div>
            </div>
            <div className="col-2">
              <div>+</div>
            </div>
          </div>

          <div className="Guide">
            {/* <!-- list of chats in navigation box--> */}
            <hr />
            <i className="far fa-circle"></i> Chat 1
            <hr />
            <i className="far fa-circle"></i> Chat 2
            <hr />
            <i className="far fa-circle"></i> Chat 3
            <hr />
            <br />
          </div>
        </div>

        {/* <!-- column 2: the middle part of the screen (chat name, chat area, keyboard, mic button) --> */}
        <div className="col-6">
          <br />

          <div>
            <h2 className="chatName">🐠 Channel name 🐠</h2>
            <br />
          </div>

          <ChatBox />
          <NewMessage />
        </div>

        {/* <!-- column 3: the right side of the screen (music button, color changer button, mouse button) --> */}
        <div className="col-2">
          <br />
          <br />
          <br />
          <div className="musicButton">
            <a
              className="btn btn-secondary"
              href="#"
              id="musicButton"
              aria-label="play music"
              onClick={() => playSong()}
            >
              <i className="fas fa-music"></i>
            </a>
          </div>
          <br />
          <div className="" id="nightmode">
            <a
              className="btn btn-secondary"
              href=""
              id="gameButton"
              onClick={() => Gamechallenger()}
            >
              <i className="fas fa-gamepad"></i>
            </a>
          </div>
          <br />
          <div>
            <a
              className="btn btn-secondary"
              href="#"
              id="challengeButton"
              onClick={() => challenger()}
              aria-label="challenge button"
            >
              <i className="fas fa-question"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    userId: state.user.id,
  }
}

export default connect(mapState)(ChatView)
