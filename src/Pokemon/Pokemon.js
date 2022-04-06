import React, { useState } from 'react'
import './Pokemon.css'
import axios from 'axios';
function Pokemon() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemon, setPokemon] = useState({
              name: "",
              species: "",
              img: "",
              hp: "",
              attack: "",
              type: ""
  })
  const searchPokemon = () =>{
     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((res)=>{
              setPokemon({
              name: pokemonName,
              species: res.data.species.name,
              img: res.data.sprites.front_default,
              hp: res.data.stats[0].base_stat,
              attack:res.data.stats[1].base_stat,
              type:res.data.types[0].type.name
          })
          setPokemonChosen(true)
        }
          );
  }
  
  return (
    <div className='pokemon'>
        <div className='title'>
        <h3>Pokemon Stats</h3>
        <input type='text' onChange={(e)=>setPokemonName(e.target.value)}/>
        <button onClick={searchPokemon}>Search Pokemon</button>
       </div>
       <div className='display'>
            {!pokemonChosen ? ('please choose a pokemon'):(
              <>
              <h1>{pokemon.name}</h1>
              <img src={pokemon.img} alt=''/>
              </>
            )
            }
       </div>
    </div>
  );
}

export default Pokemon