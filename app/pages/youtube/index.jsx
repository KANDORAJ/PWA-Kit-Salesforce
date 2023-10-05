import React from 'react';
// Components
import { AspectRatio, Container, Center } from '@chakra-ui/react';

function Youtube() {
  return (
    <Container>
        <Center bg='blue' h='50px' color='white'><h1>Youtube Page!</h1></Center>
        
        <AspectRatio my="10" maxW='1280px' ratio={16 / 9}>
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
