import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import axios from 'axios'
import Auth from '../lib/authHelper'

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

  // name: { type: String, required: true },
  // email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  // dob: { type: Date, required: true },
  // country: { type: String, required: true },
  // city: { type: String, required: true },
  // gender: { type: String, enum: ['Male', 'Female'], required: true },
  // languages: { type: Array, required: true },
  // profileImage: { type: String, required: true },
  // likes: [ likeSchema ],
  // comments: [ commentSchema ]

  render() {
    const {dob, country, city, gender, languages} = this.state.user
    return (
      <section className='is-fullheight-with-navbar'>
        <div className='hero is-medium is-primary is-bold'>
          <div className='hero-body'>
            <div className='columns'>
              <div className='column is-4'>
                <figure>{this.state.user.profileImage}</figure>
              </div>
              <div className='column is-7 is-offset-1'>
                <div className='container'>{dob}</div>
                <div className='container'>{country}</div>
                <div className='container'>{city}</div>
                <div className='container'>{gender}</div>
                <div className='container'>{languages}</div>
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
              <Tab>Created Trips</Tab>
              <Tab>Joined Trip</Tab>
              <Tab>Trips Interested In</Tab>
              <Tab>Completed Trips</Tab>
            </TabList>
            <TabPanel>Tab1</TabPanel>
            <TabPanel>Tab 2</TabPanel>
            <TabPanel>Tab 3</TabPanel>
            <TabPanel>Tab 4</TabPanel>
          </Tabs>
        </div>
      </section>
    )
  }
}

export default MyAccount
