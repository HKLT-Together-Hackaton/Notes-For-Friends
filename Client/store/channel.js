import axios from 'axios'

const defaultChannel = {}

const SET_CHANNEL = 'SET_CHANNEL'

const setChannel = (channel) => ({type: SET_CHANNEL, channel})

const fetchChannel = (channelId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/channels/${channelId}`)
      dispatch(setChannel(response.data || defaultChannel))
    } catch (error) {
      console.error(error)
    }
  }
}

const channelReducer = (state = defaultChannel, action) => {
  switch (action.type) {
    case SET_CHANNEL:
      return action.channel
    default:
      return state
  }
}

export default channelReducer
