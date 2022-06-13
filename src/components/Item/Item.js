import {Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



export default  function Item ({product}) {


    const navigate=useNavigate()

   


    const containerStyle={
        display:"grid",
        gridTemplateColumns:"repeat(3, max-min(350px, 1fr))",
        gridTemplateRows:"repeat(3, max-min(500px, 1fr))",
        justifyContent:"center",
        
    }
    
    const cardStyle={
        minWidth:"18rem",
        maxWidth: "20rem",
        height:"500px",
        margin:"20px",
        color:"#ccc",
        padding:"20px",
        borderRadius:"6px",
        border:"2px solid #111",
        backgroundColor:"#444",
    }
    const imgContainerStyle ={
        height:"65%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
    const imageStyle = {
        maxWidth:"100%",
        maxHeight:"100%",

    }

    const bodyContainerStyle={
        height:"35%",
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
            <Card className="cardContainer" style={cardStyle} >
                <div style={imgContainerStyle}>
                    <Card.Img variant="top" src={product.image} style={imageStyle}/>
                </div>
                <div style={bodyContainerStyle}>
                    <Card.Title><h2>{product.title}</h2></Card.Title>
                    <Card.Text>
                        <h4>Stock: {product.stock} Unidades</h4>
                        <h4>${product.price}</h4>
                    </Card.Text>
                
                    <Button variant="primary" style={buttonStyle} onClick={() => navigate(`/product/${product.id}`)}>Mas Detalles</Button>
                </div>      
            </Card>
        </div>
    )

}