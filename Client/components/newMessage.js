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
      <>
        {/* <!-- still in column 2: the keyboard and mic button are split in seperate columns on the same line) --> */}
        <div className="row">
          {/* <!-- mic button --> */}
          <div class="col-2 homepageSide">
            <div className="micButton">
              <a
                className="btn btn-secondary"
                href=""
                aria-label="microphone button for speech"
              >
                <i className="fas fa-microphone"></i>
              </a>
            </div>
          </div>
          <div className="col-9">
            <form>
              <label>
                Chat:
                <input
                  className="keyboard"
                  placeholder="Type a message..."
                  aria-label="Input for chat box"
                  className="form-control"
                  autocomplete="off"
                  type="text"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
              </label>

              <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
          </div>
        </div>
      </>
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
