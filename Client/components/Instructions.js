import React from 'react'

function challenger() {
  let challenge = prompt('Would you like a challenge?')

  if (challenge === 'yes' || challenge === 'Yes') {
    alert(
      'There are three hidden links on this page that you can discover by hovering your cursor over the content👩‍💻 Good luck!'
    )
  } else {
    alert('Maybe next time!')
  }
}

const Instructions = () => {
  return (
    <div>
      <h1>Instructions</h1>
      <div>
        <p>
          To join our{' '}
          <a
            href="https://www.youtube.com/watch?v=mvCgSqPZ4EM"
            target="_blank"
            style={{textDecoration: 'none'}}
          >
            <span className="pinkText">community</span>
          </a>{' '}
          please:
          <dl>
            <dd>a 💚</dd>
            <dd>
              b{' '}
              <a
                href="http://talkobamato.me/"
                target="_blank"
                style={{textDecoration: 'none'}}
              >
                💙
              </a>
            </dd>
            <dd>c 💛</dd>
          </dl>
          <div>
            {' '}
            Are you up for a challenge
            <a
              href="https://www.youtube.com/watch?v=zHhza3EgHe8"
              target="_blank"
              style={{textDecoration: 'none'}}
            >
              <span className="blueText">?</span>
            </a>
          </div>
          <br />
          <div>
            <button
              type="button"
              onClick={() => challenger()}
              className="btn btn-secondary"
            >
              🌹 Challenge Button 🌹
            </button>
          </div>
        </p>
      </div>
    </div>
  )
}

export default Instructions
