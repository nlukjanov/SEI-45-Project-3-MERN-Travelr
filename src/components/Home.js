import React, { Component } from 'react'
import TripsIndex from './TripsIndex'
import GroupIndex from './GroupIndex'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

class Home extends Component {
  state = { tabIndex: 0 }
  render() {
    return (
      <section className='is-fullheight-with-navbar'>
        <div className='hero is-medium is-primary is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>Travelr</h1>
              <h2 className='subtitle'>Find your travel partner</h2>
            </div>
          </div>
        </div>
        <div>
          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
          >
            <TabList className='tabs is-fullwidth is-centered'>
              <Tab>Trips</Tab>
              <Tab>Groups</Tab>
            </TabList>
            <TabPanel><TripsIndex /></TabPanel>
            <TabPanel><GroupIndex /></TabPanel>
          </Tabs>
        </div>
      </section>
    )
  }
}

export default Home