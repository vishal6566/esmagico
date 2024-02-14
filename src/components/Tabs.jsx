import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel ,Box,Image,Text,Flex} from '@chakra-ui/react'
import eli from "../assets/images/eli.svg"
import point from "../assets/images/point.svg"
import fee from "../assets/images/fee.svg"
import document from "../assets/images/document.svg"
import star1 from "../assets/images/star1.svg"
import loan from "../assets/images/loan.svg"
const TabsDisplay = () => {
  return (
    <Box  pl={{base:'10px',lg:'80px'}} mt={'30px'}  pr={{base:'10px',lg:'0px'}}  >
          <Tabs variant='enclosed'>
    <TabList bgColor={'none'}>
      <Tab >
        <Image src={eli} />
        <Text fontWeight={'600'} ml={'5px'} fontSize={'26px'} lineHeight={'35px'}>Eligibility</Text>
      </Tab>
      <Tab >
        <Image src={point} />
        <Text fontWeight={'600'} ml={'5px'} fontSize={'26px'} lineHeight={'35px'}>How To Apply</Text>
      </Tab>
      <Tab display={{base:'none',lg:'flex'}} >
        <Image src={document} />
        <Text fontWeight={'600'} ml={'5px'} fontSize={'26px'} lineHeight={'35px'}>Documentation</Text>
      </Tab>
      <Tab display={{base:'none',lg:'flex'}}>
        <Image src={fee} />
        <Text fontWeight={'600'} ml={'5px'} fontSize={'26px'} lineHeight={'35px'}>Fees & Charges</Text>
      </Tab>
     
    </TabList>
    <TabPanels>
      <TabPanel  border={'1px solid #E6EBF2'}w={{base:'100%',lg:'80%'}}>
        <Flex justifyContent={'space-around'}  pt={'30px'}>

      <Flex flexDir={'column'} gap={8} pb={'30px'}>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Citizenship Proof</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>Indian citizen with valid ID proof</Text>
        </Box>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Age</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>23 to 58 years of age</Text>
        </Box>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Lorem</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>Lorem ipsum</Text>
        </Box>
        <Box >
            <Flex gap={2} > 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>ipsum</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>ipsum Lorem</Text>
        </Box>
        </Flex> 

        <Box>
            <Image src={loan} />
            </Box>     
        </Flex>
      </TabPanel>
      <TabPanel  border={'1px solid #E6EBF2'}w={{base:'100%',lg:'80%'}}>
        <Flex justifyContent={'space-around'}  pt={'30px'}>

      <Flex flexDir={'column'} gap={8} pb={'30px'}>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Citizenship Proof</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>Indian citizen with valid ID proof</Text>
        </Box>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Age</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>23 to 58 years of age</Text>
        </Box>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Lorem</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>Lorem ipsum</Text>
        </Box>
        <Box >
            <Flex gap={2} > 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>ipsum</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>ipsum Lorem</Text>
        </Box>
        </Flex> 

        <Box>
            <Image src={loan} />
            </Box>     
        </Flex>
      </TabPanel>
      <TabPanel display={{base:'none',lg:'block'}} border={'1px solid #E6EBF2'}w={{base:'100%',lg:'80%'}} >
        <Flex justifyContent={'space-around'}  pt={'30px'}>

      <Flex flexDir={'column'} gap={8} pb={'30px'}>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Citizenship Proof</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>Indian citizen with valid ID proof</Text>
        </Box>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Age</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>23 to 58 years of age</Text>
        </Box>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Lorem</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>Lorem ipsum</Text>
        </Box>
        <Box >
            <Flex gap={2} > 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>ipsum</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>ipsum Lorem</Text>
        </Box>
        </Flex> 

        <Box>
            <Image src={loan} />
            </Box>     
        </Flex>
      </TabPanel>
      <TabPanel display={{base:'none',lg:'block'}} border={'1px solid #E6EBF2'}w={{base:'100%',lg:'80%'}}>
        <Flex justifyContent={'space-around'}  pt={'30px'}>

      <Flex flexDir={'column'} gap={8} pb={'30px'}>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Citizenship Proof</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>Indian citizen with valid ID proof</Text>
        </Box>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Age</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>23 to 58 years of age</Text>
        </Box>
        <Box >
            <Flex gap={2}> 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>Lorem</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>Lorem ipsum</Text>
        </Box>
        <Box >
            <Flex gap={2} > 
            <Image src={star1} />
        <Text fontWeight={'600'} fontSize={'22px'} lineHeight={'30px'}>ipsum</Text>
            </Flex>
            <Text fontWeight={'400'} ml={'30px'}  fontSize={'20px'} lineHeight={'27px'}>ipsum Lorem</Text>
        </Box>
        </Flex> 

        <Box>
            <Image src={loan} />
            </Box>     
        </Flex>
      </TabPanel>
    </TabPanels>
  </Tabs>
    </Box>
  
  )
}

export default TabsDisplay