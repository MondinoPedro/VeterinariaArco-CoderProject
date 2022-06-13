import React from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList.js"
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore"
export default function ItemListContainer ({categoryId}) {

/*---------------------------------FUNCIONES MOD-------------------------------------*/
    const [items, setItems]= React.useState([])
    const db = getFirestore()
    const productsRef = collection(db, "products")
    React.useEffect(()=>{
            if (categoryId){
                const q = query(
                    collection(db, "products"),
                    where( "category_id" , "==" , categoryId )
                );
                getDocs(q).then(snapshots=>{
                   setItems(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})));
                });
            }
            else{
                getDocs(productsRef).then(snapshots =>{
                setItems(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})))       
                })
            }
    }, [categoryId])


    
/*-----------------------------------ESTILOS-----------------------------------------*/    



    return (
        <ItemList items={items}/>
    )
}