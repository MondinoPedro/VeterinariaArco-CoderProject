import { useParams } from "react-router-dom"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
export default function Category() {


    const {categoryId} = useParams("")
    const containerStyle ={
        textAlign:"center"
    }
    return(
        <div style={containerStyle}>
            <h1>Productos: </h1>
            <ItemListContainer categoryId={categoryId}/>
        </div>
    )
}