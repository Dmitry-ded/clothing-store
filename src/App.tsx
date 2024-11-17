import './App.css';
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Cart from './pages/cart/Cart';
import Favorites from './pages/favorite/Favorites';
import FullProduct from './pages/fullProduct/FullProduct';
import Catalog from './pages/catalog/Catalog';
import MainLayout from './layouts/MainLayout';
import NotFoundBlock from './components/notFound/NotFoundBlock';
import LoginPage from './pages/sign/login/LoginPage';
import RegisterPage from './pages/sign/register/RegisterPage';
import { useAuth } from './hooks/useAuth';
import Profile from './pages/profile/Profile';


function App() {

  const {isAuth, email} = useAuth();

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path='/product/:id' element={<FullProduct />} />
          {
            isAuth ? (<Route path='/profile' element={<Profile />} />) : (<Route path='/login' element={<LoginPage />} />)
          }
          
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='*' element={<NotFoundBlock />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
