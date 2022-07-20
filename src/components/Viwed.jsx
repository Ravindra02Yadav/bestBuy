import { Box, Flex, Heading,Link } from '@chakra-ui/react'
import React from 'react'
import PopularPics from './PopularPics'

const Viwed = () => {
  return (
    <>
    <Box h="700px"  m="20px">
<Heading as="h4" size='md' textDecoration='underline'>You viewed</Heading>
<Box border="1px solid gray " mb="10px"></Box>

<Link color="blue" >Manage all your recently viewed items</Link>

<Flex ml="20px" m="20px">
   
<PopularPics img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=640;maxWidth=550"
 name="Apple - AirPods Pro (with Magsafe Case)" />

 <PopularPics img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401735_sd.jpg;maxHeight=640;maxWidth=550"
 name="Samsung - 55 Class-7 Series LED-4K-UHD" />
 
 
 <PopularPics img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=640;maxWidth=550"
 name="Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi" />

 <PopularPics img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=640;maxWidth=550"
 name="MacBook Air 13.3 Laptop- Apple M1 chip" />
 
 
 </Flex>
<Box bg="yellow" h="80px" >
    <Heading as="h4" size="lg" text-align="center" p="20px" pl="25%">Insignia™ air fryers product recall.
    <Link fontSize="md" color="blue" ml="20px">Learn More</Link>
    </Heading>
</Box>
    </Box>
    </>
  )
}

export default Viwed