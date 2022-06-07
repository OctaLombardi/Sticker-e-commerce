import React, { useEffect, useContext } from 'react'
import '../Assets/css/Home.css'
import CardItem from '../Components/CardItem'
import Contexto from '../Context/Contexto'
export default function Home(item) {
    useEffect(() => { getProducts() },
        [])
    const { products, getProducts } = useContext(Contexto);

    return (
        <>
            <div className='container'>
                <div className='wraper'>
                    <div className="home">
                        {products.map((item) => (
                            <CardItem {...item} key={item.id}></CardItem>))}
                    </div>
                </div>
            </div>


        </>
    )
}
