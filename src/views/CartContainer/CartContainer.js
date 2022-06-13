import { useContext } from "react"
import {Link} from "react-router-dom";
import { contexto } from "../../components/CartContext/CartContext"
import CartList from "../../components/CartList/CartList"


export default function CartContainer() {

    const {cart} = useContext(contexto)
    const containerStyle ={
        textAlign:"center",
        height:"100vh",
        marginTop:"-21px",
    }
   

    const textoStyle={
        padding:"40px",
    }

    const buttonStyle = {
        fontSize:"30px",
        color:"#111",
        backgroundColor:"#ccc",
        border: "2px solid #111",
        borderRadius:"6px",
        cursor:"pointer",
        padding:"10px 30px",
        textDecoration:"none",
    } 
    return( 
        <div>
            {   cart.length > 0
                ? <CartList/>
                :   
                <div style={containerStyle}>
                    <h1 style={textoStyle}>Su Carrito se encuentra vacio!</h1>
                    <Link to="/" style={buttonStyle}>Compra Ahora!</Link>
                </div>
            }
        </div>
    )
}