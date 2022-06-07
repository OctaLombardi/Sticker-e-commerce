import React from 'react'
import Contexto from './Contexto'
import { useReducer } from 'react'
import axios from 'axios'
import Reducer from './Reducer.js'

//COMPONENTE
export default function UseContext(props) {
    const { children } = (props)
    const inicialState = {
        products: [],
        cart: []
    }
    const [state, dispatch] = useReducer(Reducer, inicialState);

    //ACCIONES

    const getProducts = async () => {
        const res = await axios.get('https://devrockstore-default-rtdb.firebaseio.com/productos.json')
        dispatch({ type: 'GET_PRODUCTS', payload: res.data });
    };

    const setCart = (item) => {
        console.log('Agregamos a carrito', item)
        dispatch({ type: 'SET_CART', payload: item })

    };

    const deleteCart = (item) => {
        dispatch({ type: 'DELETE_CART', payload: item })
        console.log('Quitamos del Carrito', item);
    };


    return (
        //Provider = metodo para proveer la data. Value es un objeto
        <Contexto.Provider value={{
            products: state.products,
            cart: state.cart,
            getProducts,
            setCart,
            deleteCart,
        }}>
            {children}
        </Contexto.Provider>

    )
}
