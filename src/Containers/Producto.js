import React, { useContext, useEffect } from 'react'
import Contexto from '../Context/Contexto'
import ProductItem from '../Components/ProductItem'
import '../Assets/css/Product.css'

export default function Producto(item) {
    useEffect(() => { getProducts(item) },
        [])
    const { products, getProducts } = useContext(Contexto);

    return (
        <>
            {products.map((item, i) => (
                <ProductItem {...item} key={i}></ProductItem>
            ))};
        </>
    )

}

