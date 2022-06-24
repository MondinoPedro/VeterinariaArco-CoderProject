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
            <input type={"button"} className="item-button" value={"Agregar al Carrito"}  onClick={(()=>{
                onAdd(count)
            }) }></input>
        </div>
        </>
    )
}