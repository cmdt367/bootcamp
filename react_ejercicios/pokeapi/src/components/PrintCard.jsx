import React from 'react'
import "./PrintCard.css"
const PrintCard = (data) => {
   console.log(data.data)
    const {name, number, image, type, abilities, hp, attack, defense} = data.data
  return (
    <div className='divCardPokemon'> 
        <div className='numeroynombre'>
        <h3>{number}</h3>
        <h3>{name}</h3>
        </div>
        <img src={image} alt={name}/>
        <div className='infoPoke'>
            <p>Tipo: {type}</p>
            <p>{abilities}</p>
            <p>HP: {hp}</p>
            <p>Ataque: {attack}</p>
            <p>Defensa: {defense}</p>
        </div>
        
    </div>
  )
}

export default PrintCard