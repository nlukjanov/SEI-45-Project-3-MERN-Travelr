import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import Auth from '../lib/authHelper'

const countriesList = countryList().getData()
const moment = require('moment')

const budget = [
  { value: '$0 - $100', label: '$0 - $100' },
  { value: '$100 - $300', label: '$100 - $300' },
  { value: '$300 - $500', label: '$300 - $500' },
  { value: '$500 - $1000', label: '$500 - $1000' },
  { value: '$1000 - $2000', label: '$1000 - $2000' },
  { value: '$2000+', label: '$2000+' }
]

class NewTrip extends Component {
  state = {
    trip: {
      name: '',
      countries: [],
      startingDate: '',
      endingDate: '',
      category: '',
      description: '',
      budget: []
    },
    categories: [],
    errors: {}
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/categories')
      this.setState({
        ...this.state,
        categories: res.data
      })
    } catch (err) {
      console.log(err)
      this.setState({ errors: err.response.data.errors })
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      ...this.state,
      trip: { ...this.state.trip, [name]: value }
    })
  }

  handleCountriesSelection = selected => {
    const selectedCountries = selected ? selected.map(item => item.label) : []
    this.setState({
      ...this.state,
      trip: { ...this.state.trip, countries: selectedCountries }
    })
  }

  handleBudgetSelection = selected => {
    const selectedBudget = selected ? selected.map(item => item.label) : []
    this.setState({
      ...this.state,
      trip: { ...this.state.trip, budget: selectedBudget }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/trips', this.state.trip, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/')
    } catch (error) {
      this.setState({ errors: error.response.data.errors })
    }
  }

  render() {
    // console.log(this.state)
    return (
      <section className='section'>
        <section className="section">
          <div className='container'>
            <div className='columns'>
              <form
                onSubmit={this.handleSubmit}
                className='column is-6 is-offset-3'
              >
                <h2 className='title'>Create New Trip</h2>
                <div className='field'>
                  <label className='label'>Make a name for your trip</label>
                  <div className='control'>
                    <input
                      className={`input ${this.state.errors.name ? 'is-danger' : ''}`}
                      placeholder='Name'
                      name='name'
                      onChange={this.handleChange}
                      value={this.state.trip.name}
                    />
                  </div>
                  {this.state.errors.name && <small className="has-text-danger">{this.state.errors.name}</small>}
                </div>
                <div className='field'>
                  <div className='control' style={this.state.errors.countries ? { border: '1px solid red', borderRadius: '5px' } : {} }>
                    <Select
                      name='countries'
                      onChange={this.handleCountriesSelection}
                      options={countriesList}
                      isMulti
                      className='basic-multi-select'
                      classNamePrefix='select'
                      placeholder='Select Destination'
                      required
                    />
                  </div>
                  {this.state.errors.countries && <small className="has-text-danger">{this.state.errors.countries}</small>}
                </div>
                <div className='field'>
                  <div className='control'>
                    <label className='label'>Start Date</label>
                    <input
                      className={`input ${this.state.errors.name ? 'is-danger' : ''}`}
                      type='date'
                      name='startingDate'
                      onChange={this.handleChange}
                      value={this.state.trip.startingDate}
                      min={moment(new Date()).format('YYYY-MM-DD')}
                      max={this.state.trip.endingDate}
                    ></input>
                  </div>
                  {this.state.errors.startingDate && <small className="has-text-danger">{this.state.errors.startingDate}</small>}
                </div>
                <div className='field'>
                  <div className='control'>
                    <label className='label'>End Date</label>
                    <input
                      className={`input ${this.state.errors.name ? 'is-danger' : ''}`}
                      type='date'
                      name='endingDate'
                      onChange={this.handleChange}
                      value={this.state.trip.endingDate}
                      min={this.state.trip.startingDate}
                    ></input>
                  </div>
                  {this.state.errors.endingDate && <small className="has-text-danger">{this.state.errors.endingDate}</small>}
                </div>
                <div className='field'>
                  <label className='label'>Category</label>
                  <div className='control'>
                    <select
                      className={`input ${this.state.errors.name ? 'is-danger' : ''}`}
                      placeholder='Category'
                      name='category'
                      onChange={this.handleChange}
                      value={this.state.trip.category}
                    >
                      <option key disabled value=''>
                        Pick A Category
                      </option>
                      {this.state.categories.map(category => {
                        return (
                          <option
                            key={category._id}
                            value={`${category._id}`}
                          >{`${category.name}`}</option>
                        )
                      })}
                    </select>
                  </div>
                  {this.state.errors.category && <small className="has-text-danger">{this.state.errors.category}</small>}
                </div>
                <div className='field'>
                  <label className='label'>Budget</label>
                  <div className='control' style={this.state.errors.budget ? { border: '1px solid red', borderRadius: '5px' } : {} }>
                    <Select
                      name='budget'
                      onChange={this.handleBudgetSelection}
                      options={budget}
                      isMulti
                      className='basic-multi-select'
                      classNamePrefix='select'
                      placeholder='Select Budget'
                    />
                  </div>
                  {this.state.errors.budget && <small className="has-text-danger">{this.state.errors.budget}</small>}
                </div>
                <div className='field'>
                  <label className='label'>Description</label>
                  <div className='control'>
                    <textarea
                      className={`textarea ${this.state.errors.description ? 'is-danger' : ''}`}
                      placeholder='Description'
                      name='description'
                      onChange={this.handleChange}
                      value={this.state.trip.description}
                    />
                  </div>
                  {this.state.errors.description && <small className="has-text-danger">{this.state.errors.description}</small>}
                </div>
                <div className='field'>
                  <button
                    type='submit'
                    className='button is-fullwidth is-warning'
                  >
                    Make my trip! 🌍
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default NewTrip
