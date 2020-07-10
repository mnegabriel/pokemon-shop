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
          
        axios.get(apiUrl)
        .then( response => {            
            const { data:{results, next, previous}} = response
            
            setNextUrl(next)
            setPrevUrl(previous)
            capturarCada(results)
        }) 
        
        const capturarCada = async (data) => {
            const _packPokemon = await Promise.all(data.map( async pokemon => {
                let pokemonInfo =  axios.get(pokemon.url).then(res => res.data)
                return pokemonInfo
            }))      
                        
            setPokemonData(_packPokemon)
            setLoading(false)                
        }
        
        // function addPrice(instance){
        //     console.log(instance)
        //     console.log(dbPrices)
        //     console.log('aaaaaaaaaacccccccccccccccccccccccccccccccccccccc')
        //     const seraEin = instance.forEach( pokemon => {
        //         let table = dbPrices.filter( preco => preco.id === pokemon.id )
                
        //         console.log(pokemon.id)
        //         console.log(table)
        //         return { ...pokemon, table}
    
        //     })        
            
        //     console.log(seraEin)
        //     console.log('aaaaaaaaaaaaa')
        //     console.log(dbPrices)
        //     return 
        // }


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
    // Data transfer
    //-----------------------
    
    const { dataForCart } = props
    function escalaPokemon(pokemonData) {
        dataForCart(pokemonData)
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