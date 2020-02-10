import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class TripsIndex extends Component {
  state = {
    select: {
      countriesList: countryList().getData(),
      selectedCountries: [],
      startingDate: new Date(),
      endingDate: new Date(),
      category: []
    }
  }
  // category: { type: mongoose.Schema.ObjectId, ref: 'Category', required: true },
  // description: { type: String, required: true },
  // participants: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  // budget: { type: String, required: true },
  // interested: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]

  async componentDidMount() {
    try {
      const res = await axios.get('/api/categories')
      console.log(res.data)
      // this.setState({ ...this.state.select, select: {
      //   ...this.state.select, 
      //   category: res.date
      // } })
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
            <div className='column is-12-tablet is-8-mobile is-offset-2-mobile card'>
              <div className='field'>
                <label className='label'>Select country</label>
                <div className='control'>
                  <Select
                    onChange={this.handleMultiChange}
                    options={this.state.select.countriesList}
                    isMulti
                    className='basic-multi-select'
                    classNamePrefix='select'
                  />
                  <DatePicker
                    dateFormat='yyyy/MMM/dd'
                    selected={this.state.select.startingDate}
                    onChange={this.setStartingDate}
                  />
                  <DatePicker
                    dateFormat='yyyy/MMM/dd'
                    selected={this.state.select.endingDate}
                    onChange={this.setEndingDate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TripsIndex
