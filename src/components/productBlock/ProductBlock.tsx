import React, { useState } from 'react'
import './productblock.css'
import { useDispatch, useSelector } from 'react-redux';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { addProductsFavorites, removeFromFavorites, selectFavoritesItemsById } from '../../redux/slices/favoritesSlice';
import { Link } from 'react-router-dom';


type ProductBlockProps ={
  name: string,
  imageUrl: string,
  price: number,
  description: string,
  id: string,
  imageUrlHover: string,
  size: [];
};

const ProductBlock: React.FC<ProductBlockProps> = ( { name, imageUrl, imageUrlHover, price, id, description, size} ) => {

  const dispatch = useDispatch();

  const isFavorite = useSelector(selectFavoritesItemsById(id))

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const onClickAddFavorites = () => {
    const items = {
      id,
      name,
      imageUrl,
      price,
      description, 
      count: 0,
      imageUrlHover,
      size,
    };
    dispatch(addProductsFavorites(items))
  }

  const onClickRemoveFavorites = () => {
    dispatch(removeFromFavorites(id))
  }

  return (
    <div className='main-product'>
      <div className="product-block">
        <div key={id} className="image-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to={`/product/${id}`}>
            <img src={isHovered ? imageUrlHover : imageUrl} alt={name} />
          </Link>
        </div>
        <div className='product-block-bottom'>
          <div className='name-block'>{name}</div>
          <div className='size-prod-block'>
            {
              size.map((el, index) => (
                <div className='size' key={index}>{el}</div>
              ))
            }
          </div>
          <div className='price-prod-block'>
            <p className='name-price'>$</p>
            <p className='name-price'>{price}</p> 
          </div>
          {
            !isFavorite 
            ?<IoMdHeartEmpty onClick={onClickAddFavorites} size='24' cursor='pointer' /> 
            :<IoMdHeart onClick={onClickRemoveFavorites} size='24' cursor='pointer' />
          }
        </div>
      </div>
    </div>
  )
}

export default ProductBlock
