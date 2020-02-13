import React, { Component } from 'react'
import axios from 'axios'
import Auth from '../../lib/authHelper'

class Login extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.credentials, [name]: value }
    this.setState({ credentials: data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('api/login', this.state.credentials)
      Auth.setToken(res.data.token)
      this.props.history.push('/')
    } catch (error) {
      this.setState({ error: 'Incorrect Credentials' })
    }
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <form
              onSubmit={this.handleSubmit}
              className='column is-half is-offset-one-quarter'
            >
              <h2 className='title'>Login</h2>
              <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                  <input
                    className={`input ${this.state.error ? 'is-danger' : ''}`}
                    name='email'
                    placeholder='Email'
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                  <input
                    className={`input ${this.state.error ? 'is-danger' : ''}`}
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.error && (
                  <small className='help is-danger'>{this.state.error}</small>
                )}
              </div>
              <button type='submit' className='button is-primary is-fullwidth'>
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login
