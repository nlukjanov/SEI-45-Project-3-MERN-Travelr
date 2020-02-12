import React, { Component } from 'react'
import axios from 'axios'

class ShowTrip extends Component {

  state = {
    data: {

    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`http://localhost:8000/api/trips/${this.props.match.params.id}`)
      this.setState({ data: res.data })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default ShowTrip