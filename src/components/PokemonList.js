import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import PokemonUnit from './PokemonUnit'
//import { getPackPokemon } from '../services/pokemon'

function PokemonList () {

    const [ nextUrl, setNextUrl ] = useState('')
    const [ prevUrl, setPrevUrl ] = useState('')
    const [ loading, setLoading ] = useState(true)
    const [ pokemonData, setPokemonData ] = useState([])
    const [ apiUrl, setApiUrl ] = useState('https://pokeapi.co/api/v2/pokemon')  


    useEffect( () => {

        // async function fetchData() {
        //     let response = await getPackPokemon(apiUrl)
        //     console.log(response)
        //     const [ next, previous ] = response
        //     setNextUrl(next)
        //     setPrevUrl(previous)
        //     setLoading(false)
        // }
        // fetchData()
        // fetch(apiUrl).then(res => console.log(res))
        
     axios.get(apiUrl)
        .then( response => {
            console.log(response)
             const { data, data:{results, next, previous}} = response
             console.log(data)
             console.log(results)
             setNextUrl(next)
             setPrevUrl(previous)
             capturarCada(results)
        })
                     
            
    }, [apiUrl]) 

    function capturarCada(data) {
        const _packPokemon = data.map(  async pokemon => {
            let pokemonInfo =  axios.get(pokemon.url)//.then(res => res)
            return pokemonInfo
            })
        
        const usablePack = _packPokemon
        console.log(usablePack)
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
            {/* { pokemonData.map(pokemon => <PokemonUnit key={pokemon.name} pokeProps={pokemon} />)}   */}

            { loading ? <h1>Carregando...</h1> : <h1>Chegou</h1> }        
            
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>  
        </>
    )
}

export default PokemonList