import React from 'react'
import { Link } from 'react-router-dom'
import iconCarrito from '../Assets/statics/carrito.png'
import iconVolver from '../Assets/statics/volver.png'
export default function Header() {
    return (
        <>
            <Link to="/carrito">
                <img src={iconCarrito} alt="" className="carritou" />
            </Link>
            <Link to="/">
                <img src={iconVolver} alt="" className="volver" />
            </Link>

            <h1 className="titulo">
                Sticker<br />
                Store
            </h1>
        </>
    )
}
