
import './App.css';
import React from 'react';
import PreviewCard from './Components/PreviewCard'; 

const App = () => {
  return (
    <div className='cards'>
      <div className='card-1'>
      <PreviewCard
        title="Sedan"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip."
        imageSrc="./Components/images/icon-sedans.svg"
      />
      </div>

      <div className='card-2'>
      <PreviewCard
        title="SUVs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures."
        imageSrc="./images/icon-suvs.svg"
      />
      </div>

      <div className='card-3'>
      <PreviewCard
        title="Luxury"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style."
        imageSrc="./images/icon-luxury.svg"
      />
      </div>
    </div>
  );
};

export default App;

