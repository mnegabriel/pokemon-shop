import React from 'react'


function CartItem(props) {
    const { 
        pokeCart: {
            image,
            custo
        }
    } = props

    return (
        <div className='cartItem'>
            <img src={image} alt='' />
            <p>{custo}</p>
            <button>x</button>
        </div>
    )
}

export default CartItem