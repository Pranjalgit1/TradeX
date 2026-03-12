import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/Home/HomePage';
import SignUp from './landing_page/signup/SignUp';
import AboutPage from './landing_page/About/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/Pricing/PricingPage';
import SupportPage from './landing_page/Support/SupportPage';
import TopNav from './landing_page/TopNav';
import Footer from './landing_page/Footer';
import InvalidDomain from './landing_page/InvalidDomain';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <TopNav />
  <Routes>
    <Route path = "/" element={<HomePage />}/>
    <Route path = "/signup" element={<SignUp />}/>
    <Route path = "about" element={<AboutPage />}/>
    <Route path = "product" element={<ProductPage />}/>
    <Route path = "pricing" element={<PricingPage />}/>
    <Route path = "support" element={<SupportPage />}/>
    <Route path = "*" element={<InvalidDomain />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
);


