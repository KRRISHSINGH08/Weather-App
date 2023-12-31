import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const api = {
  key: 'df4c08fc9d89e6dc222d28922d03936e',
  base: 'https://api.openweathermap.org/data/2.5/weather',
};

const Main = () => {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    const searchPressed = () => { 
        
       fetch(`${api.base}?q=${search}&units=metric&appid=${api.key}`)
       .then((res) => res.json()).then((result) => {
        setWeather(result);
        console.log(result);
       });
    }

  return (
    <Box h={'80vh'}  py={16}>
      <Container centerContent w="full" position={'relative'} >
        <HStack>
          <Input
            type="text"
            bgColor={'white'}
            placeholder="Enter city name"
            _placeholder={{ color: 'black' }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton 
            aria-label="Search database"
            colorScheme="blackAlpha"
            icon={<Search2Icon />}
            onClick={searchPressed}
          />
        </HStack>

        <VStack h='200px' m={'16'} zIndex={10} justifyContent={'space-evenly'} color={'white'} fontWeight={'bold'} fontSize={['md','xl']} fontFamily={['Archivo Narrow', 'sans-serif']} textAlign={'center'}>
            {typeof weather.main !== 'undefined' ? (
                <>
                <img alt='weather' src={`icons/${weather.weather[0].icon}.png`} />
                <Text > {weather.name}</Text>
                <Text> {weather.main.temp}°C</Text>
                <Text> {weather.weather[0].main}</Text>
                <Text> ({weather.weather[0].description})</Text>
                </>
            ) : ('')}
        </VStack>
      </Container>
    </Box>
  );
};
export default Main;
