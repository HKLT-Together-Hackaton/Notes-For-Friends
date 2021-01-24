import axios from 'axios'
import React from 'react'
import user from '../store/user'

class ChatView extends React.Component {
  constructor() {
    super()
    this.state = {
      channel: 2,
      messages: [],
      userId: null,
      content: '',
    }
  }

  async componentDidMount() {
    const {data} = await axios.get(`/api/channels/${this.state.channel}`)

    const user = await axios.get('/me')
    if (data.messages && user)
      this.setState({...this.state, messages: data.messages, userId: user.id})
  }
  render() {
    return (
      <div>
        place holder for ChatView hihi
        {this.state.messages
          ? this.state.messages.map((each) => {
              if (each.user.id !== this.state.userId)
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
        <form>
          <label>
            Post:
            <input
              type="text"
              name="content"
              onChange={(event) =>
                this.setState({...this.state, content: event.target.value})
              }
            />
          </label>
          <input
            type="submit"
            value="Submit"
            onClick={async (event) => {
              event.preventDefault()
              const {data} = await axios.post(
                `/api/messages/${this.state.channel}`,
                {
                  content: this.state.content,
                }
              )
              console.log(data, 'hihi')
              this.setState({
                ...this.state,
                messages: [...this.state.messages, data],
                content: '',
              })
            }}
          />
        </form>
      </div>
    )
  }
}

export default ChatView
