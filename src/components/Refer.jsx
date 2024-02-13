import React from 'react'
import {Box,Text,Image,Flex,Button} from "@chakra-ui/react"
import Ellipse1 from "../assets/images/Ellipse1.svg"
import Ellipse6 from "../assets/images/Ellipse6.svg"
import iphone from "../assets/images/iphone.svg"
import friends from "../assets/images/friends.svg"
const Refer = () => {
  return (
<Flex w={'100%'} display={{base:'block',md:'flex'}} mt={'30px'}  pl={{base:'10px',md:'80px'}} justifyContent={'space-between'}>
    <Flex flexDir={'column'} justifyContent={'center'} mt={'50px'} height={'fit-content'}>
    <Text fontSize={'44px'} mb={'30px'} fontWeight={'600'} lineHeight={'60px'}>Refer & Earn Now</Text>
    <Text fontSize={'22px'} fontWeight={'400'} lineHeight={'24px'}>Get a ₹500 Big Basket gift card</Text>
    <Button  borderRadius={'5px'}border={'none'} color={'white'}  mt={'20px'} w={'274px'} h={'56px'} fontSize={'18px'} fontWeight={'700'} lineHeight={'20px'} bgColor={'#8800ec'}>Refer and Earn</Button>
    <Text fontSize={'16px'} mt={'20px'} fontWeight={'400'} lineHeight={'20px'} textDecoration={'underline'}>Terms and Conditions apply</Text>
    </Flex>

    <Box pos={'relative'} display={{base:'none',md:'block'}}>
        <Image src={Ellipse6}  />
        <Image src={Ellipse1} pos={'absolute'} top={0} left={200}/>
        <Image src={iphone} pos={'absolute'} top={30} left={320} />
        <Image src={friends} pos={'absolute'} bottom={0} left={200} />
    </Box>

</Flex>
  )
}

export default Refer