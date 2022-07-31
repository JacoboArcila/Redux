import React from 'react'
import PokemonCard from './PokemonCard';
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
  return (
    <div className='PokemonList'>
        {
            pokemons.map((pokemon, index) => (
                <PokemonCard pokemon={pokemon} key={index} />
            ))
        }
    </div>
  )
}



export default PokemonList