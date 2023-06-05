import React from 'react'
import "./About.css"
const About = ({hero}) => {
  const {aboutMe} = hero
  console.log(aboutMe)
  return (
    <div className="divAbout">
      <h4>ABOUT ME:</h4>
      {aboutMe.map((item)=>{
        return <p key={item.info}>{item.info}</p>
        
      })}
    </div>
  )
}

export default About