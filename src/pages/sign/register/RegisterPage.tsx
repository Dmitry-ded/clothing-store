import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import SignUp from '../../../components/sign/SignUp'

const RegisterPage:React.FC = () => {
  return (
    <div className='main-register'>
      <h1>Зарегестрироваться</h1>
      <SignUp />
      <p>Or <Link to={"/login"}>Войти</Link></p>
    </div>
  )
}

export default RegisterPage
