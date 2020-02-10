import React, { Component } from 'react'
import axios from 'axios'

class GroupIndex extends Component {
  state = {
  }
  // async componentDidMount() {
  //   try {
  //     const res = await axios.get('/api/trips')
  //     this.setState({ trips: res.data })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns is-mobile is-multiline'>
            <div className='column is-12-tablet is-8-mobile is-offset-2-mobile card'>
              <div className='field'>
                <label className='label'>Search for groups</label>
                <div className='control'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default GroupIndex
