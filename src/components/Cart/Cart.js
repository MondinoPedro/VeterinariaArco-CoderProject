import { contexto } from "../CartContext/CartContext.js";
import { useContext } from "react";
export default function Cart({item}){

    const {deleteItem} = useContext(contexto)
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
    const buttonContainerStyle={
       
        borderBottom:"2px solid #111",
        borderLeft:"2px solid #111",
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
        <>
            <div style={titleContainerStyle}>
                {item.titulo}
            </div>       
                
            <div style={cantContainerStyle} >
                {item.quantity}
            </div>
            <div style={buttonContainerStyle} >
                <button style={buttonStyle} onClick={((itemId)=>{deleteItem(item.id)})}>Eliminar</button>
            </div>
                
            
       </>
    )
}