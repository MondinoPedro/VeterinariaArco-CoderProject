import { findByLabelText } from "@testing-library/react";
import CartWidget from "../CartWidget/CartWidget.js";

export default function Navbar(){
    const containerStyle = {

    }
    
    const headerStyle = {
        display:"flex",
        alignItems:"center",
        backgroundColor: "#999",
        width: "100%",
        height:"80px",
    }
    const headerIconoStyle = {
        color:"#000",
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
        color:"#010101",
        textDecoration:"none",
        fontSize:"26px",

    }
    const letterIconoStyle = {
        letterSpacing:"-8px",
    }
    return(
        <>
        <div className="container" style={containerStyle}>
            <header className="header" style={headerStyle}>
                <a className="header-icono" href="#" style={headerIconoStyle}><b className="icono-letter" style={letterIconoStyle}>MP</b></a>
                <ul className="header-links" style={headerLinksStyle}>
                    <li><a href="#" style={linksStyle}><h5 className="link-name">Inicio</h5></a></li>
                    <li><a href="#" style={linksStyle}><h5 className="link-name">Nuestros Productos</h5></a></li>
                    <li><a href="#" style={linksStyle}><h5 className="link-name">Sobre Nosotros</h5></a></li>
                    <li><a href="#" style={linksStyle}><h5 className="link-name">Mi perfil</h5></a></li>
                    <CartWidget cartCounter={"8"}/>
                </ul>
                
                 
            </header>
            
        </div>
        </>
    )
}