import React from 'react'
import { Carousel } from '../../../node_modules/react-carousel3/dist/esm/index';
import './Carousel.css'
import WorksBtn from '../WorksBtn/WorksBtn';


const style = {
  width: 297,
  height: 296,
};
  
  export default function MyCarousel(props){

    const slides = props.works.map((ele)=>{
      return <div key={ele.id} style={style}><img className='--myCarousel-img' alt="" src={ele.imgUrl} /><WorksBtn site={ele.siteLink} repo={ele.githubLink}/></div>
    })

    return(
      <div className='--myCarousel-carousel-container'
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Carousel height={460} width={980} yOrigin={42} yRadius={48} autoPlay={false}>
          {slides}
          {/* <div key={1} style={style}>
            <img className='--myCarousel-img' alt="" src="/Portfolio/images/proof.jpg" />
          </div>
          <div key={2} style={style}>
            <img className='--myCarousel-img' alt="" src="/Portfolio/images/proof.jpg" />
          </div>
          <div key={3} style={style}>
            <img className='--myCarousel-img' alt="" src="/Portfolio/images/proof.jpg" />
          </div>
          <div key={4} style={style}>
            <img className='--myCarousel-img' alt="" src="/Portfolio/images/proof.jpg" />
          </div>
          <div key={5} style={style}>
            <img className='--myCarousel-img' alt="" src="/Portfolio/images/proof.jpg" />
          </div>
          <div key={6} style={style}>
            <img className='--myCarousel-img' alt="" src="/Portfolio/images/proof.jpg" />
          </div> */}
        </Carousel>
      </div>
    )
  } 