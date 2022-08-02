import React from 'react'
import PokemonCard from './PokemonCard';
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
  return (
    <div className='PokemonList'>
        {
            pokemons.map((pokemon) => (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))
        }
    </div>
  )
}



export default PokemonList