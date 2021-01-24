import axios from 'axios'

const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_CHANNEL = 'ADD_CHANNEL'
const REMOVE_CHANNEL = 'REMOVE_CHANNEL'

const defaultUser = {}

const getUser = (user) => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const addChannel = (channel) => ({type: ADD_CHANNEL, channel})
const removeChannel = (channelId) => ({type: REMOVE_CHANNEL, channelId})

export const me = () => async (dispatch) => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch {
    console.error(err)
  }
}

export const login = (email, password, history) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/login', {email, password})
    dispatch(getUser(res.data))
    history.push('/')
  } catch (error) {
    console.error(error)
    return dispatch(getUser({error: authError}))
  }
}

export const signup = (newUser, history) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/signup', newUser)
    dispatch(getUser(res.data))
    history.push('/')
  } catch (error) {
    console.error(error)
    return dispatch(getUser({error: authError}))
  }
}

export const logout = () => async (dispatch) => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
  } catch (error) {
    console.error(err)
  }
}

export const addChannelToUser = (channelId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/user/${channelId}`)
      dispatch(addChannel(response.data))
    } catch (error) {
      console.error(err)
    }
  }
}

export const removeChannelFromUser = (channelId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/user/${channelId}`)
      dispatch(removeChannel(channelId))
    } catch (error) {
      console.error(err)
    }
  }
}

export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case ADD_CHANNEL:
      return {...state, channel: [...state.channel, action.channel]}
    case REMOVE_CHANNEL:
      const remainChannels = state.channel.filter(
        (channel) => channel.id !== channelId
      )
      return {...state, channel: remainChannels}
    default:
      return state
  }
}
