import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {

  state = {
    isNavbarOpen: false
  }

  toggleNavbar = () => {
    this.setState({ isNavbarOpen: !this.state.isNavbarOpen })
  }
  
  render() {
    const { isNavbarOpen } = this.state
    return (
      <nav className='navbar is-dark'>
        <div className="container">
          <div className="navbar-brand">
            <Link className='navbar-item' to='/'>Home</Link>
            <a className={`navbar-burger ${isNavbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={`navbar-menu ${isNavbarOpen ? 'is-active' : ''}`}>
            <div className='navbar-end'>
              <Link className='navbar-item' to='/trips/new'>Create New Trip</Link>
              <Link className='navbar-item' to='/groups/new'>Create New Group</Link>
              <Link className='navbar-item' to='/auth/register'>Register</Link>
              <Link className='navbar-item' to='/auth/login'>Login</Link>
              <Link className='navbar-item' to='/myaccount'>My Account</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
