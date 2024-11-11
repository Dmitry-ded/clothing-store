import './App.css';
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Cart from './pages/cart/Cart';
import Favorites from './pages/favorite/Favorites';
import FullProduct from './pages/fullProduct/FullProduct';
import Authorization from './pages/sign/Authorization';
import Catalog from './pages/catalog/Catalog';
import MainLayout from './layouts/MainLayout';


function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path='/product/:id' element={<FullProduct />} />
          <Route path='/sign' element={<Authorization />} />
          <Route path='/catalog' element={<Catalog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
