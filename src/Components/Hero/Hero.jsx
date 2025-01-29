import React from 'react'
import './Hero.css'
import arrow_forward from '../../assets/arrow_forward.png'

const Hero = () => {
  return (
    <div>
        <div className='hero container'>
            <div className='hero-text'>
            <h1>Empowering the next generation of leaders</h1>
            <p>Our programs are designed to help your child reach their full potential</p>
            <button className='btn'>Enroll now <img src={arrow_forward} alt='' /></button>
            </div>
        </div>
    </div>
  )
}

export default Hero