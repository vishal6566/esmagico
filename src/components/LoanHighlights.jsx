import React from 'react'
import {Box,Text,Image,Flex, Card, CardBody,Stack} from "@chakra-ui/react"
import Star from "../assets/images/Star.svg"
import man from "../assets/images/man.svg"
import star1 from "../assets/images/star1.svg"
const LoanHighlights = () => {
  return (
    <Box pl={{base:"10px",xl:'80px'}} pr={{base:'10px',xl:'0px'}} mt={'30px'} width={'100%'}>

    <Flex gap={'11px'} >
<Image src={Star} alt='star' />
<Text fontSize={{base:'30px',md:'44px'}} fontWeight={'600'} lineHeight={{base:'40px',md:'60px'}}>Personal Loan Highlights</Text>
    </Flex>
    
    <Flex mt={'30px'} gap={'20px'} >
<Box w={'45%'} display={{base:'none',xl:"block"}} backgroundImage={man} backgroundSize={'cover'} backgroundPosition={'center'}>
  
</Box>
<Flex  w={{base:"100%",md:"'50%'"}} justifyContent={'center'} height={'fit-content'} borderRadius={'5px'} bgColor={'#fcf8ff'} py={'40px'}  >
<Card w={{base:"100%",md:'86%'}} height={'fit-content'} bgColor={'#fcf8ff'} >
 

  <CardBody>
    <Stack spacing='25'>
      <Box>
        <Flex gap={'5px'}>
            <Image src={star1} alt='star1' />
        <Text fontWeight={'600'} fontSize={'24px'} lineHeight={'34px'} mb={'10px'} >
         Interest Rates
        </Text>
        </Flex>
       
        <Text pl={'30px'}  fontWeight={'500'} fontSize={'20px'} >
        Usually <span fontWeight={'600'} style={{color:'#c37ff6'}}>10.49% p.a.</span> onwards: some PSUs may offer lower rates
        </Text>
      </Box>
      <Box>
        <Flex gap={'5px'}>
            <Image src={star1} alt='star1' />
        <Text fontWeight={'600'} fontSize={'24px'} lineHeight={'34px'} mb={'10px'} >
         Loan Amount
        </Text>
        </Flex>
       
        <Text pl={'30px'}  fontWeight={'500'} fontSize={'20px'} >
        Can go up to <span fontWeight={'600'} style={{color:'#c37ff6'}}>RS 40 lakh:</span>some lenders may offer higher loan amount
        </Text>
      </Box>
      <Box>
        <Flex gap={'5px'}>
            <Image src={star1} alt='star1' />
        <Text fontWeight={'600'} fontSize={'24px'} lineHeight={'34px'} mb={'10px'} >
        Processing Fees
        </Text>
        </Flex>
       
        <Text pl={'30px'}  fontWeight={'500'} fontSize={'20px'} >
        <span fontWeight={'600'} style={{color:'#c37ff6'}}>
0.5% to 4% </span>of loan amount (may vary across lenders)
        </Text>
      </Box>
      <Box>
        <Flex gap={'5px'}>
            <Image src={star1} alt='star1' />
        <Text fontWeight={'600'} fontSize={'24px'} lineHeight={'34px'} mb={'10px'}>
       Tenure
        </Text>
        </Flex>
       
        <Text pl={'30px'}  fontWeight={'500'} fontSize={'20px'} > Up to
        <span fontWeight={'600'} style={{color:'#c37ff6'}}> 5 years </span>(some lenders offer repayment period till 8 year)
        </Text>
      </Box>
   
    </Stack>
  </CardBody>
</Card>
</Flex>
    </Flex>
    </Box>
  )
}

export default LoanHighlights