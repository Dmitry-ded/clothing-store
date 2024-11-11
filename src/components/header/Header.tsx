import icon from '../../assets/img/logo.svg';
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';
import { selectFavoritesTotalCount, selectProductFavorite } from '../../redux/slices/favoritesSlice';
import Search from '../search/Search';
import { useEffect, useRef } from 'react';


const Header: React.FC = () => {

  const { products } = useSelector(selectCart)

  const location = useLocation();

  const isMounted = useRef(false);

  const totalCountFavorites = useSelector(selectFavoritesTotalCount)

  const { productsFavorite } = useSelector(selectProductFavorite);

  const totalCount = products.reduce((sum: number, item: any) => sum + item.count, 0)

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(products);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
    
  }, [products])

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(productsFavorite);
      localStorage.setItem('favorites', json);
    }
    isMounted.current = true;
    
  }, [productsFavorite])

  return (
    <div className='header'>
      <div className="header-block">
        <div className="munu-link-block">
          <Link to={`/catalog`}>
            <p>Каталог</p>
          </Link>
          <p>О нас</p>
          <p>SALE</p>
          <p>Магазины</p>
        </div>
        <div className="icon-slogan">
          <Link to='/'>
            <img src={icon} alt="SARAFAN collection" />
          </Link>
        </div>
        {
          location.pathname === "/catalog" && <Search />
        }
        <div className="favorites-cart-profile">
          
          <Link to='/favorites' className='color-icon'>
            {
              totalCountFavorites ? <IoMdHeart size="24" color='#E0BEA2' /> : <IoMdHeartEmpty size="24" />
            }
            {totalCountFavorites}
          </Link>
          <Link to='/cart' className='color-icon'>
            <BsCart2 size="24" />
            {totalCount}
          </Link>
          <Link to='/sign' className='color-icon'>
            <LuUser2 size="24" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
