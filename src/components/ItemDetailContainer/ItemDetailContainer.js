import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Products } from '../Data/Products'

export default function ItemDetailContainer(){
    const [data, setData]=React.useState({})
    
    React.useEffect(()=>{
        const getData= new Promise(resolve=>{
            setTimeout(()=>{
                resolve(Products[0]);
            });
        });
        getData.then(res=>setData(res));
    }, []);
    
    const bodyStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
    return(
        <body style={bodyStyle}>
            <ItemDetail data={data}/>
        </body>
    )
    
}