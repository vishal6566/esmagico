import React from 'react'
import {Box,Flex,Image,Text} from "@chakra-ui/react"
import hand from "../assets/images/hand.svg"
import heart from "../assets/images/heart.svg"
import customer from "../assets/images/customer.svg"
import Ellipse1 from "../assets/images/Ellipse1.svg"
import Ellipse2 from "../assets/images/Ellipse2.svg"
import quote from "../assets/images/quote.svg"
import dots from "../assets/images/dots.svg"
const CustomerSay = () => {
  return (
    
    <Box w={'100%'}  pl={{base:'0px',lg:'80px'}} pt={'50px'} bgColor={'#f8f9fa'}>
<Flex justifyContent={'center'} mt={'30px'} gap={6}  pos={'relative'}>
    <Box>
  
    <Image src={heart}   />
    <Image src={hand} pos={'absolute'} top={5}  />
    </Box>
    <Text fontSize={{base:'24px',lg:'44px'}} fontWeight={'600'} lineHeight={{base:"20px",lg:'60px'}}>What Our Customer Says</Text>
</Flex>
<Flex display={{base:"block",lg:"flex"}}>
    <Box pos={'relative'} >
        
        <Image src={Ellipse2}  />
        <Image src={Ellipse1} pos={'absolute'} top={10} left={50}/>
        <Image src={customer} pos={'absolute'} top={{base:0,lg:10}} left={{base:0,lg:20}} />
    </Box>
    <Box mt={'30px'}>
        <Image src={quote} />
       
    </Box>
    <Box w={{base:"100%",lg:"35%"}} mt={'65px'} ml={'20px'}>
            <Text my={'15px'} fontSize={'24px'} fontWeight={'600'} lineHeight={'29px'}>Sunil Gupta</Text>
            <Text fontSize={'18px'} fontWeight={'600'} lineHeight={'21px'}>Chartered accountant</Text>
            <Text my={'15px'}pr={'20px'} fontSize={'16px'} fontWeight={'400'} lineHeight={'24px'} color={'#2A2A2A'} textAlign={'justify'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortL orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortor, et convallis libero vehicula ut. or, et convallis libero vehicula ut. </Text>
       <Image mt={'50px'} src={dots} />
        </Box>
</Flex>
    </Box>
  )
}

export default CustomerSay