import React from 'react'
import './cartProductBlock.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { CartProducts, minusItem, plusItem, removeItem } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

type CartProductBlockProps = {
  id: string,
  name: string,
  price: number,
  count: number,
  imageUrl: string,
  size: string[]
}

const CartProductBlock: React.FC<CartProductBlockProps> = ( { name, imageUrl, price, id, count, size } ) => {

  const dispatch = useDispatch();

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(removeItem({id, size}))
    }
  };

  const onClickMinus = () => {
    dispatch(minusItem({id, size}))
    
  };

  const onClickPlus = () => {
    dispatch(plusItem({
      id,
      size,
    } as CartProducts))
  };


  return (
    <div className='main-product-block'>
      <div className='product-descriptions'>
        <div className="cart-item-img">
          <img src={imageUrl} alt="" />
        </div>
        <div className="cart-item-name">
          <Link to={`/product/${id}`}>
            <h3>{name}</h3>
          </Link>
        </div>
        <div className="cart-item-count">
          <button className='item-minus' onClick={onClickMinus}>-</button>
          <b>{count}</b>
          <button className='item-plus' onClick={onClickPlus}>+</button>
        </div>
        <div className="cart-item-price">
          <b>{price * count} $</b>
        </div>
        <div>{size}</div>
        <div className="cart-item-remove">
          <button onClick={onClickRemove} className='delite-item'>
            <FaRegTrashCan />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProductBlock
