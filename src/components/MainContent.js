import React, { useState } from 'react'

import PokemonList from './PokemonList'
import Cart from './Cart'

function MainContent() {  
    const [ cart, setCart ] = useState([])  

    function handleAddFunction(itemData) {
        console.log("botão rodando função")

        const holder = cart.filter( item => item.id === cart.id)

        if (holder.length > 0) {
            return console.log('já existe')
        }
        else{
             return setCart([
                ...cart,
                holder
            ])
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