import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ListServices from './components/Services/ListServices';
import ListStores from './components/Stores/ListStores';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NavBar from './components/MainNav/NavBar';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<ListStores />} />
        <Route path="/services" element={<ListServices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
