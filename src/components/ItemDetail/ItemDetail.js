import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";



export default function ItemDetail({data}){


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
        width:"60%",
        height:"90%",
        textAlign:"center",        
    }
    const imgStyle={
        maxWidth:"100%",
        maxHeight:"100%",
    }
    const detailDescriptionContainerStyle ={
        width:"40%",
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

    
    return ( 

        <div className="detailContainer" style={detailContainerStyle}>
            <div className="detailImgContainer" style={detailImgContainerStyle}>
                <img src={data.image} style={imgStyle}/>
            </div>
            <div className="detailDescriptionContainer" style={detailDescriptionContainerStyle}>
                <h1 style={h1Style}>{data.title}</h1>
                <h5 style={h5Style}>{data.description}</h5>
                <h3 >${data.price}</h3>
                <ItemCount stock={data.stock} initial={1}/>
            </div>
        </div> 
    )
    }
