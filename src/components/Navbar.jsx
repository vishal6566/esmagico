import React from 'react'
import {Box,Text,Image,Flex,Input} from "@chakra-ui/react"
import TataNeuIcon from "../assets/images/TataNeuIcon.svg"
import Search from "../assets/images/search.svg"
import Location from "../assets/images/location.svg"
import cart from "../assets/images/cart.svg"
import bell from "../assets/images/bell.svg"
import profile from "../assets/images/profile.svg"
const Navbar = () => {
  return (
   <Box w={'100%'}   display={{ base: "none", md: "block" }} p={'24px 32px'} bgColor={'#fdfdfd'} boxShadow={'box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'}>
    <Flex w={'98%'} height={'40px'}  justifyContent={'space-between'}  fontWeight={'600'} lineHeight={'20px'} fontSize={'14px'}>
     <Flex gap={'16px'} >
        <Image src={TataNeuIcon} alt='Tata Neu Icon' />
        <Flex gap={'24px'} alignItems={'center'} >
            <Text>Offer</Text>
            <Text>Stories</Text>
            <Text>Tata Pay</Text>
            <Text>NeuPass</Text>
        </Flex>
     </Flex>
     <Flex gap={'24px'} alignItems={'center'}>
<Flex alignItems={'center'}  h={'40px'} gap={'8px'} p={'8px 12px'} bgColor={'#e3e3e3'} borderRadius={'5px'}>
    <Image src={Search} w={'16px'} h={'16px'} alt='search icon' />
    <Input placeholder='Search Tata Neu' h={'40px'} border={'none'} outline={'none'} bgColor={'#e3e3e3'} />
</Flex>
<Flex gap={'2px'}>
    <Text>122018</Text>
    <Image src={Location} alt='location icon' w={'24px'} h={'24px'} />
</Flex>
<Flex gap={'24px'}>
<Image src={cart} alt='location icon' w={'24px'} h={'24px'} />
<Image src={bell} alt='location icon' w={'24px'} h={'24px'} />
    <Image src={profile} alt='location icon' w={'24px'} h={'24px'} />
</Flex>
     </Flex>
    </Flex>
   </Box>
  )
}

export default Navbar