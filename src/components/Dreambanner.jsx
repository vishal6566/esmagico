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
const Dreambanner = () => {
  return (
   <Flex w={'100%'} gap={'20px'}   pl={'80px'}>
    <Box w={'50%'} mt={'80px'}  >
        <Text color={'#2A2A2A'} fontSize={'60px'} fontWeight={'700'} lineHeight={'96px'}>Turn Dreams into Reality with <span style={{color:'#FF0096'}}>Personal Loans</span> </Text>
   <Flex gap={'100px'} mt={'30px'}>
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
   <Flex gap={'117px'} mt={'30px'} >
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


    <Box w={'45%'} mt={'40px'}   pos={'relative'}>
        <Image src={Ellipse3}    />
        <Image src={Ellipse2}  pos={'absolute'} top={'70'} left={'70'}  />
        <Image src={Ellipse1}  pos={'absolute'} top={'120'} left={'120'}  />
        <Image src={father}  pos={'absolute'} top={'0'} left={'0'}  />
    </Box>
   </Flex>
  )
}

export default Dreambanner