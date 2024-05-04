import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

export const PokemonApp = () => {

    const dispatch = useDispatch()
    const {isLoading, pokemons, page} = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch( getPokemons() )
    }, [])
    

    return (
        <>
            <h1>Pokemon App</h1>
            <hr/>
            <span> {isLoading? 'Cargando' : 'Info:'}</span>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
            <button disabled={isLoading? true: false} onClick={() => dispatch(getPokemons(page))}>
                Next
            </button>
        </>
    )
}
