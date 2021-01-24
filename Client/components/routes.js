import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Login from './login'
import Signup from './signup'
import About from './About'
import Instructions from './Instructions'
import ChatView from './chatView'
import {me} from '../store/user'

class Routes extends React.Component {
  componentDidMount() {
    this.props.getMe()
  }
  render() {
    return (
      <switch>
        {/* routes go here */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/About" component={About} />
        <Route path="/Instructions" component={Instructions} />
        {this.props.user && this.props.user.id ? (
          <Route exact path="/" component={ChatView} />
        ) : (
          <Route exact path="/" component={Login} />
        )}
      </switch>
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
    getMe: () => dispatch(me()),
  }
}

export default connect(mapState, mapDispatch)(Routes)
