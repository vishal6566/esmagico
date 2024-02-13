import React from 'react'
import {Box,Flex,Image,Text,Input, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,} from "@chakra-ui/react"
import emic from "../assets/images/emic.svg"
import frame from "../assets/images/Frame.svg"
const Emi = () => {
  return (
   <Box pl={'80px'}>
<Flex  mt={'30px'} gap={6}  >
   
  
    <Image src={emic}   />
   
   
    <Text fontSize={'44px'} fontWeight={'600'} lineHeight={'60px'}>Emi <span fontWeight={'400'}>Calculator</span></Text>
</Flex>
<Flex w={'90%'} justifyContent={'space-between'} display={{base:'block',md:'flex'}} mt={'20px'}  >
    <Box w={{base:'100%',md:'32%'}} borderRadius={'10px'}  p={'20px 15px'} boxShadow={'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}>
      <Box>
      <Text color={'#ededed'} fontSize={'20px'} fontWeight={'500'}>Loan Amount</Text>
        <Flex alignItems={'center'}  h={'40px'} border={'1px solid gray'} gap={'8px'} p={'8px 12px'}  borderRadius={'5px'}>
  <Text>₹</Text>
    <Input placeholder='Enter Amount' h={'40px'} border={'none'} outline={'none'} />
</Flex>
<Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
      </Box>
     
      <Box>
      <Text color={'#ededed'} fontSize={'20px'} fontWeight={'500'}>Interest Rate (%)</Text>
        <Flex alignItems={'center'}  h={'40px'} border={'1px solid gray'} gap={'8px'} p={'8px 12px'}  borderRadius={'5px'}>
  <Text>%</Text>
    <Input placeholder='Enter Interest' h={'40px'} border={'none'} outline={'none'} />
</Flex>
<Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
      </Box>
      <Box>
      <Text color={'#ededed'} fontSize={'20px'} fontWeight={'500'}>Loan Tenure (in Months)</Text>
        <Flex alignItems={'center'}  h={'40px'} border={'1px solid gray'} gap={'8px'} p={'8px 12px'}  borderRadius={'5px'}>
  <Text>Months</Text>
    <Input placeholder='Enter Month' h={'40px'} border={'none'} outline={'none'} />
</Flex>
<Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
      </Box>
    </Box>
   
   
   
    <Box w={{base:'100%',md:'64%'}}  boxShadow={'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}>

        <Image src={frame} />
    </Box>
</Flex>
   </Box>
  )
}

export default Emi