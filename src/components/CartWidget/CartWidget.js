import { Link } from "react-router-dom"
export default function CartWidget ({cartCounter}) { 


    

    const cartContainerStyle = {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"20px",
        color:"#000",
    }


    const imgStyle = {
        width:"52px",
    }

    const bStyle = {
        padding:"10px",
        color:"#fff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"20px",
        height:"20px",
        border:"2px solid #fff",
        borderRadius:"20px"
    }
    return(
        <div className="container">
            <div className="cartContainer" style={cartContainerStyle} >
                <Link to="/cart">
                    <img src="../cart.png" style={imgStyle}/>
                </Link>
                <b style={bStyle}>{cartCounter}</b>
            </div>
        </div>
    )

}