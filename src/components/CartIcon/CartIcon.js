export default function CartIcon ({cartCounter}) { 


    const containerStyle = {
        display:"flex",
        justifyContent:"center",
    }

    const cartContainerStyle = {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ccc",
        width:"40%",
    }


    const imgStyle = {
        width:"100px",
        padding:"10px",
    }

    const counterContainerStyle = {
        fontSize:"30px",
        color:"#010101",
        marginLeft:"-10px",
    }

    return(
        <div className="container" style={containerStyle}>
            <div className="cartContainer" style={cartContainerStyle} >
                <a href="#">
                    <img src="../cart.png" style={imgStyle}/>
                </a>
                <div className="counterContainer" style={counterContainerStyle}>
                    <b>{cartCounter}</b>
                </div>
            </div>
        </div>
    )

}