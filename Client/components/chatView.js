// import axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import NewMessage from './newMessage'
import ChatBox from './chatBox'

class ChatView extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     channel: 2,
  //     messages: [],
  //     userId: null,
  //     content: '',
  //   }
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // async componentDidMount() {
  //   const {data} = await axios.get(`/api/channels/${this.state.channel}`)

  //   const user = await axios.get('/me')
  //   if (data.messages && user)
  //     this.setState({...this.state, messages: data.messages, userId: user.id})
  // }

  // handleSubmit(event){
  //   event.preventDefault()
  //   const {data} = await axios.post(
  //     `/api/messages/${this.state.channel}`,
  //     {
  //       content: this.state.content,
  //     }
  //   )
  //   console.log(data, 'hihi')
  //   this.setState({
  //     ...this.state,
  //     messages: [...this.state.messages, data],
  //     content: '',
  //   })
  // }
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
            <i className="far fa-circle checked"></i> Chat 2
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
            >
              <i className="fas fa-music"></i>
            </a>
          </div>
          <br />
          <div className="" id="nightmode">
            <a
              className="btn btn-secondary"
              href=""
              aria-label="dark mode button"
            >
              <i className="far fa-moon"></i>
            </a>
          </div>
          <br />
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
const mapDispatch = (dispatch) => {
  return {
    getMessages: () => console.log('hello'),
  }
}
export default connect(mapState, mapDispatch)(ChatView)
