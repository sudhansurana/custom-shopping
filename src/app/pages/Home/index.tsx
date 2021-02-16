import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../redux/actions'
import { Button } from 'react-bootstrap'

const Home = (props: any) => {
  const history = useHistory()
  const { isLoggedIn } = props

  const logout = () => {
    const { actions } = props
    actions.logout()
    history.push(`/`)
  }

  if (!isLoggedIn) {
    return (
      <div>
        <p>Home</p>
        <Link to='/login'>Login</Link>
      </div>
    )
  }

  return (
    <div>
      <p>Home</p>
      <Link to='/profile'>Profile</Link>{' '}
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}

function mapStateToProps (state: any, ownProps: any) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
