import React from 'react'
import '../Assets/css/Product.css'
export default function ProductItem(props) {
    const { nombre, img, precio, medidas, descripcion } = props;
    return (
        <>
            <div className="detalle">
                <img
                    src={img}
                    alt=""
                    className="detalle-img" />
                <h1 className="home-item-titulo">{nombre}</h1>
                <p className="home-item-medidas">Medidas:{medidas} </p>
                <div className="home-item-actions">
                    <h3 className="home-item-precio">AR$: {precio}</h3>
                    <a href="Carrito">  <button className="home-item-comprar">+</button></a>
                </div>
                <p> {descripcion}</p>
            </div>
        </>
    )
}
