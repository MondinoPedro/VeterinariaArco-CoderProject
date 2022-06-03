import { createContext, useEffect } from "react"
import React from "react"

export const contexto = createContext()

const Provider = contexto.Provider

export default function CustomProvider({children}){

    const [carrito, setCarrito] = React.useState({})
    const [cart, setCart]=React.useState([])
    const valorContexto = {
        cart: cart,
        carrito: carrito,
        setCart: setCart,
        setCarrito: setCarrito,
    }
    
    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}