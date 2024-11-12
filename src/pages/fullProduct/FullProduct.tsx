import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import axios from 'axios';
import './fullProduct.css'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../redux/slices/cartSlice';
import { addProductsFavorites, selectFavoritesItemsById } from '../../redux/slices/favoritesSlice';
import { Link } from 'react-router-dom';

type FullProductState = {
  id: string,
  imageUrl: string,
  name: string,
  price: number,
  description: string,
  count: number,
  imageUrlHover: string,
  size: string[],
  isSize: number,
}

type FullProductStateParams = {
  id: string,
}

const FullProduct: React.FC = () => {

  const { id } = useParams<FullProductStateParams>();
  
  const dispatch = useDispatch();

  const inFavorites = useSelector(selectFavoritesItemsById(id!))

  const navigate = useNavigate();

  const [prod, setProd] = useState<FullProductState>(
    {
      id: "",
      imageUrl: "",
      name: "",
      price: 0,
      description: "",
      count: 0,
      imageUrlHover: "",
      size: [],
      isSize: 0,
  });

  const [sizeActive, setSizeActive] = useState(0);


  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`https://66e9e82987e41760944b0db3.mockapi.io/items/` + id);
        setProd(data);
        
      } catch (error){
        navigate("/")
      }
    }

    fetchProduct();
  }, [])
  
  const onClickAddCart = () => {
    const item: FullProductState = {
      id: prod.id,
      imageUrl: prod.imageUrl,
      name: prod.name,
      price: prod.price,
      description: prod.description,
      count: 0,
      imageUrlHover: prod.imageUrlHover,
      size: [prod.size[sizeActive]],
      isSize: prod.isSize,
    }
    dispatch(addProducts(item))
  }

  const onClickAddFavorites = () => {
    dispatch(addProductsFavorites(prod))
  }

  if (!prod) {
    return (
      <>Загрузка</>
    )
  }

  return (
    <div>
      <div className="main-product-card">
        <div className='product-card-block'>
          <div className='img-product-card-block'>
            <img src={prod.imageUrl} alt="" />
            <img src={prod.imageUrlHover} alt="" />
          </div>
          <div className='description-product-block'>
            <h2>{prod.name}</h2>
            <div className='size-full-prod-block'>
              {
                prod.isSize === 1 
                ? prod.size.map((el, index) => (
                  <button className={sizeActive !== index ? 'size-full-product' : "active"} key={index} onClick={() => setSizeActive(index)}>{el}</button>
                )) : ""
              }
            </div>
            <p className='price-product-card'>{prod.price} $</p>
            <p className='description-product'>{prod.description}</p>
            <div className='button-to-add-block'>
              <button className='card-add-to-cart' onClick={onClickAddCart} >В корзину</button>
              {
                !inFavorites 
                ? <div className='card-add-to-favorites' onClick={onClickAddFavorites} >
                    <IoMdHeartEmpty color='#E0BEA2' />
                    <p>В избранное</p>
                  </div> 
                : <Link to='/favorites'>
                    <div className='card-go-to-favorites'>
                      <IoMdHeart color='#E0BEA2' />
                      <p>Перейти</p>
                    </div>
                  </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default FullProduct
