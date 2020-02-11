import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/'>
            Home
          </Link>
          <Link className='navbar-item' to='/trips/new'>
            Create New Trip
          </Link>
          <Link className='navbar-item' to='/groups/new'>
            Create New Group
          </Link>
        </div>
        <div className='navbar-end'>
          <Link className='navbar-item' to='/auth/register'>
            Register
          </Link>
          <Link className='navbar-item' to='/auth/login'>
            Login
          </Link>
          <Link className='navbar-item' to='/myaccount'>
            My Account
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navbar
