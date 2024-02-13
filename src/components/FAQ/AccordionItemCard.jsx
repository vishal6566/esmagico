import plusIcon from "../../assets/images/plus.svg";
import minusIcon from "../../assets/images/minus.svg";
import { AccordionButton, AccordionItem, AccordionPanel, Box, Image } from "@chakra-ui/react";

export const AccordionItemCard = ({ faq }) => {
  return (
    <AccordionItem borderTop={"none"} >
      {({ isExpanded }) => {
        return (
          <>
            <h2>
              <AccordionButton px={0} bgColor={'white'}  border={'none'} pl={'40px'} my={'25px'}>
                <Box as="span" flex="1" textAlign="left" fontWeight={'600'} fontSize={'18px'} lineHeight={'21px'}>
                  {faq.quest}
                </Box>
                {isExpanded ? (
                  <Image src={minusIcon} alt="Plus Icon to Expand Accordion, view answer" />
                ) : (
                  <Image src={plusIcon} alt="Plus Icon to Expand Accordion, view answer" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel  pb={4} pl={'40px'} >
              {faq.ans}
            </AccordionPanel>
          </>
        );
      }}
    </AccordionItem>
  );
};
