import Home from "./pages/Home.jsx";
import styled from "styled-components";
import ProductList from "./pages/ProductList.jsx";
import Product from "./pages/Product.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart"
const Div = styled.div`
  font:arial;
`
const App = () => {
  return( <Div>
    <Home/>
    {/* <ProductList/> */}
    {/* <Product/> */}
    {/* <Register/> */}
    {/* <Login/> */}
    {/* <Cart/> */}
  </Div>);
};

export default App;