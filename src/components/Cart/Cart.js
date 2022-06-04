import { contexto } from "../CartContext/CartContext.js";
import { useContext } from "react";
export default function Cart({item, onRemove}){


    const titleContainerStyle={
      
        borderBottom:"2px solid #111",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"20px",
    }
    const cantContainerStyle={
       
        borderBottom:"2px solid #111",
        borderLeft:"2px solid #111",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"20px",
    }


    return(
        <>
            <div style={titleContainerStyle}>
                {item.titulo}
            </div>       
                
            <div style={cantContainerStyle} >
                {item.quantity}
            </div>
                
            
       </>
    )
}