import {register} from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import "./Slide.css";

import filipe01 from '../img/filipe01.jpg'
import filipe02 from '../img/filipe02.jpg'
import filipe03 from '../img/filipe03.jpg'
import filipe04 from '../img/filipe04.jpg'

register()

const Slide = () => {

   


const data = [
    {id: '1', image: filipe01},
    {id: '2', image: filipe02},
    {id: '3', image: filipe03},
    {id: '4', image: filipe04},
]

  return (
    <div className="container-slide">

        <Swiper
            slidesPerView={1}
            pagination={{clickable:true}}
            navigation
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <img 
                    src={item.image} 
                    alt="slider" 
                    className='slide-item'
                    />
                </SwiperSlide>
            ))}
        </Swiper>

    </div>
  )
}

export default Slide