import { Products } from "../Data/Products.js"
import Item from "../Item/Item.js"

export default function ItemList(){
    const task = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(Products)
        },2000)
    })
    task.then(res => {
        console.log(res)
    })

    const itemListStyle ={
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%", 
        heigth:"500px",
        backgroundColor:"#ccc"
    }

    return(
      <div className="ItemList" style={itemListStyle}>
          {Products.map((product,index)=>(
              <Item product={product} key={product.id}/>
          )
          )}

      </div>
    )
}
