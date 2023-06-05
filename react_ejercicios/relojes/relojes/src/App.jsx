import { useEffect, useState } from 'react'
import './App.css'
import { DigitalClock, Countdown, Stopwatch } from './components/index.js'

const App = () => {


  return (
    <>
    <DigitalClock/>
    <Countdown/>
    <Stopwatch/>
    </>
  )
}

export default App