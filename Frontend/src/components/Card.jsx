import React from 'react'

import  '../../public/card.css'
const Card = ({title, date, start_time, end_time}) => {
  return (
    <>
    <div className='card'>
        <div>{title}</div>
        <div>{date}</div>
        
        <div>Start-time: {start_time} and End-time: {end_time}</div>
    </div>
    
    </>
  )
}

export default Card;