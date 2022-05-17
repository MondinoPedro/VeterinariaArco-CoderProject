import {Card, Button} from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount.js"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.js"
export default  function Item ({product}) {

    const onAdd =(cant)=>{
        alert(`Se han agregado ${cant} articulos a su carrito. `)
        
        }
    
    const cardStyle={
        width: "18rem",
        margin:"10px",
        color:"#ccc",
        textAlign:"center",
        padding:"20px",
        borderRadius:"6px",
        border:"2px solid #111",
        backgroundColor:"#444",
    }

    const imageStyle = {
        maxWidth:"100%"
    }

    const cardBodyStyle={
        fontSize:"15px",
        

    }
    const buttonStyle ={
        color:"#111",
        backgroundColor:"#ccc",
        border: "2px solid #111",
        borderRadius:"6px",
        cursor:"pointer",
        padding:"8px",
    }

    return (
            <Card style={cardStyle}>
            <Card.Img variant="top" src={product.image} style={imageStyle}/>
            <Card.Body style={cardBodyStyle}>
                <Card.Title><h2>{product.title}</h2></Card.Title>
                <Card.Text>
                    <h4>Stock: {product.stock} Unidades</h4>
                    <h4>{product.price}</h4>
                </Card.Text>
                
                <Button variant="primary" style={buttonStyle}>Mas Detalles</Button>
                
            </Card.Body>
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
            </Card>
    )

}