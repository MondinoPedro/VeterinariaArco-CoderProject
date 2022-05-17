import React from "react"
import ItemList from "../ItemList/ItemList.js"
import { Products } from "../Data/Products.js"
export default function ItemListContainer () {

/*---------------------------------FUNCIONES MOD-------------------------------------*/

    const [product, setProduct]=React.useState([])
    
    const task = new Promise(resolve=>{
        setTimeout(()=>{
            resolve(Products)
        },2000)
    })
    task.then(res =>setProduct(res))
/*-----------------------------------ESTILOS-----------------------------------------*/    
    return (
        
            <ItemList p={product}/>
        
    )
}