import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link,
  useHistory
} from 'react-router-dom'
import './App.css'

import { bindActionCreators } from 'redux'
import { connect, useDispatch, useSelector } from 'react-redux'
import * as actions from './app/redux/actions'

import NotFound from './app/components/NotFound'
import Login from './app/pages/Login'
import Dashboard from './app/pages/Dashboard'
import Home from './app/pages/Home'
import { Button } from 'react-bootstrap'
import Product from './app/pages/Product'
import { IAuthState } from './app/redux/reducers/auth.reducer'
import Products from './app/pages/Products'
import Footer from './app/components/Footer'


interface IState {
  authReducer?: IAuthState
}

function App(props: any) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: IState) => state.authReducer?.isLoggedIn);
  const history = useHistory()

  const logout = () => {
    const action: any = dispatch(actions.logout())
    action.then(() => {
      history.push('/')
    })

  }
  const logStatus = () => {
    if (isLoggedIn) {
      return <Button onClick={logout}>Logout</Button>
    } else {
      return <Link className="btn btn-outline-info" to="/login">Login</Link>
    }
  }
  const showProfileBtn = () => {
    if (isLoggedIn) {
      return (<li className="nav-item">
        <NavLink className="nav-link" exact activeClassName="active" aria-current="page" to="/profile">Profile</NavLink>
      </li>)
    }
  }
  return (
    <Router>
      <div className="page-wrapper">
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top" >
          <div className="container-fluid">
            <NavLink className="navbar-brand" exact to="/">Amazing Shop</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <NavLink className="nav-link" exact activeClassName="active" aria-current="page" to="/products">Products</NavLink>
                </li>
                {showProfileBtn()}
              </ul>
              <form className="d-flex">
                {logStatus()}
              </form>
            </div>
          </div>
        </nav>
        <main className="pt-5">
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/profile' exact component={Dashboard}></Route>
            <Route path='/products' exact component={Products}></Route>
            <Route path='/product/:productId' exact component={Product}></Route>
            <Route path='**' component={NotFound}></Route>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  )
}



export default App