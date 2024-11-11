import React, { useState } from 'react'
import './favoritesProductBlock.css'
import { IoMdHeart } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../redux/slices/favoritesSlice';
import { Link, useNavigate } from 'react-router-dom';

type FavoritesProductBlockProps = {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  imageUrlHover: string,
  size: string[],
}

const FavoritesProductBlock: React.FC<FavoritesProductBlockProps> = ( { id, name, imageUrl, imageUrlHover, price, size } ) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isHoveredImage, setIsHoveredImage] = useState(false);

  const handleMouseEnterImage = () => setIsHoveredImage(true);
  const handleMouseLeaveImage = () => setIsHoveredImage(false);

  const onClickRemoveFavorites = () => {
    dispatch(removeFromFavorites(id))
  };
  
  return (
    <div className='main-favorite-block'>
      <div className='favorite-descriptions'>
        <div className="favorite-item-img" onMouseEnter={handleMouseEnterImage} onMouseLeave={handleMouseLeaveImage}>
          <Link to={`/product/${id}`}>
            <img src={isHoveredImage ? imageUrl : imageUrlHover} alt="" />
          </Link>
        </div>
        <div className="favorite-item-name">
          <h3>{name}</h3>
        </div>
        <div className='size-prod-block'>
          {
            size.map((el, index) => (
              <div className='size' key={index}>{el}</div>
            ))
          }
        </div>
        <div className="favorite-item-price">
          <b>{price} $</b>
        </div>
        <div className="heart">
          <div>
            <IoMdHeart onClick={onClickRemoveFavorites} size='24' cursor='pointer' color='#E0BEA2' /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoritesProductBlock
