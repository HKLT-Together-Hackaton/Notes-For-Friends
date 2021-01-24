import React from 'react'
import {connect} from 'react-redux'
import {postMessage} from '../store/messages'

class NewMessage extends React.Component {
  constructor() {
    super()
    this.state = {
      channel: 2,
      userId: null,
      content: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({userId: this.props.user.id})
  }

  handleChange(event) {
    this.setState({content: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.postNewMessage(this.state, this.props.user)
  }
  render() {
    return (
      <div>
        place holder for ChatView hihi
        <form>
          <label>
            Post:
            <input
              type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatch = (dispatch) => {
  return {
    postNewMessage: (message, user) => dispatch(postMessage(message, user)),
  }
}
export default connect(mapState, mapDispatch)(NewMessage)
