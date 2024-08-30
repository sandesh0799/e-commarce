import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProductDeatil from './pages/ProductDeatil';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import About from './pages/About';
import Checkout from './pages/Checkout';
import PlaceOrder from './pages/PlaceOrder';
import OrderConfirmation from './pages/OrderConfirm';
import { OrderHistory } from './pages/OrderHistory';
import { useSelector } from 'react-redux';

function App() {
  const userInfo = localStorage.getItem("userInfo");
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/products/:id" element={<ProductDeatil />}></Route>
          <Route
            exact
            path="/login"
            element={userInfo ? <Navigate to="/"></Navigate> : <Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={userInfo ? <Navigate to="/"></Navigate> : <Register />}
          ></Route>
          <Route path="/order/:id" element={<OrderConfirmation />} />
          <Route path="/order-history" element={<OrderHistory />} />

          <Route exact path="/placeorder" element={<PlaceOrder />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
