import React from 'react'


function CartItem(props) {
    const { 
        pokeCart: {
            id,
            name,
            image,
            custo,
            units,
        },
        removePokemon
    } = props

    console.log(removePokemon)

    return (
        <div className='cartItem'>
            <img src={image} alt='' className='itemImg'/>
            <p className='itemPrice'>R${custo * units},00</p>
            <p className='itemUnits'>x {units}</p>
            <button onClick={ () => removePokemon( {id, name, image, custo, units: 1} ) }>x</button>
        </div>
    )
}

export default CartItem