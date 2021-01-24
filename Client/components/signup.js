import React from 'react'
import {connect} from 'react-redux'
import {signup} from '../store/user'

class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      Name: '',
      Interest: '',
      email: '',
      password: '',
      Image: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePic = this.handlePic.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handlePic(ImagePath) {
    this.setState({Image: ImagePath})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.signUp(this.state, this.props.history)
  }
  render() {
    return (
      <div>
        {' '}
        <h1>❣️ Sign Up ❣️</h1>
        <br />
        <form className="signupForm">
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              👋 Full Name 👋
            </label>
            <input
              type="text"
              className="form-control"
              name="Name"
              value={this.state.Name}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Interest" className="form-label">
              🎒 What are your interests? 🎒
            </label>
            <input
              type="text"
              className="form-control"
              name="Interest"
              value={this.state.Interest}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <label htmlFor="Avatar Image">🧁 Pick your Avatar! 🧁</label>
          <br /> <br />
          <div className="iconChoices">
            <button type="button" className="btn btn-secondary icon1">
              <img
                src="images/beanPic.jpeg"
                name="Image"
                value="images/beanPic.jpeg"
                onClick={() => this.handlePic('./images/beanPic.jpeg')}
                alt="avatar image"
                width="30"
              />
            </button>
            <button type="button" className="btn btn-secondary icon2">
              <img
                src="images/beanPic.jpeg"
                alt="avatar image"
                name="Image"
                value="images/beanPic.jpeg"
                onClick={() => this.handlePic('./images/beanPic.jpeg')}
                width="30"
              />
            </button>
            <button type="button" className="btn btn-secondary icon3">
              <img
                src="images/beanPic.jpeg"
                alt="avatar image"
                name="Image"
                value="images/beanPic.jpeg"
                onClick={() => this.handlePic('./images/beanPic.jpeg')}
                width="30"
              />
            </button>
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
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
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
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
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    signUp: (newUser, history) => dispatch(signup(newUser, history)),
  }
}

export default connect(null, mapDispatch)(Signup)
