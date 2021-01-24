import React from 'react'
import {connect} from 'react-redux'
import {fetchMessages} from '../store/messages'

class ChatBox extends React.Component {
  componentDidMount() {
    this.props.getMessages()
  }
  render() {
    return (
      <div className="chatArea">
        {this.props.messages && this.props.messages.length
          ? this.props.messages.map((each) => {
              if (each.user.id !== this.props.userId)
                return (
                  <>
                    <div className="pinkText left">{each.content}</div>
                    <br />
                    <br />
                  </>
                )
              else
                return (
                  <>
                    <div className="right">{each.content}</div>
                    <br />
                    <br />
                  </>
                )
            })
          : 'no messages here'}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    messages: state.messages,
    userId: state.user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMessages: () => dispatch(fetchMessages()),
  }
}

export default connect(mapState, mapDispatch)(ChatBox)
