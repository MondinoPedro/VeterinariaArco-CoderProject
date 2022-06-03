import { contexto } from "../../components/CustomProvider/CustomProvider.js";
import React, { useContext, useEffect } from "react";
import Cart from "../Cart/Cart.js";
       
        
export default function CartList (){
    const {cart} = useContext(contexto)
    const {setCart}= useContext(contexto) 
    const {carrito} = useContext(contexto)

    
    useEffect(()=>{
        
        setCart([...cart,carrito])
    },[])

       
        console.log(cart)
        return(            
           
            <Cart p={cart}/>          
        )
    }
    

