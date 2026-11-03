import React from 'react';
import Card from './Card';
const HomeCards = () => {
  const title = "Inter-IIIT", date = "2-11-2026", start_time="9:00", end_time = "11:00";
  return (
    <>
      <Card 
          title={title}
          date = {date}
          start_time={start_time}
          end_time={end_time}
      />
    </>
  )
}

export default HomeCards;