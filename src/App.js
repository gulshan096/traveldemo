// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/style.css';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Team from './pages/Team';
import Home from './pages/Home';
import About from './pages/About';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Purchase from './pages/Purchase';
import RazorpayPayment from './RazorpayPayment';




function App() {
  return (
    <>
      <Router>
       <Header />
        <Routes>
            <Route path='cart' Component={Cart} />
            <Route path='/' Component={Home} />
            <Route path='service' Component={Services} />
            <Route path='contact' Component={Contact} />
            <Route path='product' Component={Products} />
            <Route path='product-detail' Component={ProductDetail} />
            <Route path='team' Component={Team} />
            <Route path='about-us' Component={About} />
            <Route path='cart' Component={Cart} />
            <Route path='login' Component={Login} />
            <Route path='register' Component={Register} />
            <Route path='purchase' Component={Purchase} />
            <Route path='/pay' Component={RazorpayPayment} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
