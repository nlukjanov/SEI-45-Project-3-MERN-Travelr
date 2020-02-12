import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import axios from 'axios'
import Auth from '../lib/authHelper'
import MyTripList from './MyTripsList'
var moment = require('moment')

class MyAccount extends Component {
  state = { tabIndex: 0, user: {} }

  async componentDidMount() {
    const res = await axios.get('api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken('token')}` }
    })
    this.setState({
      ...this.state,
      user: res.data
    })
  }

  completedTrips = trips => {
    if (!trips) return null
    return trips.filter(trip => {
      return Date.parse(trip.endingDate) < Date.now()
    })
  }

  render() {
    if (!this.state.user) return null
    if (!this.state.user.dob) return null
    const {
      dob,
      country,
      city,
      gender,
      languages,
      organizedTrips,
      joinedTrips,
      favoriteTrips
    } = this.state.user
    return (
      <section className='is-fullheight-with-navbar'>
        <div className='hero is-small is-primary is-bold'>
          <div className='hero-body is-small'>
            <div className='columns'>
              <div className='column is-4'>
                <figure className='image is-square'>
                  <img src={this.state.user.profileImage} alt='profile image' />
                </figure>
              </div>
              <div className='column is-7 is-offset-1'>
                <div className='container'>
                  {moment().diff(`${dob}`, 'years')}
                </div>
                <div className='container'>{country}</div>
                <div className='container'>{city}</div>
                <div className='container'>{gender}</div>
                <div className='container'>Languages Spoken: {languages}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
          >
            <TabList className='tabs is-fullwidth is-centered'>
              <Tab className='button'>Organized Trips</Tab>
              <Tab className='button'>Joined Trip</Tab>
              <Tab className='button'>Trips Interested In</Tab>
              <Tab className='button'>Completed Trips</Tab>
            </TabList>
            <TabPanel>
              <MyTripList data={organizedTrips} />
            </TabPanel>
            <TabPanel>
              <MyTripList data={joinedTrips} />
            </TabPanel>
            <TabPanel>
              <MyTripList data={favoriteTrips} />
            </TabPanel>
            <TabPanel>
              <MyTripList data={this.completedTrips(organizedTrips)} />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    )
  }
}

export default MyAccount
