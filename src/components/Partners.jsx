import React from 'react'
import {Box,Text,Image,Flex, Card, CardBody,Stack} from "@chakra-ui/react"
import hdfc from "../assets/images/hdfc.svg"
import icici from "../assets/images/icici.svg"
import bob from "../assets/images/bob.svg"
const Partners = () => {
  return (
    <Flex w={'100%'} pl={{base:'10px',lg:'80px'}} bgColor={'#f8f9fa'} gap={{base:4,md:20}}>
<Text fontSize={{base:'20px',md:'38px'}} fontWeight={'600'} lineHeight={'52px'} my={'96px'}>Our Partners</Text>
    <Flex mt={'72px'} w={'70%'} justifyContent={'space-between'}  >
    <Box>
        <Image src={hdfc} alt='hdfc' />
        <Text textAlign={'center'}  fontSize={{base:'14px',md:'24px'}}  fontWeight={'600'} lineHeight={'33px'}>HDFC Bank</Text>
    </Box>
    <Box>
        <Image src={icici} alt='hdfc' />
        <Text textAlign={'center'}  fontSize={{base:'14px',md:'24px'}} fontWeight={'600'} lineHeight={'33px'}>ICICI Bank</Text>
    </Box>
    <Box>
        <Image src={icici} alt='hdfc' />
        <Text textAlign={'center'}  fontSize={{base:'14px',md:'24px'}} fontWeight={'600'} lineHeight={'33px'}>ICICI Bank</Text>
    </Box>
    <Box>
        <Image src={bob} alt='hdfc' />
        <Text textAlign={'center'}  fontSize={{base:'14px',md:'24px'}}fontWeight={'600'} lineHeight={'33px'}>Bank of Baroda</Text>
    </Box>
    
    </Flex>
    </Flex>
  )
}

export default Partners