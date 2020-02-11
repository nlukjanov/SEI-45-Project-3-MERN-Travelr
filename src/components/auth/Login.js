import React, { Component } from 'react'
import axios from 'axios'
import Select  from 'react-select'
import { Redirect } from 'react-router-dom'
import Home from '../Home'

class Login extends Component {

  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.credentials, [name]: value }
    this.setState({ credentials: data })
  }

  handleSubmit =  async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/login',this.state.credentials)
      if (res.status === 202){
        this.props.history.push('/')
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
      <div className="container">
        <p className="label">Login</p>
        <div className="control">
          <form onSubmit={this.handleSubmit}>
            <br />
            <input className="input" type="text" name="email" placeholder="E-mail" onChange={this.handleChange}></input>
            <br />
            <input className="input" type="text" name="password" placeholder="Password" onChange={this.handleChange}></input>
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
      </>
    )
  }
}

export default Login