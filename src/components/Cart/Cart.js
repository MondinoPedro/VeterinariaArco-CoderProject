import { contexto } from "../../context/CartContext/CartContext.js";
import { useContext } from "react";
export default function Cart({item}){

    const {deleteItem} = useContext(contexto)
    const titleContainerStyle={
        color:"#000",
        borderBottom:"2px solid #fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"20px",
    }
    const cantContainerStyle={
       
        borderBottom:"2px solid #fff",
        borderLeft:"2px solid #fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"20px",
    }
    const buttonContainerStyle={
       
        borderBottom:"2px solid #fff",
        borderLeft:"2px solid #fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"20px",
        
    }

    const buttonStyle={
            color:"#fff",
            backgroundColor:"#000",
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
            <div style={cantContainerStyle} >
                ${item.price}
            </div>
            
            <div style={buttonContainerStyle} >
                <button style={buttonStyle} onClick={((itemId, quantity)=>{deleteItem(item.id, item.quantity)})}>Eliminar Item</button>
            </div>
            
       </>
    )
}