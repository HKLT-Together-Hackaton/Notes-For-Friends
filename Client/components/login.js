import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {login} from '../store/user'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password, this.props.history)
  }

  render() {
    return (
      <div>
        <div className="loginForm">
          <h1>🌟 Login 🌟</h1>
          <br />
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                📧 Email address 📧
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else 👑
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                🔐 Password 🔐
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              🌈 Submit 🌈
            </button>
          </form>
        </div>{' '}
        <br />
        <p>
          <small>
            <Link to="/signup" style={{textDecoration: 'none'}}>
              🌱 Sign Up Here 🌱
            </Link>
          </small>
        </p>
        <br />
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    login: (email, password, history) =>
      dispatch(login(email, password, history)),
  }
}
export default connect(null, mapDispatch)(Login)
