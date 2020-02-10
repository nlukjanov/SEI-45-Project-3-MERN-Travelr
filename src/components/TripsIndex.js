import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const budget = [
  { value: '$0 - $100', label: '$0 - $100' },
  { value: '$100 - $300', label: '$100 - $300' },
  { value: '$300 - $500', label: '$300 - $500' },
  { value: '$500 - $1000', label: '$500 - $1000' },
  { value: '$1000 - $2000', label: '$1000 - $2000' },
  { value: '$2000+', label: '$2000+' }
]
class TripsIndex extends Component {
  state = {
    select: {
      countriesList: countryList().getData(),
      selectedCountries: [],
      startingDate: new Date(),
      endingDate: new Date(),
      category: []
    },
    trips: []
  }

  addCategoryToState = res => {
    const categoryArray = []
    res.data.forEach(category => {
      const selectCategory = {}
      selectCategory['value'] = category.name
      selectCategory['label'] = category.name
      return categoryArray.push(selectCategory)
    })
    return categoryArray
  }

  async componentDidMount() {
    try {
      const res = await Promise.all([
        axios.get('/api/categories'),
        axios.get('/api/trips')
      ])
      this.setState({
        ...this.state,
        trips: res[1].data,
        ...this.state.select,
        select: {
          ...this.state.select,
          category: this.addCategoryToState(res[0])
        }
      })
    } catch (err) {
      console.log(err)
    }
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

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns is-mobile is-multiline'>
            <div className='column is-12-tablet is-12-mobile card'>
              <div className='field'>
                <div className='control'>
                  <Select
                    onChange={this.handleMultiChange}
                    options={this.state.select.countriesList}
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
                      selected={this.state.select.startingDate}
                      onChange={this.setStartingDate}
                    />
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
                    <label className='label'>End Date</label>
                    <DatePicker
                      dateFormat='yyyy/MMM/dd'
                      selected={this.state.select.endingDate}
                      onChange={this.setEndingDate}
                    />
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
                    <Select
                      onChange={this.handleMultiChange}
                      options={this.state.select.category}
                      isMulti
                      className='basic-multi-select'
                      classNamePrefix='select'
                      placeholder='Select Trip Type'
                    />
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
                    <Select
                      onChange={this.handleMultiChange}
                      options={budget}
                      isMulti
                      className='basic-multi-select'
                      classNamePrefix='select'
                      placeholder='Select Budget'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='container'></div>
            <div className='column is-12-tablet is-12-mobile card'>
              {this.state.trips.map(trip => {
                return (
                  <div
                    key={trip._id}
                    className='column'
                  >
                    <div>
                      <div className='card'>
                        <div className='card-header'>
                          <h4 className='card-header-title'>
                            <div>{trip.name}</div>
                            <div>{trip.organizer.name}</div>
                          </h4>
                        </div>
                        <div className='card-image'>
                          <div>
                            {trip.country}
                          </div>
                          <div>
                            {trip.category.name}
                          </div>
                          <div>
                            {trip.budget}
                          </div>
                          <div>
                            {trip.description}
                          </div>
                          <div>
                            {trip.startingDate}
                          </div>
                          <div>
                            {trip.endingDate}
                          </div>
                        </div>
                      </div>
                    </div>
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
