import React from 'react'
import { useSelector } from 'react-redux'
import FavoritesProductBlock from '../../components/favoritesProductBlock/FavoritesProductBlock';
import './favorites.css'
import { selectProductFavorite } from '../../redux/slices/favoritesSlice';

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
