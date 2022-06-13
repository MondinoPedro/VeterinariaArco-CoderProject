import { contexto } from "../CartContext/CartContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget.js";

export default function Navbar(){
    
    const {counter} = useContext(contexto)
    const headerStyle = {
        display:"flex",
        alignItems:"center",
        backgroundColor: "#444",
        width: "100%",
        height:"80px",
        borderBottom:"2px solid #111",
    }
    const headerIconoStyle = {
        color:"#fff",
        width:"10%",
        paddingLeft:"20px",
        textDecoration:"none",
        fontSize:"50px",

    }
    const headerLinksStyle = {
        listStyle:"none",
        display: "flex",
        justifyContent:"space-around",
        flexWrap:"wrap",
        width:"95%",
        marginLeft:"30px",
    }
    const linksStyle = {
        color:"#000",
        textDecoration:"none",
        fontSize:"26px",

    }
    const letterIconoStyle = {
        letterSpacing:"-8px",
        color:"#000"
    }
    return(
        <>
        <div className="container">
            <header className="header" style={headerStyle}>
                <Link className="header-icono" to="/" style={headerIconoStyle}><b className="icono-letter" style={letterIconoStyle}>MP</b></Link>
                <ul className="header-links" style={headerLinksStyle}>
                    <li><Link to="/" style={linksStyle}><h5 className="link-name">Inicio</h5></Link></li>
                    <li><Link to="/category/perros" style={linksStyle}><h5 className="link-name">Perros</h5></Link></li>
                    <li><Link to="/category/gatos" style={linksStyle}><h5 className="link-name">Gatos</h5></Link></li>
                    <li><Link to="#" style={linksStyle}><h5 className="link-name">Mi perfil</h5></Link></li>
                    <CartWidget cartCounter={counter}/>
                </ul>
                
                 
            </header>
            
        </div>
        </>
    )
}