import io from 'socket.io-client'
import store from './store'
import {newMessage} from './store/messages'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')

  socket.on('new-message', (message) => {
    const currentChannel = store.getState().channel
    console.log(currentChannel)
    if (currentChannel.id === message.channelId) {
      store.dispatch(newMessage(message))
    }
  })
})

export default socket
