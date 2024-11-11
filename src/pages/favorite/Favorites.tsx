import React from 'react'
import Header from '../../components/header/Header'
import { useSelector } from 'react-redux'
import FavoritesProductBlock from '../../components/favoritesProductBlock/FavoritesProductBlock';
import './favorites.css'
import { selectProductFavorite } from '../../redux/slices/favoritesSlice';
import Footer from '../../components/footer/Footer';

const Favorites: React.FC = () => {

  const { productsFavorite } = useSelector(selectProductFavorite)
  
  return (
    <div>
      <div className='favorite-section'>
        <div className='main-favorite'>
          <h1 className='favor'>Избранное</h1>
          <div className="favorite-block">
            {
              productsFavorite.map((obj) => (
                <FavoritesProductBlock key={obj.id} {...obj} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Favorites
