import { contexto } from "../CartContext/CartContext.js";
import Cart from "../Cart/Cart"
import React, { useContext, useEffect } from "react";
import Item from "../Item/Item.js";

export default function CartList() {
    const {cleanCart} = useContext(contexto)
    const {cart} = useContext(contexto)


    const n = cart.length
    
    const containerStyle={
        width:"100%",
        height:"100vh",
        backgroundColor:"#a1f",
        
    }
    const gridContainerStyle={
        display:"grid",
        gridTemplateColumns:"repeat(3, minmax(300px, 1fr))",
        gridTemplateRows:`repeat(${n+1}, minmax(80px, 1fr))`,
        border:"2px solid #111",
        borderBottom:"none",
        margin:"20px",
        backgroundColor:"#444",

    }
    const titleContainerStyle={
      
        borderBottom:"2px solid #111",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }
    const cantContainerStyle={
       
        borderBottom:"2px solid #111",
        borderLeft:"2px solid #111",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }
    const containerGridStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
    }
    const buttonContainerStyle={
       
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"20px",
        
    }

    const buttonStyle={
            color:"#111",
            backgroundColor:"#ccc",
            border: "2px solid #111",
            borderRadius:"6px",
            cursor:"pointer",
            padding:"5px",
            textDecoration:"none",
    }
    
    return(
        <div style={containerStyle}>
            <div style={containerGridStyle}> 
                <div style={gridContainerStyle}> 
                    <div style={titleContainerStyle}>
                        <h3>Producto:</h3>
                    </div>
                    <div style={cantContainerStyle}>
                        <h3>Cantidad:</h3>
                    </div> 
                    <div style={cantContainerStyle}>
                        <h3>Cantidad:</h3>
                    </div>                                 
                        {cart.map((item)=>(
                            <Cart item={item}/>
                    ))}
                </div>     
            </div>    
           {
               cart.length > 0 
               ?    <div style={buttonContainerStyle}>
                        <button style={buttonStyle} onClick={cleanCart}>Vaciar Carrito</button>
                    </div>
                :   null
           }     
        </div>
        

    )
}