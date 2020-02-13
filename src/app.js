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


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/trips/:id/edit' component={EditTrip} />
            <Route exact path='/trips/new' component={NewTrip}></Route>
            <Route exact path='/trips/:id' component={ShowTrip}></Route>
            <Route path='/groups/:id/edit' component={EditGroup}></Route>
            <Route path='/groups/new' component={NewGroup}></Route>
            <Route path='/trips/:id' component={ShowTrip} />
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/myaccount' component={MyAccount}></Route>
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))