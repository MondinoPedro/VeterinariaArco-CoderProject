
import React from "react"
export default function Cart({p}) {
    
    
    const [cantidad, setCantidad]=React.useState()
    const [titulo, setTitulo]=React.useState()
    
    React.useEffect(()=>{
        p.map(element => {
        setTitulo(element.titulo) 
        setCantidad(element.cantidad) 
    })
    },[p])
    
    const containerStyle={
        display:"flex",
        justifyContent:"center",
        maxWidth:"100%",
        margin:"20px",
    }
    const gridContainerStyle={
        display:"grid",
        gridTemplateColumns:"repeat(2, minmax(300px, 1fr))",
        alignItems:"center",
        border:"2px solid #444",
        borderBottom:"none",
    }

    const titleStyle={
        textAlign:"center",
        borderBottom:"2px solid #444",
        padding:"10px",
    }

    const cantStyle={
        textAlign:"center",
        borderBottom:"2px solid #444",
        borderLeft:"2px solid #444",
        padding:"10px",
    }

    return(
        <div style={containerStyle}>   
            <div className="gridContainer" style={gridContainerStyle}>
                <div className="titleContainer" style={titleStyle} >
                        Producto:
                </div>   
                
                <div className="cantContainer" style={cantStyle}>
                        Cantidad:  
                </div>
                <div style={titleStyle}>
                    {titulo}
                </div>
                <div style={cantStyle}>
                    {cantidad}                
                </div>

            </div>
        </div> 
    )
}