import { useState } from 'react'
import './App.css'
import searchPokemon from './services/axiosPokeapi';
import PrintCard from './components/PrintCard/PrintCard';
import axios from 'axios';


function App() {
  let namePokemon=false
  const [name, setName] = useState("")
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    image: "",
    type: "",
    abilities: "",
    hp: "",
    attack: "",
    defense: "",
  });
  const [pokemonChosen, setPokemonChosen] = useState(false)

  const searchPokemon=async (name)=>{
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemon({
        name: res.data.name,
        number: res.data.id,
        image: res.data.sprites.front_default,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        type: res.data.types[0].type.name,
      });
      //namePokemon=true
      console.log(res.data)
      console.log(pokemon)
      setPokemonChosen(true)
  });
}


  return (
    <>
    <div className='divContainer'>
      <h1>Pokédex</h1>
      <input type="text" name="" id="" onChange={(event)=>{
        setName(event.target.value)
        setPokemonChosen(false)
      }}/>
      <button onClick={()=>{{(name ? (searchPokemon(name.toLowerCase())) : console.log("no"))}}}>Search Pokemon</button>
    </div>
    <div className='divCard'>
      {(pokemonChosen
        ? 
        <PrintCard data={pokemon}/>
        : 
        <div>
        <h1>Pon un Pokemon</h1>
        <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1685816976/pokeball_hc1rxy.jpg" alt="imagen pokeball"/>
        </div>
        )}
    </div>
    </>
  )
}

export default App