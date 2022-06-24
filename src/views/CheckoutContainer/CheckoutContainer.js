import React from "react"
import { contexto } from "../../context/CartContext/CartContext"
import { useContext } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import Product from "../Product/Product"

export default function CheckoutContainer (){
    
    const [goToDetail, setGoToDetail] = React.useState(false)
    const [data, setData] = React.useState()
    const [orderId, setOrderId] = React.useState()
    const {precioTotal} = useContext(contexto)
    const {cart} = useContext(contexto)


    const handleChange = (event) =>{
        const { name, value} = event.target;
        setData({...data, [name]: value});
    }

    
  

    const handleSubmit =(event)=>{
        event.preventDefault();
        setGoToDetail(true)
        const order = {
            buyer: data,
            items: cart,
            total: precioTotal,
        };
        const db = getFirestore()
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({id})=>setOrderId(id))
    }
    const containerStyle = {
        
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"20px",
        backgroundColor:"#000",
        border:"6px solid #fff",
        boxShadow: "0px 0px 4px 0px #000",
        color:"#fff"
    }
    const formContainerStyle ={
        
        maxWidth:"100%",
        maxHeight:"100%",
        textAlign:"center"
        
    }

    const formStyle ={
        textAlign:"center",
        TextDecoration:"none",
    }
    const inputStyle={
        width:"80%",
        height:"40px",
        margin:"15px",
        border:"none",
        padding:"5px",
        backgroundColor:"#fff"
    }
     const buttonStyle ={
        width:"50%",
        height:"30px",
        margin:"15px",
        backgroundColor:"#fff"
     }
     const detailContainerStyle ={
        width:"800px",
        display:"flex",
        justifyContent:"center"
     }

     const compradorStyle = {
        width:"50%",
        textAlign:"center"
     }

     const itemsStyle={
        width:"50%",
        textAlign:"center"
     }
     const centerStyle={
        display:"flex",
        justifyContent:"center"
     }
return(
<div style={centerStyle}>
    <div style={containerStyle}>
        
        {
            goToDetail 

            ?   <div style={formContainerStyle}>
                    <h2>Detalle de venta</h2>
                    <div style={detailContainerStyle}>
                        <div style={compradorStyle}>
                            <h3>Comprador:</h3>
                            <h5>Nombre: {data.name}</h5> 
                            <h5>Email: {data.email}</h5>
                            <h5>Telefono: {data.phone}</h5>  
                        </div>
                        <div style={itemsStyle}>
                            <h3>Productos:</h3>
                            {cart.map((product, key)=>(
                                <ProductDetail product={product} key={product.id}/>
                            )
                            )}
                        </div>
                    </div>
                    <h2>Precio Total: {precioTotal}</h2>    
                </div> 

            :   <div style={formContainerStyle}>
                    <form style={formStyle}>
                        <h1>Checkout</h1>
                        <input
                        style={inputStyle}
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        />

                        <input
                        style={inputStyle}
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        />

                        <input
                        style={inputStyle}
                        type="phone"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        />
                        
                        <input
                        style={buttonStyle}
                        type="submit"
                        value="Terminar Compra"
                        onClick={handleSubmit}
                        />
                    </form>
                    
                </div>
            
                
        }
            
    </div>
</div>

    
         
        
    
)

}