import React from 'react'
import "./FigureNasa.css"

const FigureNasa = ({data}) => {
  return (
    <figure>
        <img src={data.url} alt={data.title}/>
        <div className="window">
            <h2>{data.title}</h2>
        </div>
        <div className="detailsBar">
            <p>{data.date}</p>
            <p>{data.copyright}</p>
        </div>
        <div className="explanation">
            <p>{data.explanation}</p>
        </div>
    </figure>)
}

export default FigureNasa