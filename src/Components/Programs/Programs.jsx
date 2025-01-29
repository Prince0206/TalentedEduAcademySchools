import React from 'react'
import './Programs.css'
import Program1 from '../../assets/Program1.jpeg'
import Program2 from '../../assets/Program2.jpeg'
import Program3 from '../../assets/Program3.jpeg'
import program_icon from '../../assets/program_icon.webp'
import program_icon2 from '../../assets/program_icon2.webp'
import program_icon3 from '../../assets/program_icon3.jpeg'
 

const Programs = () => {
  return (
    
    <div className='programs' id='program'>
    
        <div className='program'>
            <img src={Program1} alt='' />
            <div className='caption'>
                <img src={program_icon} alt='' />
                <p>Our primary school program is designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            </div>
        </div>
        <div className='program'>
            
            <img src={Program2} alt='' />
            <div className='caption'>
                <img src={program_icon2} alt='' />
                <p>Our secondary school program is designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            </div>
        </div>
        <div className='program'>
           
            <img src={Program3} alt='' />
            <div className='caption'>
                <img src={program_icon3} alt='' />
                <p>Our high school program is designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            </div>
        </div>
    </div>
  )
}

export default Programs