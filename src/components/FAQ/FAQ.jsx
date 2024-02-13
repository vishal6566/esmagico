import { Accordion, Flex, Image, Heading,Text,Box,Button } from "@chakra-ui/react";
import React from "react";
import { CONSTANT } from "../../../CONSTANTS";
import Qcircle from "../../assets/images/Qcircle.svg";
import { AccordionItemCard } from "./AccordionItemCard";


const FAQ = () => {
  const data = CONSTANT.faqs;
  return (
    
      
        <Flex direction="column" w={'100%'} mt={'30px'}>
          <Flex gap={'10'} pl={'80px'} mb={'20px'} >
            <Image src={Qcircle} />
          <Heading  fontSize={'44px'} fontWeight={'600'} lineHeight={'60px'} >
            FAQ'S
          </Heading>
          </Flex>
          <Accordion defaultIndex={[0]} allowMultiple px={["26px", "48px", "28px", "48px", "48px"]}>
            {data.map((faq) => {
              return <AccordionItemCard faq={faq}  />;
            })}
          </Accordion>
          <Flex w={'90%'} display={{base:'block',lg:'flex'}} bgColor={'#f9f2fe'} borderRadius={'5px'} margin={'auto'} py={'15px'} pl={'15px'} alignItems={'center'} gap={'40'}>
            <Box>
              <Text fontWeight={'700'} fontSize={'24px'} lineHeight={'29px'}>Anything not clear?</Text>
              <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'28px'}>You can see our detailed F&Q sessions if you have more quiries. Also we are always a single call away for all your special asks...</Text>
            </Box>
            <Button borderRadius={'5px'}border={'none'} color={'white'}  mt={'40px'} w={'218px'} h={'56px'} fontSize={'18px'} fontWeight={'700'} lineHeight={'20px'} bgColor={'#8800ec'}>Apply Now</Button>
          </Flex>
        </Flex>
     
      
    
  );
};

export default FAQ;
