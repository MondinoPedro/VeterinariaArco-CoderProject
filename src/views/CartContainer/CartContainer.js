import { useContext } from "react"
import {Link} from "react-router-dom";
import { mainContext } from "../../context/MainContext/MainContext";
import { contexto } from "../../context/CartContext/CartContext"
import CartList from "../../components/CartList/CartList"
import Navbar from "../../components/NavBar/Navbar";


export default function CartContainer() {

    const {cart} = useContext(contexto)
    const {backToMain} = useContext(contexto)

    const cartListStyle ={
        display:"flex",
        justifyContent:"center",
        height:"100vh",
        width:"100%"
    }

    const cartEmptyStyle ={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"80vh",
        color:"000"
    }

    const textoStyle={
        padding:"40px",
        display:"block",
        

    }

    const buttonStyle = {
        
        fontSize:"30px",
        color:"#fff",
        backgroundColor:"#000",
        border: "2px solid #fff",
        borderRadius:"6px",
        cursor:"pointer",
        padding:"10px 30px",
        textDecoration:"none",
    } 
    return( 
        <div >
            <Navbar/>
            {   cart.length > 0
                ?   <div style={cartListStyle}>
                        <CartList/>
                    </div>
                        
                    
                   
                :   
                
                <div style={cartEmptyStyle}>
                    <h1 style={{margin:"20px", color:"#000"}}>Su Carrito se encuentra vacio!</h1>
                    <input type="submit"  style={buttonStyle} value="Comprar Ahora!" onClick={backToMain}></input>
                </div>
                
            }
        </div>
    )
}