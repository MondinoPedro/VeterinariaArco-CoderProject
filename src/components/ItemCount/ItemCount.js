import React, { useEffect } from "react"

export default function ItemCount ({stock, initial, onAdd}) {
    
        
   
   

    const [count, setCount]= React.useState(parseInt(initial))
    
    useEffect(()=>{
        setCount(parseInt(initial));
    },[initial])
    
    const increaseCount = ()=>{
    
        if (count >= 0){
                setCount(count + 1)
            }
    
        }
    
    
    const decreaseCount = ()=>{
        if (count > 0){
            setCount(count - 1)
        }
    
    }
    const buttonContainerStyle={
        width:"100%",
        display:"flex",
        justifyContent:"center",
        margin:"15px 0px",
    }
    const itemButtonContainerStyle ={
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        height:"28px",
        width:"100%",
        backgroundColor:"#ccc",
        border: "2px solid #111",
        borderRadius:"6px",
        color:"#111",
        fontSize:"18px",
    }

    const itemButtonStyle = {
        fontSize:"20px",
        width:"50px",
        background: "transparent",
        border:"none",
        cursor:"pointer",

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
    const countStyle={
        fontSize:"15px",
    }
      
    return(
        <>
        <div style={buttonContainerStyle}>
            <div className="itemButtonContainer" style={itemButtonContainerStyle}>   
                <input type={"button"} className="itemButton" style={itemButtonStyle} value="-" onClick={decreaseCount} disabled={count<=1}></input>
                <p style={countStyle}>{count}</p>
                <input type={"button"} className="itemButton" style={itemButtonStyle} value="+" onClick={increaseCount} disabled={count>=stock}></input>  
            </div>
        </div> 
        <div>
            <input type={"button"} value={"Agregar al Carrito"} style={textoCarritoStyle} onClick={(()=>{
                onAdd(count)
            }) }></input>
        </div>
        </>
    )
}