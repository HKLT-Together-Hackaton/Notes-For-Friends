import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Login from './login'
import Signup from './signup'
import About from './About'
import Instructions from './Instructions'
import ChatView from './chatView'

const Routes = (props) => {
  return (
    <switch>
      {/* routes go here */}
      <Route to="/login" component={Login} />
      <Route to="/signup" component={Signup} />
      <Route to="/About" component={About} />
      <Route to="/Instructions" component={Instructions} />
      {props.user && props.user.id ? (
        <Route to="/" component={ChatView} />
      ) : (
        <Route to="/" component={Login} />
      )}
    </switch>
  )
}

const mapState = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapState, mapDispatch)(Routes)
