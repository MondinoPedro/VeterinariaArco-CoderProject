import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Products } from '../Data/Products'


export default function ItemDetailContainer({productId}){ 
    
    
    const [data, setData]=React.useState([])
    React.useEffect(()=>{
        if (productId){
        setData(Products.find(prod=>prod.product_id === productId))
        }
        
        }, [productId]);
   

    const containerDetail={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#928"
    }
    const bodyStyle={

        width:"50%",
    

    }
    const itemDetailStyle ={
        
    }
    return(
        <div style={containerDetail}>
            <body style={bodyStyle}>
                <ItemDetail style={itemDetailStyle} data={data}/>
            </body>
        </div>
    )
    
}