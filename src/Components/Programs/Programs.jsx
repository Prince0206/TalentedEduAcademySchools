import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.jpeg'
import program2 from '../../assets/program2.jpeg'
import program3 from '../../assets/program3.jpeg'
import program_icon from '../../assets/program_icon.webp'
import program_icon2 from '../../assets/program_icon2.webp'
import program_icon3 from '../../assets/program_icon3.jpeg'
 

const Programs = () => {
  return (
    
    <div className='programs' id='program'>
    
        <div className='program'>
            <img src={program1} alt='' />
            <div className='caption'>
                <img src={program_icon} alt='' />
                <p>Our primary school program is designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            </div>
        </div>
        <div className='program'>
            
            <img src={program2} alt='' />
            <div className='caption'>
                <img src={program_icon2} alt='' />
                <p>Our secondary school program is designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            </div>
        </div>
        <div className='program'>
           
            <img src={program3} alt='' />
            <div className='caption'>
                <img src={program_icon3} alt='' />
                <p>Our high school program is designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            </div>
        </div>
    </div>
  )
}

export default Programs