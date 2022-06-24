import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import { contexto } from "../../context/CartContext/CartContext.js";
import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer.js";

export default function ItemDetail({data}){
    
    const {addItem} = useContext(contexto)
    const [goToCart, setGoToCart] = React.useState(false)

   const onAdd = ((quantity)=>{
        addItem({titulo: data.title, quantity: quantity, itemId: data.id, price: data.price})
        setGoToCart(true)
   })
        const LinkStyle ={
            backgroundColor:"#fff",
            margin:"4px",
            textDecoration:"none",
            color:"#000",
            padding:"5px"
        }
        
        
        return ( 
            <div className="detail-container">
                 <div className="detail">
                <div className="detail-img-container" >
                    <img src={data.image} alt={data.title}/>
                </div>
                <div className="detail-description-container">
                    <h1>{data.title}</h1>
                    <h5>{data.description}</h5>
                    <h3>Precio: ${data.price}</h3>
                    {
                        goToCart
                        ?   <div className="more-options-container">
                                <Link to="/cart" style={LinkStyle}>Terminar Compra</Link>
                                <Link to="/" style={LinkStyle}>Seguir Comprando</Link>
                            </div>

                        :   
                                <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
                            
    
                    }
                </div> 
            </div>  
            </div> 
            
        )
        }
    