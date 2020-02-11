import React, { Component } from 'react'
import axios from 'axios'

class GroupIndex extends Component {
  state = {
    groups: [],
    filteredGroups: []
  }
  async componentDidMount() {
    try {
      const res = await axios.get('/api/groups')
      this.setState({ groups: res.data, filteredGroups: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = ({ target: { value } }) => {
    const filteredGroups = this.state.groups.filter(group => {
      return group.name.toLowerCase().includes(value.toLowerCase())
    })
    console.log(filteredGroups)
    this.setState({ filteredGroups })
  }

  render() {
    console.log(this.state)
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns is-mobile is-multiline'>
            <div className='column is-12-tablet is-8-mobile is-offset-2-mobile card'>
              <div className='field'>
                <div className='control'>
                  <h2 className='title'>Search for travel groups</h2>
                  <div className='field'>
                    <div className='control'>
                      <input
                        className='input'
                        name='search'
                        placeholder='Search for travel groups'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='button is-primary is-fullwidth'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className='column is-12-tablet is-8-mobile is-offset-2-mobile card'>
              {this.state.filteredGroups.map(group => {
                return (
                  <div key={group._id} className='column'>
                    <div>
                      <div className='card'>
                        <div className='card-header'>
                          <h4 className='card-header-title'>
                            <div>{group.name}</div>
                            <div>{group.description}</div>
                          </h4>
                        </div>
                        <div className='card-image'>
                          <div>{group.imageURL}</div>
                          <div>{group.members}</div>
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

export default GroupIndex
