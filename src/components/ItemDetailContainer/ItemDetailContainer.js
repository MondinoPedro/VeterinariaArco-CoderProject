import React from 'react'
import { getFirestore, getDoc, doc, query, where} from "firebase/firestore"
import ItemDetail from '../ItemDetail/ItemDetail'
import { Products } from '../Data/Products'


export default function ItemDetailContainer({productId}){ 
    
    
    const [data, setData]=React.useState([])
    React.useEffect(()=>{
        console.log(productId)
        const db = getFirestore()
        const productsRef = doc(db, "products", productId)
        if (productId){
            getDoc(productsRef).then(snapshot=>{
                if(snapshot.exists()){
                    setData({id:snapshot.id, ...snapshot.data()})
                }
            })
        }
        
        }, [productId]);
   

    const containerDetail={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",

    }
    const bodyStyle={

        width:"50%",
    

    }
    const itemDetailStyle ={
        
    }
    return(
        <body style={containerDetail}>
            <div style={bodyStyle}>    
                <ItemDetail style={itemDetailStyle} data={data}/>
            </div>
        </body> 
    )
    
}