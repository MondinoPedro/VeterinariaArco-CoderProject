import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Products } from '../Data/Products'

export default function ItemDetailContainer(){
    const [data, setData]=React.useState({})
    
    React.useEffect(()=>{
        const getData= new Promise(resolve=>{
            setTimeout(()=>{
                resolve(Products[0]);
            }, 2000);
        });
        getData.then(res=>setData(res));
    }, [])
    
    
    return(
        
        <ItemDetail data={data}/>
    )
    
}