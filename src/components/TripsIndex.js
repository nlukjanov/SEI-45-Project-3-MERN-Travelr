import React, { Component } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from 'react-router-dom'

const moment = require('moment')

const budget = [
  { value: '$0 - $100', label: '$0 - $100' },
  { value: '$100 - $300', label: '$100 - $300' },
  { value: '$300 - $500', label: '$300 - $500' },
  { value: '$500 - $1000', label: '$500 - $1000' },
  { value: '$1000 - $2000', label: '$1000 - $2000' },
  { value: '$2000+', label: '$2000+' }
]

const countriesList = countryList().getData()

class TripsIndex extends Component {
  state = {
    select: {
      countries: [],
      startingDate: '',
      endingDate: '',
      category: '',
      budget: []
    },
    startingDate: new Date(),
    endingDate: new Date(),
    categories: [],
    trips: null,
    filteredTrips: []
  }

  async componentDidMount() {
    const { propsData } = this.props
    this.setState({ ...this.state, ...propsData })
  }

  setStartingDate = date => {
    this.setState({
      ...this.state.select,
      select: {
        ...this.state.select,
        startingDate: date
      }
    })
  }

  setEndingDate = date => {
    this.setState({
      ...this.state.select,
      select: {
        ...this.state.select,
        endingDate: date
      }
    })
  }

  handleCountriesSelection = selected => {
    const countries = selected ? selected.map(item => item.label) : []
    this.setState({
      ...this.state,
      select: { ...this.state.select, countries: countries }
    })
  }

  handleBudgetSelection = selected => {
    const selectedBudget = selected ? selected.map(item => item.label) : []
    this.setState({
      ...this.state,
      select: { ...this.state.select, budget: selectedBudget }
    })
  }

  handleCategorySelection = selected => {
    const selectedCategory = selected ? selected.value : []
    this.setState({
      ...this.state,
      select: { ...this.state.select, category: selectedCategory }
    })
  }

  handleFiltering = () => {
    const { startingDate, endingDate, category, countries } = this.state.select
    const filteredTrips = this.state.trips.filter(trip => {
      const countriesMatch =
        countries.length === 0
          ? true
          : trip.countries.some(country => countries.includes(country))

      const dateMatch = () => {
        if (startingDate && !endingDate) {
          if (Date.parse(startingDate) <= Date.parse(trip.startingDate))
            return true
        } else if (endingDate && !startingDate) {
          if (Date.parse(endingDate) >= Date.parse(trip.startingDate))
            return true
        } else if (startingDate && endingDate) {
          if (
            Date.parse(startingDate) <= Date.parse(trip.startingDate) &&
            Date.parse(endingDate) >= Date.parse(trip.startingDate)
          )
            return true
        } else if (!startingDate && !endingDate) {
          return true
        }
      }

      const categoryMatch = !category ? true : trip.category.name === category

      const budgetMatch =
        this.state.select.budget.length === 0
          ? true
          : trip.budget.some(budget =>
            this.state.select.budget.includes(budget)
          )
      if (countriesMatch && categoryMatch && budgetMatch && dateMatch())
        return trip
    })
    this.setState({ ...this.state, filteredTrips })
  }

  render() {
    console.log('State:', this.state.filteredTrips, 'Props:', this.props.propsData.filteredTrips)
    const tripData = this.state.trips ? this.state : this.props.propsData
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns is-mobile is-multiline'>
            <div className='column is-12-tablet is-12-mobile card'>
              <div className='field'>
                <h2 className='title'>Search for Trips</h2>
                <div className='control'>
                  <Select
                    name='countries'
                    onChange={this.handleCountriesSelection}
                    options={countriesList}
                    isMulti
                    className='basic-multi-select'
                    classNamePrefix='select'
                    placeholder='Select Destination'
                  />
                </div>
              </div>
              <div className='is-mobile'>
                <div className='field'>
                  <div className='control'>
                    <label className='label'>Start Date</label>
                    <DatePicker
                      dateFormat='yyyy/MMM/dd'
                      selected={tripData.select.startingDate}
                      onChange={this.setStartingDate}
                    />
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
                    <label className='label'>End Date</label>
                    <DatePicker
                      dateFormat='yyyy/MMM/dd'
                      selected={tripData.select.endingDate}
                      onChange={this.setEndingDate}
                    />
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
                    <Select
                      name='category'
                      onChange={this.handleCategorySelection}
                      options={tripData.categories}
                      className='basic-single'
                      classNamePrefix='select'
                      placeholder='Select Trip Type'
                    />
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
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
                </div>
                <div className='field'>
                  <button
                    onClick={this.handleFiltering}
                    className='button is-fullwidth'
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className='container'></div>
            <div className='column is-12-tablet is-12-mobile card'>
              {tripData.filteredTrips.map(trip => {
                return (
                  <div key={trip._id} className='column'>
                    <Link to={`/trips/${trip._id}`}>
                      <div className='card'>
                        <div className='card-header'>
                          <h4 className='card-header-title'>
                            <div>{trip.name}</div>
                          </h4>
                          <h4 className='card-header-title'>
                            <div>{trip.organizer.name}</div>
                          </h4>
                        </div>
                        <div>
                          <div>
                            {trip.countries.map((country, i) => {
                              return <div key={i}>{country}</div>
                            })}
                          </div>
                          <div>{trip.category.name}</div>
                          <div>{trip.budget}</div>
                          <div>{trip.description}</div>
                          <div>
                            {moment(trip.startingDate).format('Do MMM YYYY')}
                          </div>
                          <div>
                            {moment(trip.endingDate).format('Do MMM YYYY')}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TripsIndex