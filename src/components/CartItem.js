import React from 'react'


function CartItem(props) {
    const { 
        pokeCart: {
            name,
            image
        }
    } = props

    // const image = front_default 

    // const [ pokeInfo, setPokeInfo ] = useState([])
    
    // useEffect( (props) => {
    //     const { pokeCart } = props

    //     inicio(pokeCart)
    // }, [])

    // function inicio(teste) {
    //     setPokeInfo(teste)
    //     console.log(teste)
    // }

    return (
        <div>
            <img src={image} alt='' />
            <h6>{name}</h6>
            <p>price</p>
            <button>x</button>
        </div>
    )
}

export default CartItem