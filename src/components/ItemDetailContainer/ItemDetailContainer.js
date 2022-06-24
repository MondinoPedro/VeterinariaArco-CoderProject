import React from 'react'
import { getFirestore, getDoc, doc, query, where} from "firebase/firestore"
import ItemDetail from '../ItemDetail/ItemDetail'
import NavBar from '../NavBar/Navbar'



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
   
   
    return(
        <div>  
            <NavBar/>
            <div className="item-detail-container">                 
                    <ItemDetail data={data}/>             
            </div>  
            
               
        </div>
        
    )
    
}