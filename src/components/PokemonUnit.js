import React from 'react'

function PokemonUnit(props) {
    const { 
        pokeProps:{
            id, 
            name, 
            sprites:{front_default}}, 
        grabPokeInfo
    } = props

    const price = ''
    const formatedName = name[0].toUpperCase() + name.slice(1);
    const image = front_default

    
    
    return (
        <div className='card'>

            <img src={image} alt='' />
            <p>{id}</p>
            <p>R${price},00</p>
            <h5>{formatedName}</h5>

            <button onClick={ () => grabPokeInfo({id, name, image})}> Add to cart </button>

        </div>
    )
}

export default PokemonUnit