import React, { Component } from 'react'
import axios from 'axios'
import MapGL, { Marker, Popup } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import Auth from '../lib/authHelper'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN
class ShowTrip extends Component {
  state = {
    data: {
      countries: [],
      budget: [],
      participants: [],
      interested: [],
      organizer: {},
      country: '',
      startingDate: '',
      endingDate: '',
      category: {},
      description: '',
      likes: [],
      comments: []
    },
    viewport: {
      latitude: 0,
      longitude: 0,
      zoom: 7
    }
  }

  async componentDidMount() {
    try {
      this.getTripData()
    } catch (error) {
      console.log(error)
    }
  }

  async getTripData() {
    const res = await axios.get(
      `http://localhost:8000/api/trips/${this.props.match.params.id}`
    )
    this.setState({ data: res.data })
  }

  calculateAge() {
    const dob = new Date(this.state.data.organizer.dob)
    const today = new Date()
    let age = today.getFullYear() - dob.getFullYear()
    const m = today.getMonth() - dob.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age = age - 1
    }
    console.log(age)
    return age
  }

  mapRef = React.createRef()
  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 3000 }
    this.setState({
      viewport: {
        latitude: viewport.latitude,
        longitude: viewport.longitude,
        zoom: viewport.zoom
      }
    })

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    })
  }

  handleJoin = async () => {
    console.log(this.props.match.params.id)
    try {
      const res = await axios.get(
        `/api/trips/${this.props.match.params.id}/join`,
        {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        }
      )
      this.getTripData()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (!this.state.data.organizer.name) {
      return null
    }
    console.log(this.state)
    return (
      <div>
        <section className='container'>
          <div className='container'>
            <div>
              <img src={this.state.data.organizer.profileImage} />
            </div>
            <br />
            <div>
              <h3>Organizer</h3>
              <br />
              <label>Name: {this.state.data.organizer.name}</label>
              <br />
              <label>Gender: {this.state.data.organizer.gender}</label>
              <br />
              <label>Age: {this.calculateAge()}</label>
              <br />
              <label>Email: {this.state.data.organizer.email}</label>
              <br />
              <label>
                Country of Origin: {this.state.data.organizer.country}
              </label>
              <br />
              <label>
                Spoken languages:{' '}
                {this.state.data.organizer.languages.map((lang, index) => {
                  if (
                    this.state.data.organizer.languages.length - 1 ===
                    index
                  ) {
                    return lang
                  }
                  return lang + ', '
                })}
              </label>
              <br />
            </div>
          </div>
        </section>
        <section className='container'>
          <div>
            <label>Title: {this.state.data.name}</label>
            <br />
            <label>Countries:</label>
            <div>
              {this.state.data.countries.map((country, index) => {
                return <div key={index}>{country}</div>
              })}
            </div>
            <br />
            <label>
              Budget:{' '}
              {this.state.data.budget.map((budget, index) => {
                return <div key={index}>{budget}</div>
              })}
            </label>
            <br />
            <label>Starting Date: {this.state.data.startingDate}</label>
            <br />
            <label>Ending Date: {this.state.data.endingDate}</label>
            <br />
            <label>Category: {this.state.data.category.name}</label>
            <br />
            <label>Description: {this.state.data.description}</label>
            <br />
            <button onClick={this.handleJoin} className='button'>
              Join the Trip
            </button>
            <br />
            <label>Participants:</label>
            <div>
              {this.state.data.participants.map(participant => {
                return <div key={participant._id}>{participant.user.name}</div>
              })}
            </div>
            <br />
          </div>
          <div>
            <MapGL
              mapboxApiAccessToken={mapboxToken}
              ref={this.mapRef}
              {...this.state.viewport}
              height={'60vh'}
              width={'40vh'}
              mapStyle='mapbox://styles/mapbox/streets-v11'
              onViewportChange={this.handleViewportChange}
            >
              <Geocoder
                mapRef={this.mapRef}
                onViewportChange={this.handleGeocoderViewportChange}
                mapboxApiAccessToken={mapboxToken}
              />
              {/* Use <Marker /> here to mark things on map  */}
            </MapGL>
          </div>
        </section>
      </div>
    )
  }
}

export default ShowTrip
