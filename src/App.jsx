import { useState } from 'react'
import Home from './pages/Home'
import ResumeBuilder from './pages/ResumeBuilder'
import Footer from './components/footer'
import Header from './components/header'
import './styles/App.css'

function App() {

  return (
    <div className='app-w'>
      <Header />
      {/* <Home /> */}
      <ResumeBuilder />

      <Footer />
    </div>
  )
}

export default App
