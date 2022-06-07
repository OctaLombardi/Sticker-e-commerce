import React from 'react'
import '../Assets/css/CartItem.css'
import borrar from '../Assets/statics/borrar.png'
export default function CartItem(props) {
    const { nombre, img, precio, id } = props[0];
    console.log(props, 'como vienen  al item carrito')
    const handleDelete = () => {
        props.deleteCart(id);
    };
    return (
        <>
            <div className="carrito-item">
                <img
                    src={img}
                    alt=""
                    className="carrito-item-img"
                />
                <div className="carrito-txt">
                    <h1 className="carrito-item-titulo">{nombre}</h1>
                    <h3 className="carrito-item-precio">AR$ {precio}</h3>
                </div>
                <img src={borrar} alt="" className="carrito-item-borrar" onClick={handleDelete} />
            </div>
        </>
    )
} 