import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('auth')
  console.log(isLoggedIn)

  if (!isLoggedIn) {
    navigate('/login');
  }
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home