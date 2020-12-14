import React from 'react';
import { InfoSection } from '../components';
import { homeObjTwo } from './Data';
import NewsSection from './NewsSection';
import 'antd/dist/antd.css';



const Home = () => {

  return (
    <>
      <div >
      <NewsSection category='top-headlines'
       pais='country=us'
       query='country=mx' 
       topHeading='Top' 
       results='5' />
       </div>
       <div >
      <NewsSection category='everything' 
      query='q=mexico' 
      topHeading='Trending en Mexico' 
      results='5'
      language= 'es' />
      </div>
      <div >
      <NewsSection category='everything' 
      query='q=trending tech' 
      topHeading='Trends de Tecnologia' 
      results='5' />
      </div>
      <div >
      <NewsSection category='everything' 
      query='q=popular mx' 
      topHeading='Popular' 
      results='5' />
      </div>
 
    </>
  )
}

export default Home;
