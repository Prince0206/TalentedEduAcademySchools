import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery_1.jpeg'
import gallery_2 from '../../assets/gallery_2.webp'
import gallery_3 from '../../assets/gallery_3.jpg'
import gallery_4 from '../../assets/gallery_4.jpeg'
import arrow_forward from '../../assets/arrow_forward.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
           <img src={gallery_1} alt='campus'/>
           <img src={gallery_2} alt='campus2'/>
           <img src={gallery_3} alt='campus3'/>
           <img src={gallery_4} alt='campus4'/>
        </div>
        <button className='btn dark-btn'>View More <img src={arrow_forward} alt=''/></button>
    </div>
  )
}

export default Campus