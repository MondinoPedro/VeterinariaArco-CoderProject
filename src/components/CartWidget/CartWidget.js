import { Link } from "react-router-dom"
export default function CartWidget ({cartCounter}) { 


    const containerStyle = {
        display:"flex",
        justifyContent:"center",
        width:"5%",
    }

    const cartContainerStyle = {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"20px",
        color:"#111",
    }


    const imgStyle = {
        width:"52px",
    }

    const bStyle = {
        color:"#111",
    }
    return(
        <div className="container" style={containerStyle}>
            <div className="cartContainer" style={cartContainerStyle} >
                <Link to="/cart">
                    <img src="../cart.png" style={imgStyle}/>
                </Link>
                <b style={bStyle}>{cartCounter}</b>
            </div>
        </div>
    )

}