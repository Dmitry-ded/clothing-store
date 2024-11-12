import React from 'react'
import './authorization.css'

const Authorization: React.FC = () => {
  return (
    <div>
      <div className='main-sign'>
        <div className="block-sign">
          <div className="sign-in">
            <div className="title-sign-in">
              <h2>Уже есть аккаунт</h2>
              <p>Войдите в систему с помощью пароля и адреса электронной почты</p>
            </div>
            <div className="block-input-sign-in">
              <input className='input-sign-in-login' type="text" name='username' placeholder='Введите почту' />
              <input className='input-sign-in-pass' type="password" name="password" placeholder='Введите пароль' />
            </div>
            <div className="block-button-sign-in">
              <button className='button-enter'>Вход</button>
            </div>
          </div>
          <div className="sign-in">
            <h2>Уже есть аккаунт</h2>
            <p>Войдите в систему с помощью пароля и адреса электронной почты</p>
            <input className='input-sign-in' type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authorization;
