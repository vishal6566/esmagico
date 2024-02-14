import React from 'react'
import {Box,Text,Image,Flex,Button} from "@chakra-ui/react"
import avail from "../assets/images/avail.svg"
import interest from "../assets/images/interest.svg"
import doc from "../assets/images/doc.svg"
import quick from "../assets/images/quick.svg"
import Ellipse3 from "../assets/images/Ellipse3.svg"
import Ellipse2 from "../assets/images/Ellipse2.svg"
import Ellipse1 from "../assets/images/Ellipse1.svg"
import father from "../assets/images/father-pointing-finger.svg"
import point from "../assets/images/pointing.png"
const Dreambanner = () => {
  return (
   <Flex w={'100%'} display={{base:'block',md:'flex'}} justifyContent={'space-between'}  pl={{base:'10px',md:'20px',lg:'80px'}}>
    <Box  w={{base:'100%',md:'53%'}} mt={'80px'}  >
        <Text   color={'#2A2A2A'} fontSize={{base:'30px',md:'40px',xl:'55px'}} fontWeight={'700'} lineHeight={{base:'40px',md:'60px',xl:'96px'}}>Turn Dreams into Reality with <span style={{color:'#FF0096'}}>Personal Loans</span> </Text>
   <Flex  mt={'30px'} flexDir={{base:'column',lg:'row'}} gap={{base:8,xl:"100px"}}>
    <Flex alignItems={'center'} gap={'17px'}>
        <Image w={'60px'} h={'60px'} src={avail} alt='avail icon' />
        <Box fontSize={'22px'} lineHeight={'27px'}>
            <Text fontWeight={'700'}>Avail Zero</Text>
            <Text fontWeight={'400'}>Processing Fee</Text>
        </Box>
    </Flex>
    <Flex alignItems={'center'} gap={'17px'}>
        <Image w={'60px'} h={'60px'} src={quick} alt='avail icon' />
        <Box fontSize={'22px'} lineHeight={'27px'}>
            <Text fontWeight={'700'}>Quick</Text>
            <Text fontWeight={'400'}>Personal Loan</Text>
        </Box>
    </Flex>
   </Flex>
   <Flex  mt={{base:'30px',lg:'30px'}} flexDir={{base:'column',lg:'row'}} gap={{base:8,md:10,xl:'117px'}} >
    <Flex alignItems={'center'} gap={'17px'}>
        <Image w={'60px'} h={'60px'} src={interest} alt='avail icon' />
        <Box fontSize={'22px'} lineHeight={'27px'}>
            <Text fontWeight={'700'}>Lowest</Text>
            <Text fontWeight={'400'}>Interest Rates</Text>
        </Box>
    </Flex>
    <Flex alignItems={'center'} gap={'17px'}>
        <Image w={'60px'} h={'60px'} src={doc} alt='avail icon' />
        <Box fontSize={'22px'} lineHeight={'27px'}>
            <Text fontWeight={'700'}>Minimal</Text>
            <Text fontWeight={'400'}>Documentation</Text>
        </Box>
    </Flex>
   </Flex>
   <Button borderRadius={'5px'}border={'none'} color={'white'}  mt={'40px'} w={'168px'} h={'56px'} fontSize={'18px'} fontWeight={'700'} lineHeight={'20px'} bgColor={'#8800ec'}>Apply Now</Button>
    </Box>


  
    <Box pt={{base:'120px',lg:'70px'}}  w={'46%'} display={{base:'none',md:'block'}} >
<Image src={point} />
    </Box>
   </Flex>
  )
}

export default Dreambanner