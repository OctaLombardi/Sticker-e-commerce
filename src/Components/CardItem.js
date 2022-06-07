import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../Assets/css/Item.css'
import Contexto from '../Context/Contexto.js'
export default function Item(props) {
    const { nombre, precio, img, medidas, id } = (props);
    const { getProduct, setCart } = useContext(Contexto)
    return (
        <>
            <div className="home-item">
                <img
                    src={img}
                    alt=""
                    className="home-item-img"
                />
                <div className="home-item-info">
                    <Link to="/Producto">
                        <h1 className="home-item-titulo">{nombre}</h1>
                    </Link>
                    <p className="home-item-medidas">Medidas: {medidas}</p>
                    <div className="home-item-actions">
                        <h3 className="home-item-precio">AR$ {precio}</h3>
                        <button className="home-item-comprar" onClick={() => { setCart(id); }}>+</button>
                    </div>
                </div>
            </div>
        </>)
}