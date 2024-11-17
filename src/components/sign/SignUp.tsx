import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from '../sign/Form';
import { setUser, userSliceState } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

const SignUp = () => {

  const dispatch = useAppDispatch();
  
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    console.log("Зарегестрироваться");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then( async ({ user }) => {

      const token = await user.getIdToken();

      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: token,
      } as userSliceState));
      navigate("/");
    })
    .catch(console.error)
  }

  return (
    <div>
      <Form title='Зарегестрироваться' handleClick={handleRegister}/>
    </div>
  )
}

export default SignUp
