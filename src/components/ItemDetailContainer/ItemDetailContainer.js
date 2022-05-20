import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Products } from '../Data/Products'
import { useParams } from 'react-router-dom'

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
    
        width:"50%"

    }
    const itemDetailStyle ={

    }
    return(
        <body style={bodyStyle}>
            <ItemDetail style="itemDetailStyle" data={data}/>
        </body>
    )
    
}