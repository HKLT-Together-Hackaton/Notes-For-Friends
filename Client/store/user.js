import axios from 'axios'

const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER '

const defaultUser = {}

const getUser = (user) => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

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

export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
