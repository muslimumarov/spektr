import { Box } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
const slider = () => {

  return (
    <Box>
       <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
       <SwiperSlide>
        <img src="https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1" alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Image+2" alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Image+3" alt="Image 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x400/FF33A1/FFFFFF?text=Image+4" alt="Image 4" />
      </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default slider
