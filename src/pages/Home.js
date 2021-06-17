import React from 'react';
import { Heading, Text, Stack, Center, Img } from '@chakra-ui/react';
import "@fontsource/montserrat"
 
const Home = () => {
  return (
    <div>
      <Heading
      textAlign="center" 
      mt={3}
      fontFamily="montserrat"
      fontWeight="black"
      fontSize="80px"
      paddingTop="80px"
      color="black"
      _selection={{ color: "white", bg: "green.400"}}
      >
      Welcome to Movie Tracker
      </Heading>

      <Center paddingTop="100px">
        <Img src="undraw_movie_night_fldd.svg" width="600px"/>
      </Center>

      

    </div>
  )
}

export default Home
