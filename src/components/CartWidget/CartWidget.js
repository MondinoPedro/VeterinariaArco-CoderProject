export default function CartIcon ({cartCounter}) { 


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
        color:"#010101",
    }


    const imgStyle = {
        width:"52px",
    }


    return(
        <div className="container" style={containerStyle}>
            <div className="cartContainer" style={cartContainerStyle} >
                <a href="#">
                    <img src="../cart.png" style={imgStyle}/>
                </a>
                <b>{cartCounter}</b>
            </div>
        </div>
    )

}