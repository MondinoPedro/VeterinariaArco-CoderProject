import { BrowserRouter, Routes, Route} from "react-router-dom"
import CartContainer from "./views/CartContainer/CartContainer";
import Navbar from "./components/NavBar/Navbar";
import Category from "./views/Category/Category";
import Products from "./views/Products/Products"
import CartContext from "./components/CartContext/CartContext";
import Product from "./views/Product/Product";
import "./styles/style.css"

function App() {
 

 
  return (
    <BrowserRouter>
    <CartContext> 
      <Navbar/>   
        <Routes>   
          <Route exact path="/" element={<Products/>}/>
          <Route exact path="/product/:productId" element={<Product/>}/>
          <Route exact path="/category/:categoryId" element={<Category/>}/>
          <Route exact path="/cart" element={<CartContainer/>}/>
        </Routes>
      </CartContext>
    </BrowserRouter>
   
  );
}
export default App;


