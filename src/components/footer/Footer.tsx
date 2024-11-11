import React from 'react'
import "./footer.css"
import logo from '../../assets/img/logo.svg'
import vk from '../../assets/img/vk.svg'
import tg from '../../assets/img/tg.svg'
import inst from '../../assets/img/inst.svg'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {

  const onClickInst = () => {
    alert("Запрещенная в россии площадка")
  }
  return (
    <div className='main-footer'>
      <div className="footer-container">
        <div className="one-section">
          <div className="content-footer">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <ul>
              <li>Оплата</li>
              <li>Доставка</li>
              <li>Возврат</li>
              <li>Магазины</li>
              <li>Каталог</li>
            </ul>
          </div>
        </div>
        <div className="two-section">
          <div className="content-footer">
            <h2>Бренды</h2>
            <ul>
              <li>Anteater</li>
              <li>ZRD</li>
              <li>Blk Crown</li>
              <li>Unaffected</li>
              <li>Ymkashix</li>
            </ul>
          </div>
        </div>
        <div className="three-section">
          <div className="content-footer">
            <h2>Категории</h2>
            <ul>
              <li>Джоггеры</li>
              <li>Брюки</li>
              <li>Рубашки</li>
              <li>Куртки</li>
              <li>Толстовки</li>
              </ul>
          </div>
        </div>
        <div className="four-section">
          <div className="social-network">
            <a href="https://vk.com/sosok11let" target="_blank" rel="noopener noreferrer">
              <img src={vk} alt="" />
            </a>
            <a href="https://t.me/sosok11let" target="_blank" rel="noopener noreferrer">
              <img src={tg} alt="" />
            </a>
            <img src={inst} onClick={onClickInst} style={{cursor: "pointer"}} alt="" />
          </div>
          <div className="faq-block">
            <p>Политика конфиденциальности</p>
            <p>Публичная оферта</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
