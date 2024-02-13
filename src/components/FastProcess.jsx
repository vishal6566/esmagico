import React from 'react'
import {Box,Text,Image,Flex,Button} from "@chakra-ui/react"
import process from "../assets/images/process.svg"
import Vector from "../assets/images/Vector.svg"
import stepper from "../assets/images/stepper.svg"


const FastProcess = () => {
  return (
    <Flex w={'100%'} alignItems={'center'}  >
        <Box w={'45%'} ml={'20px'}>
        <Image src={process} alt='lighting fast process' />
        </Box>
        <Box w={'45%'}>
      <Flex gap={'20'} justifyContent={'center'} mb={'30px'} >
        <Image src={Vector} alt='vector' />
        <Text fontSize={'44px'} fontWeight={'600'} lineHeight={'60px'}>Lightning Fast Process</Text>
      </Flex>
      <Flex flexDirection={'column'} gap={'20'}>
        <Image src={stepper} alt='stepper' />
        <Text textAlign={'center'} fontWeight={'500'} fontSize={'23px'} lineHeight={'28px'}>Customer share basic details</Text>
        <Button margin={'auto'} borderRadius={'5px'}border={'none'} color={'white'}  mt={'40px'} w={'168px'} h={'56px'} fontSize={'18px'} fontWeight={'700'} lineHeight={'20px'} bgColor={'#8800ec'}>Apply Now</Button>
      </Flex>
      
    
        </Box>

    </Flex>
  )
}

export default FastProcess