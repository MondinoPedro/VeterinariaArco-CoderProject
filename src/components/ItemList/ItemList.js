
import { alignPropType } from "react-bootstrap/esm/types.js"
import Item from "../Item/Item.js"
import SecondNavbar from "../SecondNavbar/SecondNavbar.js"

export default function ItemList({items}){


    const itemListStyle ={
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        rowGap:"80px",
        columnGap:"80px"    
         
    }

    return(
       <>
        
        <div className="container">
            <div className="grid-container">
                <div className="ItemList" style={itemListStyle}>
                {items.map((product,index)=>(
                    <Item product={product} key={product.id}/>
                )
                )}
                </div>
            </div>    
        </div>
      </>      
    
    )
}
