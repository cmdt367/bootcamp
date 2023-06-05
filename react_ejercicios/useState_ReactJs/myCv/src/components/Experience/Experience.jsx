import React from 'react'
import "./Experience.css"
const Experience = ({experience}) => {
  return (
    <div className="divExperience">
      <h2>EXPERIENCE</h2>
      {experience.map((item)=>{
        return(
        <div key={item.date}>
        <h3>📁 {item.name}</h3>
        <p>🗓️ {item.date}</p>
        <p>📍 {item.where}</p>
        <p className="description">{item.description}</p>
        </div>)
      })}
      
    </div>
      
  )
}

export default Experience