import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/user'

const Navbar = (props) => {
  return (
    <nav className="header">
      <div className="row">
        <div className="col-3">
          <h1>
            <Link to="/" style={{textDecoration: 'none'}}>
              Home 🏡
            </Link>
          </h1>
        </div>
        <div className="col-3">
          <h1>
            <a href="about.html" style={{textDecoration: 'none'}}>
              About 👋
            </a>
          </h1>
        </div>
        <div className="col-3">
          <h1>
            <a href="instructions.html" style={{textDecoration: 'none'}}>
              Instructions 🔍
            </a>
          </h1>
        </div>
        <div className="col-3">
          {props.user && props.user.id ? (
            <h1>
              <Link
                to="/"
                style={{textDecoration: 'none'}}
                onClick={props.logout}
              >
                Log out 📍
              </Link>
            </h1>
          ) : (
            <h1>
              <Link to="/login" style={{textDecoration: 'none'}}>
                Login 📍
              </Link>
            </h1>
          )}
        </div>
      </div>
    </nav>
  )
}
const mapState = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapState, mapDispatch)(Navbar)
