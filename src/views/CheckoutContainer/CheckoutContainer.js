import React from "react"
import { contexto } from "../../context/CartContext/CartContext"
import { useContext } from "react"
import { doc, addDoc, runTransaction, collection, getFirestore,} from "firebase/firestore";
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import Navbar from "../../components/NavBar/Navbar"


export default function CheckoutContainer (){
    
    const [goToDetail, setGoToDetail] = React.useState(false)
    const [data, setData] = React.useState()
    const [orderId, setOrderId] = React.useState()
    const {precioTotal} = useContext(contexto)
    const {cart} = useContext(contexto)
    const {backToMain} = useContext(contexto)

    const handleChange = (event) =>{
        const { name, value} = event.target;
        setData({...data, [name]: value});
    }

    
  
    const updateProducts = async () => {
        const db = getFirestore ()
        cart.forEach( async (item) => {
          const productRef = doc(db, `products`, item.id)
          await runTransaction(db, async (transaction) => {
          const transfDoc = await transaction.get(productRef);
          if (!transfDoc.exists()) {
            console.error("El documento no existe")
          }
          const newStock = transfDoc.data().stock - item.quantity;
          transaction.update(productRef, { stock: newStock });
        });
        })
      }

    const handleSubmit =(event)=>{
        if(data.name !== undefined && data.email !==undefined && data.phone !== undefined){
            if (data.email === data.confirmEmail){
               setGoToDetail(true)
                    const order = {
                    buyer: data,
                    items: cart,
                    total: precioTotal,
                    status:"Generada",
                    date: new Date.now()
                    };
                    const db = getFirestore()
                    const orderCollection = collection(db, "orders");
                    addDoc(orderCollection, order).then(({id})=>setOrderId(id))
                    updateProducts() 
                }
            else{
                alert("Los mails deben coincidir")
            }
                    
            }
            
    }
    const containerStyle = {
        height:"100%",
        marginTop:"20px",
        backgroundColor:"#000",
        border:"6px solid #fff",
        boxShadow: "0px 0px 4px 0px #000",
        color:"#fff",
        textAlign:"center"
        
    }
    const formContainerStyle ={
        display:"flex",
        alignItems:"center",
        height:"80vh",
        marginTop:"20px",
        backgroundColor:"#000",
        border:"6px solid #fff",
        boxShadow: "0px 0px 4px 0px #000",
        color:"#fff",
        
        
    }

    const formStyle ={ 
        textAlign:"center",
        textDecoration:"none",
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
        backgroundColor:"#fff",
        width:"60%",
        margin:"4px",
        cursor: "pointer",
        color: "#000",
        border: "2px solid #000",
        boxShadow: "0px 0px 1px 0px #fff",
        fontSize: "15px",
        textDecoration:"none",
        padding:"5px"
     }
     const detailContainerStyle ={
        width:"800px",
        display:"flex",
        justifyContent:"center",


     }

     const compradorStyle = {
        width:"50%",
        textAlign:"center",
        margin:"100px 0px", 
     }

     const itemsStyle={
        width:"50%",
        textAlign:"center",
        margin:"100px 0px", 
     }
     const centerStyle={
        display:"flex",
        justifyContent:"center"
     }
return(
    <>
    <Navbar/>
    <div style={centerStyle}>
        
            {
                goToDetail 

                ?
                <div style={containerStyle}>
                    <div>
                        <h1>Compra Realizada con Exito!</h1><br/>
                        <h2>Detalle de venta</h2>
                        <div style={detailContainerStyle}>
                            <div style={compradorStyle}>
                                <h3 style={{textDecoration:"underline"}}>Comprador:</h3>
                                <h5>Nombre: {data.name}</h5> 
                                <h5>Email: {data.email}</h5>
                                <h5>Telefono: {data.phone}</h5>  
                            </div>
                            <div style={itemsStyle}>
                                <h3 style={{textDecoration:"underline"}}>Productos:</h3>
                                {cart.map((product, key)=>(
                                    <ProductDetail product={product} key={product.id}/>
                                )
                                )}
                            </div>
                            
                        </div>
                        <div>
                            <h2>Precio Total:$ {precioTotal}</h2> 
                            <div style={{display:"flex", justifyContent:"space-around", margin:"10px"}}>
                                <input type="submit" value="Volver al Inicio " onClick={backToMain} style={buttonStyle}></input>   
                                <input type="submit" value="Imprimir Factura" style={buttonStyle}></input>                            
                            </div>

                        </div>
                        
                         
                    </div> 
                </div>

                :   <div style={formContainerStyle}>
                        <form style={formStyle}>
                            <h1>Checkout</h1>
                            <h3>Estas a un paso de finalizar tu compra! </h3>
                            <input
                            style={inputStyle}
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                            onChange={handleChange}
                            />

                            <input
                            style={inputStyle}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                            onChange={handleChange}
                            />

                             <input
                            style={inputStyle}
                            type="email"
                            name="confirmEmail"
                            placeholder="Confirm Email"
                            required="required"
                            onChange={handleChange}
                            />

                            <input
                            style={inputStyle}
                            type="number"
                            name="phone"
                            placeholder="Phone"
                            required="required"
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

</>
         
        
    
)

}