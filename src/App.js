import React from 'react';
import './App.css';
import dataSource from './dataSource';

//Pages
import Home from './Home';
import Register from './Register';
import Login from './Login';
import About from './About';
import UserProfile from './UserProfile';
import Cart from './cart/Cart';
import Logout from './Logout';
import Checkout from './cart/Checkout';
import Terms from './cart/Terms';
import PrivacyPolicy from './cart/PrivacyPolicy';
import NotFound from './NotFound';
import Footer from './Footer';

//Components
import ButtonAppBar from './ButtonAppBar';
import SearchForm from './SearchForm';
import ProductList from './ProductList';
import OneProduct from './OneProduct';
import EditProduct from './EditProduct';
import NewProduct from './NewProduct';
import DeleteProduct from './DeleteProduct';

//Util
import { createBrowserRouter, createRoutesFromElements, BrowserRouter, Route, NavLink, RouterProvider } from 'react-router-dom';

//Layouts
import RootLayout from './layouts/RootLayout';
import CartLayout from './layouts/CartLayout';

//Browser Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="profile" element={<UserProfile />}></Route>
        <Route path="cart" element={<CartLayout />}>
          <Route path="checkout" element={<Checkout />}/>
          <Route path="terms" element={<Terms />}/>
          <Route path="privacypolicy" element={<PrivacyPolicy />}/>
        </Route>
        <Route path="about" element={<About />}></Route>
        <Route path="logout" element={<Logout />}></Route>
        <Route path="newProduct" element={<NewProduct />}></Route>
        <Route path="product" element={<OneProduct />}></Route>
        <Route path="editProduct" element={<EditProduct />}></Route>
        <Route path="deleteProduct" element={<DeleteProduct />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
  )
)

class App extends React.Component {

  render() {
    return (
      <div className="appDiv">
      <RouterProvider router={router}/>
      
      <Footer />
      </div>
    );
  }

}

export default App;