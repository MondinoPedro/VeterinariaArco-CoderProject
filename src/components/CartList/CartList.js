import { contexto } from "../../context/CartContext/CartContext.js";
import Cart from "../Cart/Cart"
import React, { useContext } from "react";
import { Link } from "react-router-dom";

export default function CartList() {
    const {cleanCart} = useContext(contexto)
    const {cart} = useContext(contexto)
    const {precioTotal} = useContext(contexto)


    const n = cart.length
    

    const gridContainerStyle={
        display:"grid",
        gridTemplateColumns:"repeat(4, minmax(240px, 1fr))",
        gridTemplateRows:`repeat(${n+1}, minmax(80px, 1fr))`,
        borderBottom:"none",
        margin:"20px",
        color:"#fff",
        backgroundColor: "#000",
        border: "8px solid #fff",
        boxShadow: "0px 0px 5px 0px #000"

    }
    const titleContainerStyle={
      
        borderBottom:"2px solid #fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }
    const cantContainerStyle={
       
        borderBottom:"2px solid #fff",
        borderLeft:"2px solid #fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
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
            color:"#fff",
            backgroundColor:"#000",
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
        border:"4px solid #fff",
        boxShadow: "0px 0px 5px 0px #000",
        backgroundColor:"#000",
        margin:"20px 20px",
        color:"#fff"
        
       
    }

    const textoPrecioTotalStyle ={
        margin:"10px",
    }
    const precioTotalStyle={
        textDecoration:"underline",
        margin:"10px",
        
    }
    return(
        <div >
            
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
                        <h3>...</h3>
                    </div>                                 
                        {cart.map((item)=>(
                            <Cart item={item} key={item.id}/>
                    ))}
                </div>
           
                                    
            
            <div style={precioTotalContainerStyle}>
                <h3 style={textoPrecioTotalStyle}>Precio Total: </h3>    
                <h4 style={precioTotalStyle}>$ {precioTotal}</h4> 
            </div>
            <div style={buttonContainerStyle}>
                <Link to="/checkout" style={buttonStyle}>Terminar Compra</Link>
                <button style={buttonStyle} onClick={cleanCart}>Vaciar Carrito</button>
            </div>                
        </div>
        

    )
}