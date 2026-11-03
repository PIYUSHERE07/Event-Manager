import React from 'react'

import  '../../public/card.css'
const Card = ({activity}) => {
  const {activityName, startDate, startTime, endDate, endTime, activityDescription, activityLink} = activity;
  return (
    <>
    <div className='card'>
        <div>{activityName}</div>
        <div>{startDate.split('T')[0]} to {endDate.split('T')[0]}</div>
        <div>Start-time: {startTime} and End-time: {endTime}</div>
    </div>
    
    </>
  )
}

export default Card;