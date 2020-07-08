import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonUnit from './PokemonUnit'

function PokemonList () {

    const [ nextUrl, setNextUrl ] = useState('')
    const [ prevUrl, setPrevUrl ] = useState('')
    const [ loading, setLoading ] = useState(true)
    const [ pokemonData, setPokemonData ] = useState([])
    const [ apiUrl, setApiUrl ] = useState('https://pokeapi.co/api/v2/pokemon')  


    useEffect( () => {
        
     axios.get(apiUrl)
        .then( response => {
            
             const { data:{results, next, previous}} = response
            
             setNextUrl(next)
             setPrevUrl(previous)
             capturarCada(results)
        })
                     
            
    }, [apiUrl]) 

    const capturarCada = async (data) => {
        const _packPokemon = await Promise.all(data.map( async pokemon => {
            let pokemonInfo =  axios.get(pokemon.url).then(res => res.data)
            return pokemonInfo
            }))
        
                
        setPokemonData(_packPokemon)
        setLoading(false)
    }
    
    function handlePrev(){
        if(prevUrl != null ){
            setApiUrl(prevUrl)
            console.log(prevUrl)
        }
    }
    
    function handleNext(){
        setApiUrl(nextUrl)
        console.log(nextUrl)
    }

    return (
        <>  
            { pokemonData.map( pokemon => <PokemonUnit key={pokemon.name} pokeProps={pokemon} /> ) }

            { loading ? <h1>Carregando...</h1> : <h1>Chegou</h1> }        
            
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>  
        </>
    )
}

export default PokemonList