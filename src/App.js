import Addproduct from './components/addproduct';
import Getproduct from './components/getproduct';
import Updateproduct from './components/updateproduct';
import ViewProduct from './components/viewproduct';
import './App.css';
import logo from './logo.svg';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Router,Switch,Route } from 'react-router-dom';
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
                <Route path = "/" element = {<ViewProduct/>}></Route>
               
                <Route path = "/add-product" element = {<Addproduct/>}></Route>
                <Route path = "/view-product/:productId" element = {<Getproduct/>}></Route>
                <Route path = "/update-product/:productId" element = {<Updateproduct/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
   
  );
}

export default App;
