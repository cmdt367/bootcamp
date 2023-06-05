import React from 'react'
import "./Hero.css"
const Hero = ({hero}) => {
  return (
    <div className="divHero">
        <img src={hero.image} alt={hero.name}/>
        <h2>{hero.name}</h2>
        <h3>{hero.surname}</h3>
        <p>{hero.city}</p>
        <div className='datosContacto'>
            <p>
            📧<a href={"mailto:" + hero.email}>
          tony@starkindustries.com
          </a></p>
            <p>📱phone: {hero.phone}</p>
            <p>🎂birthday: {hero.birthDate}</p>
            <p><a href={hero.gitHub}>GitHub</a></p>
        </div>
    </div>
  )
}

export default Hero