import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { CartContext } from "../components/Context/CartContext";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Heading,
  Highlight,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import Product from "../components/Product";
import Timer1 from "../components/Timer1";
import { Icon } from "@chakra-ui/react";
import { BsShieldCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../components/Footer";

const Cart = () => {
  const { arr, removeItem } = useContext(CartContext);
  console.log(arr)
  
  const price = 1470000.15;

let dollarUSLocale = Intl.NumberFormat('en-US');
let dollarIndianLocale = Intl.NumberFormat('en-IN');

// console.log("US Locale output: " + dollarUSLocale.format(price));
// console.log("Indian Locale output: " + dollarIndianLocale.format(price));

  let prev = arr.reduce((acc, el) => {
    return acc + el.discountedPrice;
  }, 0);
  let prevTotal = arr.reduce((acc, el) => {
    return acc + el.mainPrice;
  }, 0);
  let prevF = arr.reduce((acc, el) => {
    return acc + el.off;
  }, 0);
  console.log(prev);
  const [max, setMax] = useState(prev);
  const [maxTotal, setMaxTotal] = useState(prevTotal);
  const [f, setF] = useState(prevF);

  function calculate(e, discountedPrice, mainPrice, off) {
    setMax( e *  discountedPrice);
    setMaxTotal(e * mainPrice);
    setF(e*off)
  }
  return (
    <>
      <NavBar />
      <Box h="80px" bg="#f0f2f5">
        <Flex ml="10rem" mr="8rem" pt="0.5rem">
          <Image
            src="https://www.bestbuy.com/~assets/bby/_com/updated-microsoft-image-ea7d2787f444188a223e599cf09fc63b.jpg"
            h="60px"
          ></Image>
          <Box lineHeight="0.9rem" ml="1rem">
            <Heading fontSize="2xl">
              Save on Microsoft 365 with your device
            </Heading>
            <Text fontSize="sm">
              Includes Office apps, 1TB of cloud storage and more
            </Text>
            <Text ml="2rem" fontSize="xs">
              Auto-renews annually after 15 months at then-current price.
            </Text>
          </Box>
          <Menu>
            <MenuButton
              bg="white"
              mt="0.5rem"
              ml="20px"
              border="2px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              1 Person - PC/Mac - $69.99/yr
            </MenuButton>
            <MenuList>
              <MenuItem>1 Person - PC/Mac - $69.99/yr</MenuItem>
              <MenuItem>6 Person - PC/Mac - $99.99/yr</MenuItem>
            </MenuList>
          </Menu>
          <Button
            mt="0.5rem"
            ml="20px"
            p="20px"
            colorScheme="teal"
            variant="solid"
          >
            Add to Cart
          </Button>
        </Flex>
      </Box>

      <Flex bg="#f0f2f5">
        <Box w="70%" m="40px" mt="20px" h="800px">
          {arr.map((item) => (
            <Box h="260px" mt="20px" bg="white" p="10px">
              <Text fontSize="0.8rem">
                <TimeIcon /> Deal ends in <Timer1 />
              </Text>
              <Flex pt="10px" h="150px">
                <Image src={item.img} h="40%" />
                <Box w="30%" ml="5%">
                  <Link color="blue" fontSize="xs">
                    {item.title}
                  </Link>
                </Box>
                <Box>
                  <RadioGroup defaultValue="1">
                    <Stack>
                      <Radio value="1">
                        <Text fontSize="xs">Pickup at North Anchorage</Text>
                        <Link fontSize="xs" color="blue">
                          Available Today at a store 6 miles away
                        </Link>
                      </Radio>
                      <Radio value="2">
                        <Text fontWeight="bold" fontSize="xs">
                          Shipping to 96939
                        </Text>
                        <Text fontSize="xs">Unavailable in this area</Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Stack ml="10%" w="10%" align="left">
                  <select
                    border="1px solid black"
                    placeholder=""
                    onChange={(e) =>
                      calculate(
                        e.target.value,
                        item.discountedPrice,
                        item.mainPrice,
                        item.off
                      )
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <Button
                    color="blue"
                    variant="link"
                    size="xs"
                    ml="10px"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                  <Button color="blue" variant="link" size="xs" ml="10px">
                    Save
                  </Button>
                </Stack>
                <Box ml="10%">
                  <Heading fontSize="l">${item.discountedPrice}</Heading>
                  <Text lineHeight="2rem" fontSize="sm" m="0.1rem">
                    <Highlight
                      query="Save %90"
                      styles={{ bg: "red", color: "white" }}
                    >
                      Save %90
                    </Highlight>
                  </Text>
                  <Text lineHeight="0.5rem" fontSize="sm" m="0.1rem">
                    Was{item.mainPrice}
                  </Text>
                </Box>
              </Flex>
              <Box h="80px" ml="20%">
                <Heading fontSize="sm">Protected plans</Heading>
                <Divider />
                <Flex p="10px">
                  <Box ml="5%">
                    <Icon as={BsShieldCheck} />
                  </Box>

                  <Box ml="10%">
                    <Link color="blue" fontSize="xs">
                      2-Year Accidental Geek Squad Replacement
                    </Link>
                    <Box>
                      <Text color="blue" fontSize="xs">
                        <StarIcon color="#ffe000" />
                        <StarIcon color="#ffe000" />
                        <StarIcon color="#ffe000" />
                        <StarIcon color="#ffe000" />
                        <StarIcon color="#ffe000" />
                        (324)
                      </Text>
                    </Box>
                  </Box>
                  <Heading fontSize="sm" ml="10%">
                    $9.99
                  </Heading>
                  <Button ml="10%" colorScheme="blue" variant="outline">
                    <Icon
                      as={AiOutlineShoppingCart}
                      w="30px"
                      h="30px"
                      pt="0.2rem"
                    />
                    Add to Cart
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
        </Box>
        <Box h="650px" w="30%" bg="white">
          <Stack p="2rem" lineHeight="15px">
            <Heading textAlign="center" fontSize="xl">
              Order Summary
            </Heading>
            <Divider border="1px" />
            <Flex justifyContent="space-between">
              <Text fontSize="sm">Original Price</Text>
              <Text fontSize="sm">${ dollarUSLocale.format(maxTotal)}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontSize="sm">Savings</Text>
              <Text fontSize="sm">${f}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontSize="sm">Shoping</Text>
              <Text fontSize="sm">0</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontSize="sm">Store Pickup</Text>
              <Text fontSize="sm">0</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Link fontSize="sm" color="blue">
                Estimated Sales Tax
              </Link>
              <Text fontSize="sm">0</Text>
            </Flex>
            <Divider border="1px" />
            <Flex justifyContent="space-between">
              <Heading fontSize="lg">Total</Heading>
              <Text fontSize="sm">${+max}</Text>
            </Flex>
            <Button colorScheme="yellow" color="black" variant="solid">
              Checkout
            </Button>
            <Button colorScheme="facebook" color="white" variant="solid">
              PayPal <Text as="sup">Checkout</Text>
            </Button>
            <Text fontSize="sm">
              <Link color="blue">Sign in or create an account now </Link> to get
              My Best Buy™ Points
            </Text>
            <Divider border="1px" />
            <Flex>
              <Box fontSize="sm" pt="20px">
                <Image
                  src="https://www.bestbuy.com/~assets/bby/_com/MBBCC_MBBVC_Contactless_Dual_Yellow_Edge_RGB-a32c353844fb660dd08157fcccf95d42.png"
                  h="40%"
                ></Image>
                <Text mt="20px">
                  <Link color="blue">Show me how </Link>
                </Text>
              </Box>
              <Box pt="20px">
                <Heading fontSize="lg">10% back in rewards</Heading>
                <Text fontSize="x-small">
                  on first day of purchases or flexible financing for new My
                  Best Buy® Credit Cardmembers.
                </Text>
              </Box>
            </Flex>
            <Divider border="1px" />
            <Box pt="20px" pb="20px">
              <Heading fontSize="lg">
                Looking for a lease to own option?
              </Heading>
              <Text fontSize="sm" pt="10px">
                Enjoy the tech you want today.{" "}
                <Link color="blue">Learn more </Link>
              </Text>
            </Box>
            <Divider border="1px" />
          </Stack>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Cart;
