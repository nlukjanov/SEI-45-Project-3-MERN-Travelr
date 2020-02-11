import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/trips/new' component={Home}></Route>
            <Route exact path='/groups/new' component={Home}></Route>
            <Route exact path='/auth/register' component={Register}></Route>
            <Route exact path='/auth/login' component={Login}></Route>
            <Route exact path='/myaccount' component={Home}></Route>
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))