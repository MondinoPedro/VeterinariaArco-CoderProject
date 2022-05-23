import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap"




export default function ItemDetail({data}){
    const [action, setAction]= React.useState("Agregar")
    const navigate= useNavigate()
  
        
        const addToCart = () =>(
            <>
            <ItemCount stock={data.stock} initial={1}/>
            <button style={textoCarritoStyle} onClick={()=> setAction ("Carrito")}>Agregar al carrito</button>
            </>
        )
        
     

        const goToCart = ()=>(
            <div>
                
                <button style={textoCarritoStyle} onClick={() => navigate("/cart")}>Terminar mi compra</button>
                <button style={textoCarritoStyle} onClick={()=> navigate("/") || setAction("Agregar")}>Seguir comprando</button>
            </div>
    )

    const Button = action === "Agregar" ? addToCart : goToCart 
    
    
    const detailContainerStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"550px",
        backgroundColor:"#444",
        border:"2px solid #111",
        borderRadius:"12px",
        margin:"20px",
    }
    const detailImgContainerStyle ={
        width:"55%",
        height:"90%",        
    }
    const imgStyle={
        maxWidth:"100%",
        maxHeight:"100%",
    }
    const detailDescriptionContainerStyle ={
        width:"45%",
        marginRight:"25px",
        textAlign:"center",
    }
    const h1Style={
        fontSize:"35px",
        marginBottom:"50px",
        textAlign:"center",
    }
    const h5Style ={
        fontSize:"15px",
        textAlign:"center",
        float:"left",
    }

    
    const textoCarritoStyle = {
        margin:"0px 6px",
        color:"#111",
        backgroundColor:"#ccc",
        border: "2px solid #111",
        borderRadius:"6px",
        cursor:"pointer",
        padding:"8px",
    }  

    
    return ( 

        <div className="detailContainer" style={detailContainerStyle}>
            <div className="detailImgContainer" style={detailImgContainerStyle}>
                <img src={data.image} style={imgStyle}/>
            </div>
            <div className="detailDescriptionContainer" style={detailDescriptionContainerStyle}>
                <h1 style={h1Style}>{data.title}</h1>
                <h5 style={h5Style}>{data.description}</h5>
                <h3 >${data.price}</h3>
                <Button ></Button>
                
            </div>
        </div> 
    )
    }
