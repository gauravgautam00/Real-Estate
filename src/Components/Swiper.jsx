import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import json from "../slider.json"

const MyCarousel = () => {
  return (
    <Swiper style={{height:"10rem",width:"10rem",backgroundColor:"black"}}>
        
    { json.map((ele,ind)=>{
        
<SwiperSlide key={ind}>
<div>{ele}</div>

<img src={ele.image}/>


</SwiperSlide>
     })}
    </Swiper>
  );
};

export default MyCarousel;
