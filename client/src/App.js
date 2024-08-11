import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProductDeatil from './pages/ProductDeatil';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { useSelector } from 'react-redux';
function App() {
  const userLoginReducer = useSelector((state) => state.userLoginReducer)
  const userInfo = localStorage.getItem("userInfo") ;
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
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
          {/* <Route path="/order/:id" element={<OrderConfirmation />} />
          <Route path="/order-history" element={<OrderHistory />} />

          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/placeorder" element={<PlaceOrder />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
