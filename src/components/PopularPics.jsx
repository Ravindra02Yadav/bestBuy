import { Box, Flex, Link, Image } from '@chakra-ui/react'
import React from 'react'


const PopularPics = ( {img, name}) => {
  return (
    <>
   
<Box w="100%" m="10px">
    <Box height="70%" >
    <Image src={img}  objectFit="cover" maxWidth="100%" maxHeight="100%" />
    </Box>
   <Box mt="15%">
   <Link color='teal.500' href='#' fontSize="md" lineHeight="1px" letterSpacing="1px">
    {name}
  </Link>
   </Box>
  </Box>   


    </>
  )
}

export default PopularPics