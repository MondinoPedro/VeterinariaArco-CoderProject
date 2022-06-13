import { contexto } from "../CartContext/CartContext.js";
import Cart from "../Cart/Cart"
import React, { useContext, useEffect } from "react";
import Item from "../Item/Item.js";

export default function CartList() {
    const {cleanCart} = useContext(contexto)
    const {terminarCompra} = useContext(contexto)
    const {cart} = useContext(contexto)
    const {precioTotal} = useContext(contexto)


    const n = cart.length
    
    const containerStyle={
        
        maxWidth:"100%",
        height:"100vh",
        
    }

    const gridContainerStyle={
        display:"grid",
        gridTemplateColumns:"repeat(4, minmax(300px, 1fr))",
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
        margin:"10px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"20px",
        
        
    }

    const buttonStyle={
            margin:"10px",
            color:"#111",
            backgroundColor:"#ccc",
            border: "2px solid #111",
            borderRadius:"6px",
            cursor:"pointer",
            padding:"8px 24px",
            fontSize:"18px",
            textDecoration:"none",
    }
    const precioTotalContainerStyle = {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"22px",
        borderTop:"2px solid #000",
        margin:"20px 20px"
        
        
       
    }

    const textoPrecioTotalStyle ={
        margin:"10px",
    }
    const precioTotalStyle={
        textDecoration:"underline",
        margin:"10px",
        
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
                        <h3>Precio:</h3>
                    </div> 
                    <div style={cantContainerStyle}>
                        <h3>Cantidad:</h3>
                    </div>                                 
                        {cart.map((item)=>(
                            <Cart item={item}/>
                    ))}
                </div>
           
                                    
            </div>
            
            <div style={precioTotalContainerStyle}>
                <h3 style={textoPrecioTotalStyle}>Precio Total: </h3>    
                <h4 style={precioTotalStyle}>$ {precioTotal}</h4> 
            </div>
            <div style={buttonContainerStyle}>
                <button style={buttonStyle} onClick={terminarCompra}>Terminar Compra</button>
                <button style={buttonStyle} onClick={cleanCart}>Vaciar Carrito</button>
            </div>                
        </div>
        

    )
}