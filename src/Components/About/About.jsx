import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about} alt='' className='about-img' />
            <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
            <h2>Our Mission</h2>
            <p>Our mission is to empower the next generation of leaders by providing them with the tools and resources they need to reach their full potential.</p>
        </div>
        <div className='about-right'>
            <h3>Our Vision</h3>
            <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>    
            <p>Our vision is to create a world where every child has the opportunity to succeed and thrive in their personal and professional lives. </p>
            <p>Our programs are designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            <button className='btn'>Learn more</button> 
        </div>
    </div>
  )
}

export default About