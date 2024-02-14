import React from 'react'
import {Box,Text,Image,Flex, Card, CardBody,Stack} from "@chakra-ui/react"
import hdfc from "../assets/images/hdfc.svg"
import icici from "../assets/images/icici.svg"
import bob from "../assets/images/bob.svg"
const Partners = () => {
  return (
    <Flex mt={{base:"30px",xl:"0px"}} flexDir={{base:"column",lg:'row'}} w={'100%'} py={{base:"35px",md:'70px'}} pl={{base:'10px',lg:'80px'}} bgColor={'#f8f9fa'} gap={{base:10,lg:20}}>
<Text fontSize={{base:'30px',md:'38px'}} fontWeight={'600'} lineHeight={'52px'} >Our Partners</Text>
    <Flex  w={{base:"100%",xl:"70%"}} justifyContent={'space-between'}   >
    <Box>
        <Image src={hdfc} alt='hdfc' />
        <Text textAlign={'center'}  fontSize={{base:'14px',md:'24px'}}  fontWeight={'600'} lineHeight={'33px'}>HDFC Bank</Text>
    </Box>
    <Box>
        <Image src={icici} alt='hdfc' />
        <Text textAlign={'center'}  fontSize={{base:'14px',md:'24px'}} fontWeight={'600'} lineHeight={'33px'}>ICICI Bank</Text>
    </Box>
    <Box display={{base:"none",sm:"block"}}>
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