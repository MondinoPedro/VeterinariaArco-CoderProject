import { createContext, useEffect } from "react"
import React from "react"

export const contexto = createContext()

const Provider = contexto.Provider

export default function CartContext({children}){
    
    const [cart, setCart]=React.useState([])
    
    const addItem = ({titulo, quantity,itemId}) => {
        for (let i = 0; i < cart.length; i++) {
            if(titulo === (cart[i].titulo)){
                quantity=quantity + (cart[i].quantity)
                cart.splice((cart[i]))
                
                
            };
            
        }
        const newCart = [...cart, {titulo: titulo, quantity:quantity, id:itemId}];

        setCart(newCart)
    }
    console.log(cart)

    const deleteItem = ({itemId})=>{
            
        };
            
            
        

    

    const valorContexto = {
        cart: cart,
        setCart: setCart,
        addItem:addItem,
        deleteItem: deleteItem,
    }

   




    
    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}