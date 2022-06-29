import React, { useEffect } from "react"
import { contexto } from "../../context/CartContext/CartContext"
import { useContext } from "react"

export default function ItemCount ({stock, initial, onAdd}) {
    
        
   
   
    const {backToMain} = useContext(contexto)
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
    
      
    return(
        <>
        <div className="item-count-container">
            <div className="item-button-container">   
                <input type={"button"} className="item-count-button" value="-" onClick={decreaseCount} disabled={count<=1}></input>
                {count}
                <input type={"button"} className="item-count-button"  value="+" onClick={increaseCount} disabled={count>=stock}></input>  
            </div>
        </div>
        <div>
            {stock > 0 ?
               <input type={"button"} className="item-button" value={"Agregar al Carrito"}  onClick={(()=>{
                onAdd(count)
            }) }></input> 
            :
            <>
            <h6>No hay stock disponible</h6> 
            <input type={"button"} className="item-button" value={"Volver al Inicio"}  onClick={backToMain}></input> 
            </>
            }
           
        </div>
        </>
    )
}