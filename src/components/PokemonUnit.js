import React from 'react'

function PokemonUnit(props) {
    const { name, sprites:{front_default}} = props.pokeProps
    return (
        <>
            <img src={front_default} alt='' />
            <h5>{name}</h5>
        </>
    )
}

export default PokemonUnit