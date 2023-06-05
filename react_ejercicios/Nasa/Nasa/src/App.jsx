import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import FigureNasa from './components/FigureNasa/FigureNasa'


function App() {
  const apiKey = "Cuu6jrHdKVMfxl7Y1qw6ead8mbxP9ZKKHhiPRqAW"
  const nasaUrl="https://api.nasa.gov/planetary/apod"
  const today = new Date(Date.now()).toISOString().slice(0,10)
  const [apod, setApod]=useState({})
  const [date, setDate]=useState(today)

  useEffect(()=>{
    const getApod = async()=>{
      const data = await axios.get(
        `${nasaUrl}?date=${date}&api_key=${apiKey}`
      )
      setApod(data.data)
      console.log(data)
    }
    getApod()
  }, [date])

  const handleInput = (ev) => {
    setDate(ev.target.value.toString())
    console.log(ev.target.value)
    console.log(ev.target.value.toString())
  }

  return (
    <div className="divApp">
      <h2 className="h2Title">NASA API </h2>
      <h3>Picture of the day</h3>
      <input type="date" id="inputDate" onChange={handleInput} />
      {date>today
        ? <h3>Please select a previous date</h3>
        : <div className="">
          <FigureNasa data={apod}/>
          </div>
      }
      
    </div>
  )
}

export default App