
export default function ProductDetail ({product}) {
    return(
        <>
            <div>
                <h5>{product.titulo}</h5> 
                <h5>Precio: ${product.price}</h5>
                <h5>Cantidad: {product.quantity}</h5>
                <h5>-----------------------</h5>
            </div>
        </>
    )
}