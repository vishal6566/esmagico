import React, { useState, useEffect } from "react";
import logo from "../assets/images/TataNeuIcon.svg"
import {
  Box,
  Drawer,
  DrawerBody,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Image,
  Flex
} from "@chakra-ui/react";
import { HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";


const SmallScreenNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  
  

  return (
    <Flex
      bg={'white'}
      width="100%"
      display={{ base: "flex", md: "none" }}
      justifyContent="space-between"
      mt="2%"
      transition="background-color 0.3s ease"
      
      top={0}
      zIndex={100}
      
      alignItems="center"
      padding="0px 10px"
    >
      <Box>
        <Button
          onClick={onOpen}
          bg="transparent"
          
        >
          <HamburgerIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          initialFocusRef={firstField}
          onClose={onClose}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <Text py="2">Offers</Text>
              <Text>Stories</Text>
              <Text py="2">Tata Pay</Text>
              <Text>Neu Pass</Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box>
        <Image src={logo} alt="company logo" />
      </Box>
      <Box>
        <Button 
        
       
        >
          <PhoneIcon color={'black'} />
        </Button>
      </Box>
    </Flex>
  );
};

export default SmallScreenNavbar;
