import React, { useState } from 'react'

import PokemonList from './list/PokemonList'
import Cart from './cart/Cart'

function MainContent(props) {
    // pulling prices from App.js  
    const { prices } = props

    // assingning the cart content to be sent down to Cart.js 
    const [ cart, setCart ] = useState([])  

    //function the handles the information that travelled from 
    // PokemonUnit > PokemonList > MAINCONTENT > Cart >CartItem
    function handleAddFunction(itemData) {

        // holding the pokemon data in case it's already in the cart
        const pokemonInCart = cart.filter( item => item.id === itemData.id)

        // IF THE POKEMON IS ALREADY IN THE CART
        if (pokemonInCart.length > 0) {
            const cartSemEste = cart.filter( test => test.id !== pokemonInCart[0].id)
            const updatedPokemon = { ...pokemonInCart[0], units: pokemonInCart[0].units + itemData.units }

            setCart([ ...cartSemEste, updatedPokemon ])

        }else{ // IF NOT IN THE CART

            setCart([ ...cart, itemData ])
        }
    }

    function handleSubFunction(itemData) {
        const pokemonInCart = cart.filter( item => item.id === itemData.id)
        const cartSemEste = cart.filter( test => test.id !== pokemonInCart[0].id)

        if(pokemonInCart[0].units === 1){

            setCart([ ...cartSemEste ])


        }else{

            const updatedPokemon = { ...pokemonInCart[0], units: pokemonInCart[0].units - itemData.units }
            setCart([ ...cartSemEste, updatedPokemon ])
        }

    }
    
    return (
        <div className='middle'>
            <div className='list'>
                <h1>Choose your pokemon:</h1>
                <PokemonList dataForCart={handleAddFunction} dbPrices={prices}/>              
            </div>
            <div className='cartSection'>
                <Cart cartItems={cart} cartItemButton={handleSubFunction}/>
            </div>
        </div>
    )
}

export default MainContent