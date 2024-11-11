import React from 'react'
import Header from '../../components/header/Header'
import { useDispatch, useSelector } from 'react-redux'
import "./cart.css"
import CartProductBlock from '../../components/cartProductBlock/CartProductBlock'
import { FaRegTrashCan } from "react-icons/fa6";
import { clearProduct, selectCart } from '../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Cart: React.FC = () => {

  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector(selectCart)
  
  const totalCount = products.reduce((sum, item) => sum + item.count, 0);

  const onClickClearCart = () => {
    if (window.confirm("Вы действительно хочетите очистить корзину?")) {
      dispatch(clearProduct())
    }
  }
  
  return (
    <div>
      <h1 className='title-cart'>Корзина</h1>
      <div className='main-cart'>
        <div onClick={onClickClearCart} className="clear-cart">
            <p>Очистить корзину</p>
            <FaRegTrashCan />
        </div>
        <div className="cart-block">
          {
            products.map((obj, index) => (
              <CartProductBlock key={index} {...obj} />
            ))
          }
        </div>
        <div className="cart-bottom">
          <div className="cart__bottom-details">
            <span> Всего товаров: <b>{totalCount} шт.</b> </span>
            <span> Сумма заказа: <b>{totalPrice} $</b> </span>
          </div>
        </div>
        {
          products.length <= 0 ? 
            <div className='back-to-shopping'>
              <Link to='/'>
                <button>Назад к покупкам</button>
              </Link>
            </div> : ''
        }
      </div>
    </div>
  )
}

export default Cart
