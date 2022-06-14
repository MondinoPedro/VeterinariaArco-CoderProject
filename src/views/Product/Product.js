import React from "react"
import { useParams } from "react-router-dom"
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
export default function Product () {
  const {productId} = useParams()
  console.log(productId)
  return (
        <div>
            <ItemDetailContainer title="Mi producto" productId={productId} />
        </div>
  );
}