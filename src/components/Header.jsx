import { Box, HStack, Heading, Image} from '@chakra-ui/react';
import React from 'react';
import btcSrc from '../sun.jpg'
const Header = () => {
  return (
    // Hstack & Vstack has alignitem: center bydefault 
    <Box> 
      <Image
          position={'absolute'}
          w={"100vw"}
          h={"100vh"}
          src={btcSrc} />
    <HStack h={'20vh'} font-family={['Bree Serif', 'serif']}> 
      <Heading color={'white'} zIndex={'10'} w='full' textAlign={'center'} > Weather App</Heading>
    </HStack>
    </Box>
  ); 
};

export default Header;
