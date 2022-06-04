import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import { contexto } from "../CartContext/CartContext.js";
import { useContext, useState } from "react";
import {Link} from "react-router-dom";

export default function ItemDetail({data}){
    
    const {addItem} = useContext(contexto)
    const [goToCart, setGoToCart] = React.useState(false)

   const onAdd = ((quantity)=>{
        addItem({titulo: data.title, quantity: quantity, itemId: data.product_id})
        setGoToCart(true)
   })
        
        
        const detailContainerStyle={
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            height:"550px",
            backgroundColor:"#444",
            border:"2px solid #111",
            borderRadius:"12px",
            margin:"20px",
        }
        const detailImgContainerStyle ={
            width:"50%",
            height:"90%",        
        }
        const imgStyle={
            maxWidth:"100%",
            maxHeight:"100%",
        }
        const detailDescriptionContainerStyle ={
            width:"50%",
            marginRight:"25px",
            textAlign:"center",
        }
        const h1Style={
            fontSize:"35px",
            marginBottom:"50px",
            textAlign:"center",
        }
        const h5Style ={
            fontSize:"15px",
            textAlign:"center",
            float:"left",
        }
        const itemButtonStyle = {
            maxWidth:"100%",
    
        }
    
        
        const textoCarritoStyle = {
            margin:"0px 6px",
            color:"#111",
            backgroundColor:"#ccc",
            border: "2px solid #111",
            borderRadius:"6px",
            cursor:"pointer",
            padding:"5px",
            textDecoration:"none",
        }  
    
        
        return ( 
    
            <div className="detailContainer" style={detailContainerStyle}>
                <div className="detailImgContainer" style={detailImgContainerStyle}>
                    <img src={data.image} style={imgStyle}/>
                </div>
                <div className="detailDescriptionContainer" style={detailDescriptionContainerStyle}>
                    <h1 style={h1Style}>{data.title}</h1>
                    <h5 style={h5Style}>{data.description}</h5>
                    <h3 >${data.price}</h3>
                    {
                        goToCart
                        ?   <div style={itemButtonStyle}>
                                <Link to="/cart" style={textoCarritoStyle}>Terminar Compra</Link>
                                <Link to="/" style={textoCarritoStyle}>Seguir Comprando</Link>
                            </div>    
                        : <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
    
                    }
                    
                </div>
            </div> 
        )
        }
    