import React from 'react';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/Men/men_kurta';


const Homepage = () => {

  return (
    <div>
      <HomeCarousel/>

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel sectionName="Men's Kurta" data={mens_kurta}/>
        <HomeSectionCarousel sectionName="Men's Kurta" data={mens_kurta}/>
        <HomeSectionCarousel sectionName="Men's Kurta" data={mens_kurta}/>
        <HomeSectionCarousel sectionName="Men's Kurta" data={mens_kurta}/>
        <HomeSectionCarousel sectionName="Men's Kurta" data={mens_kurta}/>
        <HomeSectionCarousel sectionName="Men's Kurta" data={mens_kurta}/>
      </div>

    </div>
  )

}
export default Homepage;
