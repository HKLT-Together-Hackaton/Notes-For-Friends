import React from 'react'
import {connect} from 'react-redux'
import {fetchMessages} from '../store/messages'

class ChatBox extends React.Component {
  componentDidMount() {
    this.props.getMessages()
  }
  render() {
    console.log(this.props.messages)
    return (
      <div>
        {this.props.messages && this.props.messages.length
          ? this.props.messages.map((each) => {
              if (each.user.id !== this.props.userId)
                return (
                  <div>
                    <p>{each.content}</p>
                  </div>
                )
              else
                return (
                  <div>
                    <h1>{each.content}</h1>
                  </div>
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
