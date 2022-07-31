import React from 'react'
import PokemonCard from './PokemonCard';
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
  return (
    <div className='PokemonList'>
        {
            pokemons.map((pokemon, index) => (
                <PokemonCard key={index} />
            ))
        }
    </div>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList