import { BrowserRouter, Routes, Route} from "react-router-dom"
import CartContainer from "./views/CartContainer/CartContainer";
import Category from "./views/Category/Category";
import CheckoutContainer from "./views/CheckoutContainer/CheckoutContainer";
import Products from "./views/Products/Products"
import CartContext from "./context/CartContext/CartContext";
import Product from "./views/Product/Product";
import "./styles/style.css"
import MainContext from "./context/MainContext/MainContext";
import Main from "./components/Main/Main";


function App() {
 

 
  return (
    <BrowserRouter>
    <CartContext> 
      <MainContext> 
        <Routes>     
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/product/:productId" element={<Product/>}/>
          <Route exact path="/category/:categoryId" element={<Category/>}/>
          <Route exact path="/cart" element={<CartContainer/>}/>
          <Route exact path="/checkout" element={<CheckoutContainer/>}/>
        </Routes> 
        </MainContext>
      </CartContext>
    </BrowserRouter>
   
  );
}
export default App;


