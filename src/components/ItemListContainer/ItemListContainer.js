import React from "react"
import { useContext } from "react"
import { mainContext } from "../../context/MainContext/MainContext.js" 
import ItemList from "../ItemList/ItemList.js"
import { getFirestore, getDocs, collection, query, where, limit, orderBy} from "firebase/firestore"
export default function ItemListContainer () {
    
/*---------------------------------FUNCIONES MOD-------------------------------------*/
    const [items, setItems]= React.useState([])
    const db = getFirestore()
    const {age} = useContext(mainContext)
    const {type}= useContext(mainContext)
    const {filter}= useContext(mainContext)
    const categoryId = filter

    if (type && categoryId==="Todos" && age===false){
        const q = query(
            collection(db, "products"),
            where("type" , "==", type)
        );
        getDocs(q).then(snapshots=>{
           setItems(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})));
        });
    }
    
    React.useEffect(()=>{

        if (type && categoryId==="Todos" && age===false){
            const q = query(
                collection(db, "products"),
                where("type" , "==", type)
            );
            getDocs(q).then(snapshots=>{
               setItems(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})));
            });
        }
    },[type])

    React.useEffect(()=>{
            if (categoryId && type && age===false){
                const q = query(
                    collection(db, "products"),
                    where( "category_id" , "==" , categoryId ),
                    where("type" , "==", type)
                    
                );
                getDocs(q).then(snapshots=>{
                   setItems(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})));
                });
            }
    },[categoryId])

    React.useEffect(()=>{
        if (categoryId && type && age){
                
            const q = query( 
                collection(db, "products"),
                where( "category_id" , "==" , categoryId ),
                where("type" , "==", type),
                where("age", "==", age)
                
            );
            getDocs(q).then(snapshots=>{
               setItems(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})));
            });
        }
    },[age])

    
/*-----------------------------------ESTILOS-----------------------------------------*/    



    return (
    
            <ItemList items={items}/>
        
           
    
        
    )
}