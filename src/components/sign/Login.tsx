import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../sign/Form';
import { setUser, userSliceState } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

const Login:React.FC = () => {

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    console.log("Войти");

    console.log(auth);
    
    
    signInWithEmailAndPassword(auth, email, password)
    .then( async ({ user }) => {
      
      const token = await user.getIdToken();

      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: token,
      } as userSliceState));
      navigate("/");
    })
    .catch((error) => {
      alert("Такого пользователя не существует")
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
    });
  }

  return (
    <div>
      <Form title="Войти" handleClick={handleLogin} />
    </div>
  )
}

export default Login
