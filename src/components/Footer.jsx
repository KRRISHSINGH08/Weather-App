import React from 'react';
import { Avatar, Box, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const AvatarSrc = 'https://avatars.githubusercontent.com/u/86179288?v=4';
const Footer = () => {
  return (
    // imp to wrap inside this box so to apply the same property to all the elements
    <Box 
    bgColor={'blackAlpha.900'}
    color={'whiteAlpha.700'}
    minH={40}
    px={['0', '16']}
    py={["16", "8"]}
    >
  <Stack 
      direction={['column', 'row']}
      h="full"
      alignItems={'center'}
    > 
    {/* w='full' imp! otherwise the 2nd vstack will stick to it */}
      <VStack w='full'  alignItems={['center', 'flex-start']} textAlign={'center'}>
        <Text fontSize={"sm"}
            letterSpacing={"widest"}
            > Made By KRRISH</Text>
        <Link href="https://github.com/KRRISHSINGH08" isExternal>
          GitHub Profile <ExternalLinkIcon mx="2px" />
        </Link>
      </VStack>

      <VStack >
        <Avatar boxSize={"16"} mt={["4", "0"]} src={AvatarSrc}> </Avatar>
        <Text>KRRISHSINGH08</Text>
      </VStack>
    </Stack>
    </Box>
  
  );
};

export default Footer;
