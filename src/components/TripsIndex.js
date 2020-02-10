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
    }
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
      const res = await axios.get('/api/categories')
      this.setState({
        ...this.state.select,
        select: {
          ...this.state.select,
          category: this.addCategoryToState(res)
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
            <div className='column is-12-tablet is-8-mobile is-offset-2-mobile card'>
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
                  <Select
                    onChange={this.handleMultiChange}
                    options={this.state.select.category}
                    isMulti
                    className='basic-multi-select'
                    classNamePrefix='select'
                    placeholder='Select Trip Type'
                  />
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
        </div>
      </section>
    )
  }
}

export default TripsIndex
