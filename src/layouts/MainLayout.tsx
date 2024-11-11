import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
