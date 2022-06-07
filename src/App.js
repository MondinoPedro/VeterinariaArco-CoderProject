import { BrowserRouter, Routes, Route} from "react-router-dom"
import CartContainer from "./views/CartContainer/CartContainer";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Products from "./views/Products/Products"
import CartContext from "./components/CartContext/CartContext";


function App() {
 

 
  return (
    <BrowserRouter>
    <CartContext> 
      <Navbar/>   
        <Routes>   
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/products" element={<ItemListContainer/>}/>
          <Route exact path="/product/:productId" element={<Products/>}/>
          <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route exact path="/cart" element={<CartContainer/>}/>
        </Routes>
      </CartContext>
    </BrowserRouter>
   
  );
}
export default App;


