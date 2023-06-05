import React from 'react'
import "./More.css"

const More = ({languages, habilities, volunteer}) => {
  console.log(languages)
  return (
    <div className='moreInfo'>
    <div className="divLanguages">
      <h2>LANGUAGES</h2>
      <h3>{languages.language}</h3>
      <p>✏️ {languages.wrlevel}</p>
      <p>💭 {languages.splevel}</p>
    </div>
    <div className='divHabilities'>
      <h2>HABILITIES</h2>
      {habilities.map((item)=>{
        return <p>🛠️ {item}</p>
      })}
    </div>
    <div className="divVolunteer">
      <h2>VOLUNTEER</h2>
      {volunteer.map((item)=>{
        return(
        <div key={item.name}>
        <h3>{item.name}</h3>
        <p>📍 {item.where}</p>
        <p className='infoDescription'>{item.description}</p>
        </div>)
      })
      }
    </div>
    </div>
  )
}

export default More