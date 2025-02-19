import React from 'react'
import Navigation from './Navigation'
import '../styles/Header.css'

const header = () => {
  return (
    <div className='header'>
        <h1>Resumy App</h1>
        <h2>Build your professional Resume</h2>
        <Navigation id="navigation" />
    </div>
  )
}

export default header