import React, { useState } from 'react'
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap'

import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import * as authActions from '../../redux/actions'

const Login = (props: any) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const history = useHistory()

  const {user, isLoading} = props;

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const { actions } = props
    actions.login({username, password}).then((res: any) => {
        history.push(`/profile`)
    });
  }
  if(isLoading) {
      return (<label>Loading...</label>)
  }
  return (
    <div className='container-fluid text-center'>
      <main className='form-signin'>
        <div className='col-md-6 col-md-offset-3'>
          <h2>Login</h2>
          <form name='form' onSubmit={handleSubmit}>
            <div
              className={
                'form-group' + (submitted && !username ? ' has-error' : '')
              }
            >
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={username}
                onChange={evt => {
                  setUsername(evt.target.value)
                }}
              />
              {submitted && !username && (
                <div className='help-block'>Username is required</div>
              )}
            </div>
            <div
              className={
                'form-group' + (submitted && !password ? ' has-error' : '')
              }
            >
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                value={password}
                onChange={evt => {
                  setPassword(evt.target.value)
                }}
              />
              {submitted && !password && (
                <div className='help-block'>Password is required</div>
              )}
            </div>
            <div className='form-group'>
              <button className='btn btn-primary'>Login</button>
              <Link to='/'>Home</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

function mapStateToProps (state: any, ownProps: any) {
  return {
    user: state.auth.user,
    isLoading: state.isLoading
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
