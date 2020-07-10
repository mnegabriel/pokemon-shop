import React, { useState } from 'react'

import PokemonList from './PokemonList'
import Cart from './Cart'

function MainContent(props) {  
    const { prices } = props

    const [ cart, setCart ] = useState([])  

    function handleAddFunction(itemData) {
        const pokemonInCart = cart.filter( item => item.id === itemData.id)


        if (pokemonInCart.length > 0) {
            const cartSemEste = cart.filter( test => test.id !== pokemonInCart[0].id)
            const updatedPokemon = { ...pokemonInCart[0] }

            setCart([ ...cartSemEste, updatedPokemon ])

        }else{

            setCart([ ...cart, itemData ])
        }
    }
    
    return (
        <div className='middle'>
            <div className='list'>
                <h1>Choose your pokemon:</h1>
                <PokemonList dataForCart={handleAddFunction} dbPrices={prices}/>              
            </div>
            <div className='cart'>
                <Cart cartItems={cart}/>
            </div>
        </div>
    )
}

export default MainContent