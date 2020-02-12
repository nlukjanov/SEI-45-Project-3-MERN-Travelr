import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import MyAccount from './components/MyAccount'
import NewTrip from './components/NewTrip'
import ShowTrip from './components/ShowTrip'
import EditTrip from './components/EditTrip'
import NewGroup from './components/NewGroup'
import EditGroup from './components/EditGroup'
import SecureRoute from './lib/SecureRoute'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <SecureRoute path='/trips/:id/edit' component={EditTrip} />
            <SecureRoute path='/trips/new' component={NewTrip} />
            <Route path='/trips/:id' component={ShowTrip}></Route>
            <SecureRoute path='/groups/:id/edit' component={EditGroup} />
            <SecureRoute path='/groups/new' component={NewGroup} />
            <Route path='/register' component={Register}></Route>
            <Route path='/login' component={Login}></Route>
            <SecureRoute path='/myaccount' component={MyAccount} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
