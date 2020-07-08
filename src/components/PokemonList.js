import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonUnit from './PokemonUnit'

function PokemonList () {

    const [ apiResponse, setApiResponse ] = useState([])
    const [ pokemonData, setPokemonData ] = useState([])
    const [ apiURL, setApiURL ] = useState('https://pokeapi.co/api/v2/pokemon')  


    useEffect( () => {
        
        axios.get(apiURL)
            .then( response => {
                const { data, data:{results}} = response
                console.log(data)
                console.log(results)
                setApiResponse(data)
                results.forEach( pokemon => {
                    axios.get(pokemon.url)
                        .then( rexpoxta => {
                            setPokemonData([
                                ...pokemonData,
                                rexpoxta.data
                            ])
                            console.log(rexpoxta)
                        } )
                })
            } )            
            
    }, [apiURL]) 
    
    function handlePrev(){
        if(apiResponse.previous != null ){
            setApiURL(apiResponse.previous)
            console.log(apiResponse.previous)
        }
    }
    
    function handleNext(){
        setApiURL(apiResponse.next)
        console.log(apiResponse.next)
    }

    return (
        <>  
            { pokemonData.map(pokemon => <PokemonUnit key={pokemon.name} pokeProps={pokemon} />)}          
            
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>  
        </>
    )
}

export default PokemonList