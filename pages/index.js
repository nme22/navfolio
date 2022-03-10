import { Container, Heading, Text, VStack, Box, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { motion } from 'framer-motion';

export default function Home() {
   const bg = useColorModeValue('whiteAlpha.900', 'gray.600');
   const color = useColorModeValue('gray.600', 'blue.200');
   const headingColor = useColorModeValue('blue.400', 'gray.600');
   return (
      // Fix background of Avatar icon so that it displays a beach or some kind of relaxing setting
      // Come back and refactor code so that certain elements dont just change color but the whole app does
      <Box
         w={{ base: '80%', md: '90%', lg: '100%' }}
         h={{ base: '80%', md: '90%', lg: '100%' }}
         borderRadius="50px"
         pt={7}
         mb={3}
         d="flex"
         spacing={2}
      >
         <VStack
            w={{ base: '80%', md: '90%', lg: '100%' }}
            h={{ base: '80%', md: '90%%', lg: '100%' }}
            pb={8}
         >
            <motion.h2
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 3 }}
            >
               <Heading
                  fontSize={{ base: '24px', md: '36px', lg: '48px' }}
                  fontStyle="oblique"
                  color={headingColor}
                  bgGradient={{
                     lg: 'linear(to-r, whiteAlpha.900,  whiteAlpha.900)',
                     md: 'linear(to-r, red.500,  blue.500)',
                     base: 'linear(to-r, red.500,  blue.500)',
                  }}
                  bgClip="text"
               >
                  Navid M Ebrahimi
               </Heading>
            </motion.h2>
            <motion.h2
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 4 }}
            >
               <Heading
                  fontSize={{ base: '24px', md: '36px', lg: '48px' }}
                  fontStyle="oblique"
                  bgGradient={{
                     lg: 'linear(to-r, whiteAlpha.900,  whiteAlpha.900)',
                     md: 'linear(to-r, red.500,  blue.500)',
                     base: 'linear(to-r, red.500,  blue.500)',
                  }}
                  bgClip="text"
               >
                  Full-Stack Junior Developer{' '}
               </Heading>
            </motion.h2>
            <Box
               bgImage="./beach-quotes.jpeg"
               backgroundSize="cover"
               borderRadius="2xl"
            >
               <Image
                  src="/youngshwap.png"
                  alt="picture of a male with a beard"
                  name="Navid M Ebrahimi"
                  borderRadius="3xl"
                  //Changes Color Based on screen size
                  // bgGradient={{
                  //    lg: 'linear(to-t,  yellow.100,whiteAlpha.900, blue.400, )',
                  //    md: 'linear(to-t, red.500, whiteAlpha.900, blue.500)',
                  //    base: 'linear(to-t, red.500, whiteAlpha.900, blue.500)',
                  // }}
                  size={{ base: '2x1', md: '2x1', lg: 'xl' }}
               />
            </Box>

            <Container
               maxW="container.lg"
               bg={bg}
               borderRadius="3xl"
               borderColor={'whiteAlpha.200'}
               borderWidth="2px"
               mb={3}
               w={{ base: '80%', md: '90%', lg: '100%' }}
               h={{ base: '80%', md: '90%', lg: '100%' }}
               justifyContent="center"
            >
               <Text
                  fontSize={{ base: '16px', md: '22px', lg: '26px' }}
                  fontStyle="oblique"
                  fontWeight="semibold"
                  color={color}
               >
                  First generation Iranian web developer! Throughout my lifetime
                  I never thought I'd catch fire coding! From learning HTML5,
                  CSS, and basic JavaScript to utilizing frameworks and librarys
                  from other developers to build stunning apps from start to
                  finish! Feel free to checkout any projects im currently
                  towards on Github and reach out on the socials or contact me
                  via email if you want to collaborate on anything!
               </Text>
            </Container>
         </VStack>
      </Box>
   );
}
