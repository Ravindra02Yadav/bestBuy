import { StarIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link,Text, Image, Highlight, Button, Icon, Divider, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Timer1 from "../components/Timer1";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Product from "../components/Product";
import {data} from '../Data/Data'

const DealsofDay = () => {
    const [datas,setDatas] = useState(data)
  return (
    <>
      <NavBar />
      <Box h="140px" bg="#0046bf" mt="50px">
        <Flex padding="20px">
          <Box color="white" lineHeight="3rem" ml="10%">
            <Heading ><Highlight query='Deal'  styles={{bg:"red",color:"white"}}>Deal</Highlight> of the Day.</Heading>
            <Heading as="h6" size="sm" fontWeight="1rem">
              Great new deals. Every day.
            </Heading>
            <Link color="yellow">See Deal of the Day FAQs</Link>
          </Box>
          <Box
           mt="10px"
            bg="white"
            w="200px"
            h="80px"
            borderRadius="0.2rem"
            ml="30%"
            p="10px"
            pl="20px"
            
          >
            <Heading fontWeight="10px">
              <Timer1 />
            </Heading>
            <Text size="xs" >
              hours minutes seconds
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex h="500px" mt="50px" >
<Box w="40%" m="40px">
    <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505902_sd.jpg;maxHeight=640;maxWidth=550"
    h="60%" pl="20%"
    ></Image>
</Box>
<Box w="50%" m="40px" lineHeight="180%">
    <Link fontSize="lg" color="blue" fontWeight="10px">Acer - Chromebook 315-15.6 HD Laptop- Intel Celeron N4000 - 4GB LPDDR4- 32GB eMMC</Link>
    <Text color="blue"><StarIcon color="#ffe000"/>
    <StarIcon color="#ffe000"/>
    <StarIcon color="#ffe000"/> 
    <StarIcon color="#ffe000"/>(65)</Text>
    <Heading size="xs" color="green">Get it today</Heading>
    <Text fontSize="0.8rem"><Highlight query='Pickup'  styles={{fontWeight:"bold"}}>Pickup</Highlight>:Available today at North Anchorage</Text>
    <Link fontSize="0.8rem" color="blue">See all pickup locations</Link>
    <Text fontSize="0.8rem"><Highlight query='Shipping'  styles={{fontWeight:"bold"}}>Shipping</Highlight>:Unavailable in your area</Text>
    <Text fontSize="0.8rem">This item is only available in certain markets.</Text>
    <Link fontSize="0.8rem" color="blue">Estimates for 96939</Link>
    <Heading size='lg'>$109.00</Heading>
    <Text ><Highlight query='Save $140'  styles={{bg:"red",color:"white",fontWeight:"bold"}}>Save $140</Highlight> Was $249.00</Text>
    <Text fontSize="0.8rem"><TimeIcon />  Deal ends in    <Timer1/></Text>
    <Heading fontSize="0.8rem">Free 6-month security software & <Link color="blue">1 more $29.99 value</Link></Heading>
    <Text></Text>
    <Button mt="10px" size="sm" varient="solid" colorScheme='yellow' bg="#ffe000" leftIcon={<Icon as={AiOutlineShoppingCart} w={30} h={30} pt="0.2rem"/>}>Add to Cart</Button>
</Box>

      </Flex>
      <Box p="20px" ><Divider orientation='horizontal' /></Box>
      <Heading m="20px" size="md">Bonus Deals of the Day</Heading>
      <Grid
      templateColumns='repeat(4, 1fr)'
       w="100%" m="20px">
      
      {datas.map(item =>(
        
        <Product obj = {item} key={item.id} img={item.img} title={item.title} rating={item.rating} reviews={item.reviews} discountedPrice={item.discountedPrice} mainPrice={item.mainPrice} off={item.off} />
      ))}
      </Grid>
      
    </>
  );
};

export default DealsofDay;
