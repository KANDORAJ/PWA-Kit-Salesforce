import React from 'react';
import { AspectRatio, Container, Center, Heading } from '@chakra-ui/react';

/**
 * Youtube component displays a video from YouTube.
 */

function Youtube() {
  return (
    <Container>
      <Center bg='blue.500' h='50px' color='white'>
        <Heading as="h1" size="xl">
          Youtube Page!
        </Heading>
      </Center>
      
      <AspectRatio mx="auto" my="10" maxW='1280px' ratio={16 / 9}>
        <iframe
          title="Amazing Places to Visit in Turkey | Best Places to Visit in Turkey - Travel Video"
          src="https://www.youtube.com/embed/2vqvBzb0xJY" 
          allowFullScreen
        />
      </AspectRatio>
    </Container>
  );
}

export default Youtube;
