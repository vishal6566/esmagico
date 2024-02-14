import React from 'react'
import {Box,Text,Image,Flex,Button} from "@chakra-ui/react"
import process from "../assets/images/process.svg"
import Vector from "../assets/images/Vector.svg"
import stepper from "../assets/images/stepper.svg"


const FastProcess = () => {
  return (
    <Flex w={'100%'} flexDir={{base:'column',md:'row'}} px={{base:'10px',md:'0px'}} alignItems={'center'} mt={'30px'}  >
        <Box w={{base:"100%",md:'45%'}} ml={'20px'}>
        <Image src={process} alt='lighting fast process' />
        </Box>
        <Box  w={{base:"100%",md:'50%'}} >
      <Flex gap={5} justifyContent={'center'} mb={'30px'} >
        <Image src={Vector} alt='vector' />
        <Text fontSize={{base:"30px",lg:'35px',xl:'44px'}} fontWeight={'600'} lineHeight={'60px'}>Lightning Fast Process</Text>
      </Flex>
      <Flex flexDirection={'column'} gap={10}>
        <Image src={stepper} alt='stepper' />
        <Text textAlign={'center'} fontWeight={'500'} fontSize={'23px'} lineHeight={'28px'}>Customer share basic details</Text>
        <Button margin={'auto'} borderRadius={'5px'}border={'none'} color={'white'}  w={'168px'} h={'56px'} fontSize={'18px'} fontWeight={'700'} lineHeight={'20px'} bgColor={'#8800ec'}>Apply Now</Button>
      </Flex>
      
    
        </Box>

    </Flex>
  )
}

export default FastProcess