import {Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default  function Item ({product}) {

    
   
    const navigate=useNavigate()


    return (
        <div className='grid-container'>
            <div className="card-container" style={{borderRadius:"0px"}}>
                    <div className="card-img-container">
                        <img variant="top" src={product.image} className="card-img"/>
                    </div>
                    <h4 className="card-title">{product.title}</h4>
                    <div className="card-text-container">
                        <h6>Stock: {product.stock} Unidades</h6>
                        <h6>Precio: ${product.price}</h6>
                        <div className="card-button-container">
                            <Button variant="primary" className="card-button" onClick={()=>{navigate(`/product/${product.id}`)}} style={{backgroundColor: "#000", border:"none", borderRadius:"0px"}} >Mas Detalles</Button>
                        </div> 
                    </div>        
            </div>
        </div>
    )

}