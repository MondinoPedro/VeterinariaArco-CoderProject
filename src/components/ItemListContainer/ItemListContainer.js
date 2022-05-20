import React from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList.js"
import { Products } from "../Data/Products.js"
export default function ItemListContainer () {

/*---------------------------------FUNCIONES MOD-------------------------------------*/
    const {categoryId, productId}= useParams()
    const [items, setItems]= React.useState([])
    
    React.useEffect(()=>{
        if (categoryId){
            setItems(Products.filter((prod)=>prod.category_id === +categoryId))
            if(productId){
                setItems(Products.filter((prod)=>prod.product_id === +productId))
            }
        }
        else{
            setItems(Products)
        }
    }, [categoryId])


    
/*-----------------------------------ESTILOS-----------------------------------------*/    



    return (
        <ItemList items={items}/>
    )
}