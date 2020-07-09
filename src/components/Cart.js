import React from 'react'
import CartItem from './CartItem'

function Cart(props) {
    const { cartItems } = props

    return (
        <>
            {cartItems.length > 0 
                ? cartItems.map( item => <CartItem key={item.id} pokeCart={item} /> )
                : <h2>carrinho vazio</h2>
            }

        </>
    )
}

export default Cart