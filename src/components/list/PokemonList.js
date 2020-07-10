import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonUnit from './PokemonUnit'

function PokemonList (props) {    
    
    const { dbPrices } = props 

    const [ nextUrl, setNextUrl ] = useState('')
    const [ prevUrl, setPrevUrl ] = useState('')
    const [ loading, setLoading ] = useState(true)
    const [ pokemonData, setPokemonData ] = useState([])
    const [ apiUrl, setApiUrl ] = useState('https://pokeapi.co/api/v2/pokemon')  
    
    //-----------------------
    // List Logic
    //-----------------------
    
    useEffect( () => {
        
        // first GET request, getting pokemon URLs and pagination
        axios.get(apiUrl)
        .then( response => {            
            const { data:{results, next, previous}} = response
            
            setNextUrl(next)
            setPrevUrl(previous)
            capturarCada(results)
        }) 
        

        // 'Second' GET request, going through the objects and using axios in each
        const capturarCada = async (data) => {
            const _packPokemon = await Promise.all(data.map( async pokemon => {
                let pokemonInfo =  axios.get(pokemon.url).then(res => res.data)
                return pokemonInfo
            }))      
                        
            setPokemonData(_packPokemon)
            setLoading(false)                
        }        
        
    }, [apiUrl]) 
    
    function handlePrev(){
        if(prevUrl != null ){
            setLoading(true)
            setApiUrl(prevUrl)
            console.log(prevUrl)
        }
    }
    
    function handleNext(){
        setLoading(true)
        setApiUrl(nextUrl)
        console.log(nextUrl)
    }
    
    // END List Logic
    
    //-----------------------
    // Data transfer to from PokemonList.js to MainContent.js
    //-----------------------
    
    const { dataForCart } = props
    function escalaPokemon(dados) {
        dataForCart(dados)
    }
    //-----------------------

    return (
        <>  

            <div className="pagination">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>  
            </div>

            <div className="deck">
                { 
                    loading 
                        ? <h1>Carregando...</h1> 
                        : pokemonData.map( pokemon => {
                            let custo = dbPrices[pokemon.id].price
                            return <PokemonUnit key={pokemon.id} pokeProps={pokemon} custo={custo} grabPokeInfo={escalaPokemon}/> 
                        }) 
                }
            </div>

            <div className="pagination">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>  
            </div>
                  
        </>
    )
}

export default PokemonList