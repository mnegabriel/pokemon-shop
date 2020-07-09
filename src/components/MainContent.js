import React, { useState } from 'react'

import PokemonList from './PokemonList'
import Cart from './Cart'

function MainContent() {  
    const [ cart, setCart ] = useState([])  

    function handleAddFunction(itemData) {
        const pokemonInCart = cart.filter( item => item.id === itemData.id)

        console.log(itemData)
        console.log('kkkkkkkkkkkkkkkkkkkkkkk')
        console.log(pokemonInCart)


        if (pokemonInCart.length > 0) {
            const cartSemEste = cart.filter( test => test.id !== pokemonInCart[0].id)
            const updatedPokemon = { ...pokemonInCart[0] }

            console.log('já existe')
            console.log(cartSemEste)
            console.log(updatedPokemon)
            console.log('já existe')
            setCart([ ...cartSemEste, updatedPokemon ])
        }else{
            console.log(cart)
            console.log('oiaaaaaaaaaaaa')
            setCart([ ...cart, itemData ])
        }
    }
    
    return (
        <div className='middle'>
            <div className='list'>
                <h1>Choose your pokemon:</h1>
                <PokemonList dataForCart={handleAddFunction}/>              
            </div>
            <div className='cart'>
                <Cart cartItems={cart}/>
            </div>
        </div>
    )
}

export default MainContent