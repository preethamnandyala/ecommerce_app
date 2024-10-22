import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { HomeCarouselData } from './HomeCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';


const HomeCarousel = () => {
  const items = HomeCarouselData.map((item) => <img className='cursor-pointer' role='presentation' alt="" src= {item.image}/>)
    return(
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={1000}
          infinite
        />
    )
}
    


export default HomeCarousel;