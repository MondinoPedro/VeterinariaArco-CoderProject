import { createContext } from "react"
import React from "react"
import { useNavigate } from 'react-router-dom'
export const contexto = createContext()

const Provider = contexto.Provider

export default function CartContext({children}){
    const navigate = useNavigate()
    const [cart, setCart]=React.useState([])
    const [counter, setCounter] = React.useState(0)
    const [precioTotal, setPrecioTotal] = React.useState(0)

    const addItem = ({titulo, quantity, itemId, price, stock}) => {
            if (cart.length === 0){
                const newCart = [...cart, {titulo: titulo, quantity:quantity, id:itemId, price:price}];
                setCart(newCart)
                setCounter(quantity)
                setPrecioTotal(price*quantity)
            }
            for (let i = 0; i < cart.length; i++) {
                if (titulo !== cart[i].titulo){
                             
                    const newCart = [...cart, {titulo: titulo, quantity:quantity, id:itemId, price:price}];
                    setCart(newCart)

                    setCounter(counter+quantity)

                    setPrecioTotal(precioTotal + (price*quantity)) 
                }
                if(titulo === cart[i].titulo){
                    quantity = (cart[i].quantity + quantity)
                    if(i===0){
                        setCounter(counter+ quantity - cart[i].quantity)
                        setPrecioTotal(precioTotal + (price* quantity) - cart[i].price)
                        cart.splice(0, 1)
                        const newCart = [...cart, {titulo: titulo, quantity:quantity, id:itemId, price:price}];
                        setCart(newCart)
                    } 
                    else {
                        setCounter(counter+ quantity - cart[i].quantity)
                        setPrecioTotal(precioTotal + (price* quantity) - cart[i].price)
                        cart.splice(i, 1)
                        const newCart = [...cart, {titulo: titulo, quantity:(quantity), id:itemId, price:price}];
                        setCart(newCart)
                        
                    }               
                    
                    
                } 
            }       
    }
    

   const deleteItem = ((itemId, quantity, price)=>{
        const newCart = cart.filter((item)=>item.id !== itemId)
        setCart(newCart)
        setPrecioTotal(precioTotal-price)
        setCounter(counter-quantity)
    })

    const backToMain = (()=>{
        setCart([])
        setPrecioTotal(0)
        setCounter(0)
        navigate("/")
    })

    const cleanCart = (()=>{
        setCart([])
        setPrecioTotal(0)
        setCounter(0)
    })

    const terminarCompra = (()=>{
        alert(`Su compra ha sido realizada con exito. El importe a pagar es de: $${precioTotal}`)
        cleanCart()
    })

            
            

    const valorContexto = {
        cart: cart,
        precioTotal:precioTotal,
        counter: counter,
        backToMain:backToMain,
        terminarCompra: terminarCompra,
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