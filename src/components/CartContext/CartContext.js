import { createContext, useEffect } from "react"
import React from "react"

export const contexto = createContext()

const Provider = contexto.Provider

export default function CartContext({children}){
    
    const [cart, setCart]=React.useState([])
    

    const addItem = ({titulo, quantity,itemId}) => {
            if (cart.length === 0){
                const newCart = [...cart, {titulo: titulo, quantity:quantity, id:itemId}];
                setCart(newCart)
            }
            for (let i = 1; i <= cart.length; i++) {
                if (titulo !== cart[i-1].titulo){
                    const newCart = [...cart, {titulo: titulo, quantity:quantity, id:itemId}];
                    setCart(newCart)
                }
                if(titulo === cart[i-1].titulo){
                    quantity= cart[i-1].quantity + quantity
                    cart.splice(i-1, 1)
                    const newCart = [...cart, {titulo: titulo, quantity:quantity, id:itemId}];
                    setCart(newCart)
                } 
            }       
    }
    

   const deleteItem = ((itemId)=>{
        const newCart = cart.filter((item)=>item.id !== itemId)
        setCart(newCart)
    })

    const cleanCart = (()=>{
        setCart([])
    })
            
            

    const valorContexto = {
        cart: cart,
        addItem:addItem,
        deleteItem: deleteItem,
        cleanCart: cleanCart,
    }

   




    
    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}