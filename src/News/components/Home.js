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
       topHeading='Top Noticias en México' 
       results='4' />
       </div>
       <div >
      <NewsSection category='everything' 
      query='q=mexico' 
      topHeading='Trending en Mexico' 
      results='4'
      language= 'es' />
      </div>
      <div >
      <NewsSection category='everything' 
      query='q=trending tech' 
      topHeading='Trends de Tecnologia' 
      results='4' />
      </div>
  <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Home;
