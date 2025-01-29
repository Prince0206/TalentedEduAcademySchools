import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import prev_icon from '../../assets/prev_icon.png'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.jpg'

const Testimonials = () => {

    const slider = useRef()
    let tx = 0;

    const slideForward = () => {
       if(tx > -50){
              tx -= 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
        <img src={prev_icon} alt='student' className='back-btn' onClick={slideBackward}/>
        <img src={next_icon} alt='student' className='next-btn' onClick={slideForward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                             <img src={user1} alt='student'/>
                                <div>
                                    <h4>Lucy Doe</h4>
                                    <span>Talented Education Academy, USA</span>
                                </div>
                        </div>
                        <p>“I am so happy with the service and support from Talented Education Academy. I would highly recommend them to anyone who is looking for a high-quality education for their child.”</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                             <img src={user2} alt='student'/>
                                <div>
                                    <h4>Lara Rocht</h4>
                                    <span>Talented Education Academy, USA</span>
                                </div>
                        </div>
                        <p>“I am so happy with the service and support from Talented Education Academy. I would highly recommend them to anyone who is looking for a high-quality education for their child.”</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                             <img src={user3} alt='student'/>
                                <div>
                                    <h4>Mary Wireko</h4>
                                    <span>Talented Education Academy, USA</span>
                                </div>
                        </div>
                        <p>“I am so happy with the service and support from Talented Education Academy. I would highly recommend them to anyone who is looking for a high-quality education for their child.”</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                             <img src={user4} alt='student'/>
                                <div>
                                    <h4>Esther Nyarko</h4>
                                    <span>Talented Education Academy, USA</span>
                                </div>
                        </div>
                        <p>“I am so happy with the service and support from Talented Education Academy. I would highly recommend them to anyone who is looking for a high-quality education for their child.”</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials