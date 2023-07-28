import { HStack, Heading} from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    // Hstack & Vstack has alignitem: center bydefault 
    <HStack bgColor={'blackAlpha.900'} p={'4'} pt={10} pb={10} > 
      <Heading color={'white'} w='full' textAlign={'center'}> Weather App</Heading>
    </HStack>
  ); 
};

export default Header;
