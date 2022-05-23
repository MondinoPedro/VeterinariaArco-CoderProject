import {Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



export default  function Item ({product}) {


    const navigate=useNavigate()

   


    const containerStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
    }
    
    const cardStyle={
        maxWidth: "20rem",
        margin:"20px",
        color:"#ccc",
        padding:"20px",
        borderRadius:"6px",
        border:"2px solid #111",
        backgroundColor:"#444",
    }

    const imageStyle = {
        maxWidth:"100%",
        maxHeight:"100%",
    }

    const cardBodyStyle={
        fontSize:"15px",
        textAlign:"center",
        

    }
    const buttonStyle ={
        width:"100%",
        color:"#111",
        backgroundColor:"#ccc",
        border: "2px solid #111",
        borderRadius:"6px",
        cursor:"pointer",
        padding:"8px",
    }

    return (
        <div style={containerStyle}>
            <Card class="cardContainer" style={cardStyle} >
            <Card.Img variant="top" src={product.image} style={imageStyle}/>
            <Card.Body style={cardBodyStyle}>
                <Card.Title><h2>{product.title}</h2></Card.Title>
                <Card.Text>
                    <h4>Stock: {product.stock} Unidades</h4>
                    <h4>${product.price}</h4>
                </Card.Text>
                
                <Button variant="primary" style={buttonStyle} onClick={() => navigate(`/product/${product.product_id}`)}>Mas Detalles</Button>
               
            </Card.Body>
            </Card>
        </div>
    )

}