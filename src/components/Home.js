import React, { Component } from 'react'

import moduleName from 'module'

class Home extends Component {
  render() {
    return (
      <section className='is-fullheight-with-navbar'>
        <section className='hero is-small is-primary is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>Travelr</h1>
              <h2 className='subtitle'>Find your travel partner</h2>
            </div>
          </div>
        </section>
        <div className='tabs is-centered is-fullwidth'>
          <ul>
            <li className='is-active'>
              <a>Trips</a>
            </li>
            <li>
              <a>Travel Groups</a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Home
