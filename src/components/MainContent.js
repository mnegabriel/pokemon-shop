import React from 'react'

import PokemonList from './PokemonList'
import Cart from './Cart'

function MainContent() {    
    
    return (
        <>
            <main className='list'>
                <h1>Choose your pokemon:</h1>
                <PokemonList />              
            </main>
            <aside className='cart'>
                <Cart />
            </aside>
        </>
    )
}

export default MainContent