import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import ImageUpload from '../ImageUpload'

const options = [
  { value: 'English', label: 'English' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Russian', label: 'Russian' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Turkish', label: 'Turkish' }
]

class Register extends Component {
  state = {
    credentials: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      dob: Date(),
      country: '',
      city: '',
      gender: 'Male',
      languages: [],
      profileImage: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.credentials, [name]: value }
    this.setState({ credentials: data })
  }

  handleMultiSelect = lang => {
    if (!lang)
      return this.setState({
        credentials: { ...this.state.credentials, languages: [] }
      })
    const newLanguages = lang.map(language => language.value)
    const data = { ...this.state.credentials, languages: newLanguages }
    this.setState({ credentials: data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/register', this.state.credentials)
      if (res.status === 201) {
        this.props.history.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
        <section className='section'>
          <div className='container'>
            <p className='label'>Register</p>
            <div className='control'>
              <form onSubmit={this.handleSubmit}>
                <input
                  className='input'
                  type='text'
                  name='name'
                  placeholder='Full Name'
                  onChange={this.handleChange}
                ></input>
                <br />
                <input
                  className='input'
                  type='text'
                  name='email'
                  placeholder='E-mail'
                  onChange={this.handleChange}
                ></input>
                <br />
                <input
                  className='input'
                  type='text'
                  name='password'
                  placeholder='Password'
                  onChange={this.handleChange}
                ></input>
                <br />
                <input
                  className='input'
                  type='text'
                  name='passwordConfirmation'
                  placeholder='Confirm password'
                  onChange={this.handleChange}
                ></input>
                <br />
                <input
                  className='button'
                  type='date'
                  name='dob'
                  placeholder='Date of Birth '
                  onChange={this.handleChange}
                ></input>
                <br />
                <input
                  className='input'
                  type='text'
                  name='country'
                  placeholder='Country'
                  onChange={this.handleChange}
                ></input>
                <br />
                <input
                  className='input'
                  type='text'
                  name='city'
                  placeholder='City'
                  onChange={this.handleChange}
                ></input>
                <br />
                <label>Gender</label>
                <br />
                <select name='gender' onChange={this.handleChange}>
                  <option disabled>Select a Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <br />
                <label>Languages</label>
                <br />
                <Select
                  name='languages'
                  isMulti
                  options={options}
                  className='basic-multi-select'
                  onChange={this.handleMultiSelect}
                />
                <br />
                <label>Profile Image</label>
                <ImageUpload
                  handleChange={this.handleChange}
                  fieldName='profileImage'
                  labelClassName='my-class'
                />
                <br />
                <br />
                <button className='button'>Join Travelr</button>
              </form>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Register
