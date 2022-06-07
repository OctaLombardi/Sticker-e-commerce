import React, { useContext } from 'react'
import CartItem from '../Components/CartItem'
import '../Assets/css/Cart.css'
import Contexto from '../Context/Contexto'
export default function Carrito(props) {
    const { cart, deleteCart } = useContext(Contexto)
    return (
        <>
            <div className="carrito">
                <div className="carrito-listadito">
                    {cart.map((item, i) => (
                        <CartItem {...item} key={i} deleteCart={deleteCart}>
                        </CartItem>
                    ))};
                </div>
                <div className="carrito-precio">
                    Total a pagar: <br /><strong>U$D 3400</strong>
                </div>
            </div>
        </>
    )
}