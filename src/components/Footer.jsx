import { Box, Button, Divider, Flex, Heading, Input, Link,Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {BsBoxSeam,BsFacebook,BsInstagram,BsPinterest,BsTruck, BsTwitter, BsYoutube} from 'react-icons/bs'
import {RiExchangeBoxLine} from 'react-icons/ri'


const Footer = () => {
  return (
    <>
<Box h="850px" w="100"  bg="#f0f2f5" p="20px">
    <Flex h="200px" justifyContent="space-evenly">
        <Box m="20px">
        <Box pl="20px"><Icon as={AiOutlineQuestionCircle} w={100} h={100} pt="0.2rem"/></Box>
        <Link color="blue">Visit our Support Center</Link>
        </Box>
        <Box m="20px">
        <Box pl="20px"><Icon as={BsBoxSeam} w={100} h={100} pt="0.2rem"/></Box>
        <Link color="blue">Check your Order Status</Link>
            </Box>
            <Box m="20px">
            <Box pl="20px"><Icon as={BsTruck} w={100} h={100} pt="0.2rem"/></Box>
        <Link color="blue">Shipping, Delivery & Store Pickup</Link>
            </Box>
            <Box m="20px">
            <Box pl="20px"><Icon as={RiExchangeBoxLine} w={100} h={100} pt="0.2rem"/></Box>
        <Link color="blue">Returns & Exchanges</Link>
            </Box>
    </Flex>
    <Divider />
    <Flex  h="550px" justifyContent="space-between">
        <Flex  h="550px" w="60%" justifyContent="space-between">
        <Box  lineHeight="25px">
            <Heading fontSize="md">Order & Purchases</Heading>
            <Text><Link color="blue" fontSize="sm">Check Order Status</Link></Text>
            <Text><Link color="blue" fontSize="sm">Shipping, Delivery & Pickup</Link></Text>
            <Text><Link color="blue" fontSize="sm">Returns & Exchanges</Link></Text>
            <Text><Link color="blue" fontSize="sm">Price Match Guarantee</Link></Text>
            <Text><Link color="blue" fontSize="sm">Product Recalls</Link></Text>
            <Text><Link color="blue" fontSize="sm">Trade-In Program</Link></Text>
            <Text><Link color="blue" fontSize="sm">CGift Cards</Link></Text>
            <Box  lineHeight="25px" mt="40px">
        <Heading fontSize="md">Payment Options</Heading>
        <Text><Link color="blue" fontSize="sm">My Best Buy® Credit Card</Link></Text>
            <Text><Link color="blue" fontSize="sm">Pay Your Bill at Citibank</Link></Text>
            <Text><Link color="blue" fontSize="sm">Lease to Own</Link></Text>
           
            
        </Box>
        </Box>
        <Box  lineHeight="25px">
        <Heading fontSize="md">Support & Services</Heading>
        <Text><Link color="blue" fontSize="sm">Visit our Support Center</Link></Text>
            <Text><Link color="blue" fontSize="sm">Shop with an Expert</Link></Text>
            <Text><Link color="blue" fontSize="sm">Schedule a Service</Link></Text>
            <Text><Link color="blue" fontSize="sm">Manage an Appointment</Link></Text>
            <Text><Link color="blue" fontSize="sm">Protection & Support Plans</Link></Text>
            <Text><Link color="blue" fontSize="sm">Haul Away & Recycling</Link></Text>
            <Text><Link color="blue" fontSize="sm">Contact Us</Link></Text>
            <Box  lineHeight="25px" mt="40px">
        <Heading fontSize="md">Rewards & Membership</Heading>
        <Text><Link color="blue" fontSize="sm">Rewards & Membership</Link></Text>
            <Text><Link color="blue" fontSize="sm">My Best Buy</Link></Text>
            <Text><Link color="blue" fontSize="sm">View Points & Certificates</Link></Text>
            <Text><Link color="blue" fontSize="sm">Member Offers </Link></Text>
           
        </Box>
        </Box>
        <Box  lineHeight="25px">
        <Heading fontSize="md">Partnerships</Heading>
        <Text><Link color="blue" fontSize="sm">Affiliate Program</Link></Text>
            <Text><Link color="blue" fontSize="sm">Advertise with Us</Link></Text>
            <Text><Link color="blue" fontSize="sm">Developers</Link></Text>
            <Text><Link color="blue" fontSize="sm">Best Buy Health</Link></Text>
            <Text><Link color="blue" fontSize="sm">Best Buy Education</Link></Text>
            <Text><Link color="blue" fontSize="sm">Best Buy Business</Link></Text>
            <Box  lineHeight="25px" mt="40px">
        <Heading fontSize="md">About Best Buy</Heading>
        <Text><Link color="blue" fontSize="sm">Corporate Information</Link></Text>
            
            <Text><Link color="blue" fontSize="sm">Careers</Link></Text>
            <Text><Link color="blue" fontSize="sm">Corporate Responsibility & Sustainability</Link></Text>
            <Text><Link color="blue" fontSize="sm">Discover & Learn</Link></Text>
           
            
        </Box>
        </Box>
        </Flex>
        <Box bg="white" h="550px" w="30%" p="20px" >
            <Text ><Link color="blue">Sign in or Create Account</Link></Text>
            <Divider m="20px" />
        <Heading fontSize="xl">Get the latest deals and more.</Heading>
        <Flex mt="20px">
        <Input placeholder='Enter email address ' />
        <Button colorScheme='blue'>Sign Up</Button>
        </Flex>
        <Divider m="20px" />
        <Heading fontSize="2xl">Best Buy app</Heading>
        <Link color="blue">Learn More</Link>
        <Divider m="20px" />
        <Flex justifyContent="space-between" mt="20px">
      <Box>
      <Icon as={BsFacebook} w={10} h={10} pt="0.2rem" color="blue"/>
      </Box>
      <Box>
      <Icon as={BsTwitter} w={10} h={10} pt="0.2rem" color="blue"/>
      </Box>
      <Box>
      <Icon as={BsInstagram} w={10} h={10} pt="0.2rem" color="blue"/>
      </Box>
      <Box>
      <Icon as={BsPinterest} w={10} h={10} pt="0.2rem" color="blue"/>
      </Box>
      <Box>
      <Icon as={BsYoutube} w={10} h={10} pt="0.2rem" color="blue"/>
      </Box>
        </Flex>
        <Divider m="20px" />
        <Box>
            <Link color="blue">Forums, blogs & more</Link>
        </Box>
        </Box>
    </Flex>
    <Divider m="20px"/>
    <Flex fontSize="sm" justifyContent="space-between">
        <Box >
        <Text>How was your experience?
         <Link color="blue"> Give feedback about our website</Link></Text>
        </Box>
        <Box >
            <Text>Best Buy <Link color="blue">Canada</Link></Text>
        </Box>
    </Flex>
</Box>
    </>
  )
}

export default Footer