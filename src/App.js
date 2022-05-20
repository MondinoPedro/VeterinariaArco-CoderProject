import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart"
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
 

 
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>   
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/products" element={<ItemListContainer/>}/>
        <Route exact path="/product" element={<ItemDetailContainer/>}/>
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}
export default App;


