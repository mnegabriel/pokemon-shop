import React from 'react'
import CartItem from './CartItem'

function Cart(props) {
    const { cartItems, cartItemButton } = props

    function funcBotao(pokemonData) {
        cartItemButton(pokemonData)
    }

    const pokemonCarrinho = cartItems.map( item => <CartItem key={item.id} pokeCart={item} removePokemon={funcBotao}/> )
    const Total = cartItems.reduce( (prev, cur) =>  {
        let curAmount = cur.units * cur.custo
        return prev + curAmount  
    }, 0)


    // var msgTotal = accounts.reduce(function(prev, cur) {
    //     return prev + cur.msgCount;
    //   }, 0);
      


    return (
        <>
                <h1>Carrinho</h1>
            {
                cartItems.length > 0
                    ? pokemonCarrinho
                    : <h2>carrinho vazio</h2>    
            }

            <h3>Total da compra:  R$ {Total},00</h3>


        </>
    )
}

export default Cart