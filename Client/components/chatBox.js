import React from 'react'
import {connect} from 'react-redux'

const ChatBox = () => {
  return <div>Hello</div>
}

const mapState = (state) => {
  return {
    messages: state.messages,
  }
}

export default connect(mapState)(ChatBox)
