
import Item from "../Item/Item.js"

export default function ItemList({p}){


    const itemListStyle ={
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%", 
        heigth:"500px",
        backgroundColor:"#928"
    }

    return(
      <div className="ItemList" style={itemListStyle}>
          {p.map((product,index)=>(
              <Item product={product} key={product.id}/>
          )
          )}

      </div>
    )
}
