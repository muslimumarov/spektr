import Navbar from '@/components/navbar/navbar'
import Slider from '@/components/slider/slider'
import { Box } from '@chakra-ui/react'
import React from 'react'
const index = () => {
  return (
    <Box>
        <Box>
        <Navbar/>
      </Box>
      <Box>
        <Slider/>
      </Box>
    </Box>
   )
}

export default index
