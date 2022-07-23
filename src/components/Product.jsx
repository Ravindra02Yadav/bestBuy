import { StarIcon, TimeIcon } from '@chakra-ui/icons'
import { Box,Button,Heading,Highlight,Icon,Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Timer1 from './Timer1'
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'

const Product = ( {id, img, title, reviews, discountedPrice, mainPrice,off,obj} ) => {
    // {toString(Number(mainPrice) - Number(discountedPrice))}
    // console.log(obj)
    const change = useContext(CartContext)

  return (
    <>
<Box key={id} border="1px solid gray" h="500px" w="350px" p="10px">
<Image src={img}
p="20px" pl="20px" h="40%"></Image>
    <Link fontSize="xs" color="blue" fontWeight="10px">{title}</Link>
    <Text color="blue" mt="20px">
        <StarIcon color="#ffe000"/>
    <StarIcon color="#ffe000"/>
    <StarIcon color="#ffe000"/> 
    <StarIcon color="#ffe000"/>({reviews})</Text>
    <Heading size='lg' mt="10px" mb="10px">${discountedPrice}</Heading>
    <Text ><Highlight query='Save $140'  styles={{bg:"red",color:"white",fontWeight:"bold"}}>Save $140</Highlight>${mainPrice}</Text>
    <Text fontSize="0.8rem"><TimeIcon />  Deal ends in    <Timer1/></Text>
    <Text></Text>
    <Button onClick={()=>change.changeArr(obj)} mt="50px" size="sm" varient="solid" colorScheme='yellow' bg="#ffe000" leftIcon={<Icon as={AiOutlineShoppingCart} w={30} h={30} pt="0.2rem"/>}>Add to Cart</Button>
</Box>
    </>
  )
}

export default Product