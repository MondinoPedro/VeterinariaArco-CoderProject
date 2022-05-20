
import Item from "../Item/Item.js"

export default function ItemList({p}){


    const itemListStyle ={
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        width:"100%",
        backgroundColor:"#928",
    }

    return(
      <div className="ItemList" style={itemListStyle}>
          {p.map((product,index)=>(
              <Item product={product} key={product.products_id}/>
          )
          )}

      </div>
    )
}
