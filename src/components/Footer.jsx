import React from 'react'
import { Accordion, Flex, Image, Heading,Text,Box,Button } from "@chakra-ui/react";
import TataNeuIcon from "../assets/images/Logo.svg"
import social from "../assets/images/social.svg"
const Footer = () => {
  return (
    <Flex w={'100%'} display={{base:"block",md:"flex"}}  mt={'30px'} bg={'black'} color={'white'} pl={'80px'} py={'30px'} justifyContent={'space-between'}>
<Flex flexDir={'column'} gap={10}>
   <Box> <Image src={TataNeuIcon} /></Box>
  <Box> <Image src={social} /></Box>
</Flex>
<Flex  mr={'30px'} gap={10} mt={{base:"30px",md:'0px'}}>
    <Box>
        <Text mb={'15px'} fontSize={'18px'} fontWeight={'600'} lineHeight={'21px'}>Help & Support</Text>
        <Text mb={'12px'}  fontSize={'14px'} fontWeight={'400'} lineHeight={'17px'}>Terms & Service</Text>
        <Text mb={'12px'}   fontSize={'14px'} fontWeight={'400'} lineHeight={'17px'}>Privacy Policy</Text>
        <Text mb={'12px'}  fontSize={'14px'} fontWeight={'400'} lineHeight={'17px'}>FAQ</Text>
    </Box>
    <Box>
        <Text mb={'12px'}  fontSize={'18px'} fontWeight={'600'} lineHeight={'21px'}>Customer Care</Text>
        <Text mb={'12px'}  fontSize={'14px'} fontWeight={'400'} lineHeight={'17px'}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
        <Text mb={'12px'}  fontSize={'14px'} fontWeight={'400'} lineHeight={'17px'}>987654321</Text>
        <Text mb={'12px'}  fontSize={'14px'} fontWeight={'400'} lineHeight={'17px'}>Tataneu Email ID</Text>
    </Box>
</Flex>
    </Flex>
  )
}

export default Footer