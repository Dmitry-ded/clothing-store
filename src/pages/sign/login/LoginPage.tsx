import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import Login from '../../../components/sign/Login'

const LoginPage:React.FC = () => {
  return (
    <div className='main-login'>
      <h1>Войти</h1>
      <Login />
      <p>Or <Link to={"/register"}>Зарегистрироваться</Link></p>

    </div>
  )
}

export default LoginPage
