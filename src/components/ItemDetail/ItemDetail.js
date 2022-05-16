import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";



export default function ItemDetail({data}){

    const onAdd =(cant)=>{
        alert(`Se han agregado ${cant} articulos a su carrito. `)
    }

    const detailContainerStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"55%",
        height:"600px",
        backgroundColor:"#444",
        border:"2px solid #444",
        borderRadius:"12px",
    }
    const detailImgContainerStyle ={
        width:"70%",
        
    }
    const imgStyle={
        maxWidth:"100%",
    }
    const detailDescriptionContainerStyle ={
        width:"30%",
        marginRight:"25px",
        textAlign:"center",
    }
    const h1Style={
        fontSize:"25px",
        marginBottom:"250px",
    }

    return( 
        <div className="detailContainer" style={detailContainerStyle}>
            <div className="detailImgContainer" style={detailImgContainerStyle}>
                <img src={data.image} style={imgStyle}/>
            </div>
            <div className="detailDescriptionContainer" style={detailDescriptionContainerStyle}>
                <h1 style={h1Style}>{data.title}</h1>
                <h3>{data.price}</h3>
                <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
            </div>
        </div> 
    )
  
}