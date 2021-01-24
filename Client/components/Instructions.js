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
          To join our community please:
          <dl>
            <dd>a 💚</dd>
            <dd>b 💙</dd>
            <dd>c 💛</dd>
          </dl>
          <div>Are you up for a challenge?</div>
          <br />
          <div>
            <button
              type="button"
              onClick={() => challenger()}
              class="btn btn-secondary"
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
