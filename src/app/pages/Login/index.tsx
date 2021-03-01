import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap'

import { Link, useHistory } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions'
import './index.css'
import { IAuthState } from '../../redux/reducers/auth.reducer';

interface IState {
  authReducer?: IAuthState
}

const Login = (props: any) => {
  
  const dispatch = useDispatch();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const history = useHistory()
  const inputEl = useRef(null);
  const user = useSelector((state: IState) => state.authReducer?.user);

  const { isLoading } = props;

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const action: any = dispatch(actions.login({ username, password }))
    console.log('action', action)
    action.then((res: any) => {
      console.log('res', res)
      history.push(`/profile`)
    })
  }
  if (isLoading) {
    return (<label>Loading...</label>)
  }
  /* useEffect(() => {
    console.log('useEffect->', inputEl.current)
    if(inputEl.current) {
      inputEl.current.focus();
    }    
  },[]) */
  return (
    <div className='text-center align-middle p-5'>
      <div className='form-signin'>
        <form name='form' className="login-form" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div
            className={
              'form-group' + (submitted && !username ? ' has-error' : '')
            }
          >
            <label htmlFor='username' className="visually-hidden">Username</label>
            <input
              ref={inputEl}
              type='text'
              className='form-control'
              name='username'
              placeholder="Email address" required autoFocus
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
            <label htmlFor='password' className="visually-hidden">Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              value={password}
              placeholder="Password" required autoFocus
              onChange={evt => {
                setPassword(evt.target.value)
              }}
            />
            {submitted && !password && (
              <div className='help-block'>Password is required</div>
            )}
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"></input> Remember me
            </label>
          </div>
          <div className='form-group'>
            <button className='btn btn-primary w-100'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
