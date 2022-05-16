import React from "react"
import ItemList from "../ItemList/ItemList.js"
export default function ItemListContainer () {

/*---------------------------------FUNCIONES MOD-------------------------------------*


/*-----------------------------------ESTILOS-----------------------------------------*/    
    const catalogoContainerStyle = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%", 
        heigth:"500px",
        backgroundColor:"#111"

        
    }
        
    return (
        <div className="catalogoContainer" style={catalogoContainerStyle}>
            <ItemList />
        </div>
    )
}