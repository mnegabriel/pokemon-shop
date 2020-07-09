import React from 'react'

function Cart(props) {
    const { cartItems } = props

    return (
        <>
            {cartItems.length > 0 ? <h2>{cartItems}teste</h2> : <h2>carrinho vazio</h2>}
        </>
    )
}

export default Cart