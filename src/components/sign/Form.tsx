import React, { useState } from 'react'
import './form.css'
import { useDispatch } from 'react-redux';
import { setNameProfile } from '../../redux/slices/userSlice';


type FormProps = {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form:React.FC<FormProps> = ( { title, handleClick } ) => {

  const dispath = useDispatch();

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  // const updateInputValue = (value: string) => {
  //   dispath(setNameProfile(value))
  // }

  // const onCgangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   updateInputValue(e.target.value); 
  // }


  return (
    <div className='main-form'>
      {/* <input type="name" onChange={onCgangeName} placeholder='name' /> */}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email...' />
      <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Password...' />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  )
}

export default Form
