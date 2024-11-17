import React from 'react'
import './profile.css'
import { useAuth } from '../../hooks/useAuth';

const Profile: React.FC = () => {

  const { email } = useAuth();

  return (
    <div className='main-profile'>
      <div className='profile-information-block'>
        <div className="contact-information">
          <h3>Персональные данные</h3>
          <div className='input-block'>
            <input className='input-contact-information' type="name" placeholder={email} />
            <input className='input-contact-information' type="email" placeholder='name' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
