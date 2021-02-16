import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import './App.css'

import NotFound from './app/components/NotFound'
import Login from './app/pages/Login'
import Dashboard from './app/pages/Dashboard'
import Home from './app/pages/Home'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/dashboard' exact component={Dashboard}></Route>
        <Route path='**' component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
