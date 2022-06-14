
export default function ProductDetail ({product}) {
    return(
        <>
            <div>
                <h5>Nombre: {product.titulo}</h5> 
                <h5>Precio: {product.price}</h5>
                <h5>Cantidad: {product.quantity}</h5>
                <h5>-----------------------</h5>
            </div>
        </>
    )
}