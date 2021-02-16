import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <div>
      <header>
        <h2>Page Not Found </h2>
      </header>
      <footer>
        <Link to='/'>Back to Home</Link>
      </footer>
    </div>
  )
}
