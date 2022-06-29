import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import { contexto } from "../../context/CartContext/CartContext.js";
import { useContext } from "react";
import {Link} from "react-router-dom";

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
            cursor: "pointer",
            color: "#000",
            border: "2px solid #000",
            boxShadow: "0px 0px 1px 0px #fff",
            fontSize: "15px",
            textDecoration:"none",
            padding:"5px"
        }
        const backMenuLinkStyle ={
            backgroundColor:"#000",
            margin:"4px",
            cursor: "pointer",
            color: "#fff",
            fontSize: "25px",
            textDecoration:"none",
            padding:"10px"
        }
        
        return ( 
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                {data.title ? 
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
            :
            <div style={{display:"flex", alignItems:"center", height:"82vh", color:"#000"}}>
                <h2>El Id no coincide con un producto de nuestra lista!</h2>
                <Link to="/" style={backMenuLinkStyle}>Volver al Inicio</Link>
            </div>
                
            }
                
            
         </div>   
        )
        }
    