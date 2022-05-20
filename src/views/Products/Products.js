import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import { useParams } from "react-router-dom"

export default function Products() {

    const {productId} = useParams()
    return(
        <div>
            <ItemDetailContainer productId={+productId}/>
        </div>
    )
}