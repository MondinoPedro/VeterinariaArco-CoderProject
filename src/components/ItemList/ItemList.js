
import Item from "../Item/Item.js"

export default function ItemList({items}){


    const itemListStyle ={
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        width:"100%",
        
    }

    return(
      <div className="ItemList" style={itemListStyle}>
          {items.map((product,index)=>(
              <Item product={product} key={product.id}/>
          )
          )}

      </div>
    )
}
