import React from 'react'
import "./Education.css"
const Education = ({education}) => {
  return (
    <div className="divEducation">
      <h2>EDUCATION</h2>
      <div className="divContenido">
      {education.map((item)=>{
        return <div key={item.name}>
          <h3>📖 {item.name}</h3>
          <p>🗓️ {item.date}</p>
          <p>📍{item.where}</p>
        </div>
      })}
      </div>
    </div>
  )
}

export default Education