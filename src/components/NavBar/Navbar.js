import { contexto } from "../../context/CartContext/CartContext.js";
import { mainContext } from "../../context/MainContext/MainContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget.js";


export default function Navbar(){
    
    const {counter} = useContext(contexto)
    const {backToMenu} = useContext(mainContext)
    
    const containerStyle ={
        width:"100%",
        backgroundColor:"#000",
        display:"flex",
        justifyContent:"center",
    }
    const headerStyle = {
        backgroundColor: "#000",
        display:"flex",
        justifyContent:"center",
        width: "90%",
        height:"80px",
        fontFamily:"'Oswald', sans-serif"
    }
    
    const cartContainerStyle ={
        width:"10%",
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center",
        marginRight:"20px"
    }

    const headerLinksStyle = {
        listStyle:"none",
        display: "flex",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"80%",
    }
    const linksStyle = {
        color:"#fff",
        textDecoration:"none",
        fontSize:"20px",
        marginLeft:"45px"


    }
    const logoStyle ={
        fontSize:"35px",
        color:"#fff",
        textDecoration:"none",
        marginRight:"20px"
    }
    
    return(
        <div style={containerStyle}>
            <header className="header" style={headerStyle}>
                <div className="header-links" style={headerLinksStyle}>
                    <Link className="header-logo" to="/" style={logoStyle} onClick={backToMenu} >Veterinaria Arco</Link>
                    <Link className="header-link" to="/" style={linksStyle} onClick={backToMenu}>Inicio</Link>
                    <a className="header-link" style={linksStyle}>Productos</a>
                    <Link className="header-link" to="#" style={linksStyle}>Sobre Nosotros</Link>  
                </div>
                <div style={cartContainerStyle}>
                    <CartWidget cartCounter={counter}/>
                </div>      
            </header>
        </div>           
    )
}