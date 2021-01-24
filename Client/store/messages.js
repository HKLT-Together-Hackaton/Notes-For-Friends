import axios from 'axios'
import socket from '../socket'
import {setChannel} from './channel'

const initialMessages = []

const GET_MESSAGES = 'GET_MESSAGES'
const NEW_MESSAGE = 'NEW_MESSAGE'

export const getMessages = (messages) => {
  return {
    type: GET_MESSAGES,
    messages,
  }
}

export const newMessage = (message) => {
  return {type: NEW_MESSAGE, message}
}

export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      //Add api routes
      const response = await axios.get('/api/channels/2')
      const channalObject = response.data
      dispatch(setChannel(channalObject))
      const messages = channalObject.messages
      dispatch(getMessages(messages))
    } catch (error) {
      console.error(error)
    }
  }
}

export const postMessage = (message, currentUser) => {
  return async (dispatch) => {
    try {
      //Add api routes
      const response = await axios.post(
        `/api/messages/${message.channel}`,
        message
      )
      const messageResponse = {...response.data, user: currentUser}
      dispatch(newMessage(messageResponse))
      socket.emit('new-message', messageResponse)
    } catch (error) {
      console.error(error)
    }
  }
}

const messageReducer = (state = initialMessages, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages
    case NEW_MESSAGE:
      return [...state, action.message]
    default:
      return state
  }
}

export default messageReducer
