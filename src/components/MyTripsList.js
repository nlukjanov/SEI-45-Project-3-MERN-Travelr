import React from 'react'
import { Link } from 'react-router-dom'
var moment = require('moment')

const MyTripList = ({ data }) => {
  if (!data) return null
  return (
    <section className='section'>
      {data.map(trip => {
        return (
          <div key={trip._id} className='container card'>
            <Link to={`/trips/${trip._id}`} className='container columns'>
              <div className='column is-4'>{trip.name}</div>
              <div className='column is-3'>{trip.countries.join(', ')}</div>
              <div className='column is-3'>Start: {moment(trip.startingDate).format('Do MMM YYYY')}</div>
              <div className='column is-3'>Finish: {moment(trip.startingDate).format('Do MMM YYYY')}</div>
            </Link>
          </div>
        )
      })}
    </section>
  )
}
export default MyTripList
