import React from 'react'
import {Box,Text,Image,Flex,Button} from "@chakra-ui/react"

import refers from "../assets/images/refer.png"

const Refer = () => {
  return (
<Flex w={'100%'} flexDir={{base:'column-reverse',lg:'row'}} mt={'30px'}   pl={{base:'10px',md:'80px'}} justifyContent={'space-between'}>
    <Flex  flexDir={'column'} alignItems={{base:'center',md:'start'}} mt={'50px'} height={'fit-content'}>
    <Text fontSize={{base:'30px',md:'44px'}} mb={'30px'} fontWeight={'600'} lineHeight={'60px'}>Refer & Earn Now</Text>
    <Text fontSize={'22px'} fontWeight={'400'} lineHeight={'24px'}>Get a ₹500 Big Basket gift card</Text>
    <Button  borderRadius={'5px'}border={'none'} color={'white'}  mt={'20px'} w={'274px'} h={'56px'} fontSize={'18px'} fontWeight={'700'} lineHeight={'20px'} bgColor={'#8800ec'}>Refer and Earn</Button>
    <Text fontSize={'16px'} mt={'20px'} fontWeight={'400'} lineHeight={'20px'} textDecoration={'underline'}>Terms and Conditions apply</Text>
    </Flex>

    <Box  >
        <Image src={refers}  />
      
    </Box>

</Flex>
  )
}

export default Refer