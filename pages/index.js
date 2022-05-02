import {
   Container,
   Heading,
   Text,
   VStack,
   Box,
   Image,
   Flex,
   Spacer,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { motion } from 'framer-motion';

export default function Home() {
   const bg = useColorModeValue('whiteAlpha.900', 'gray.600');
   const color = useColorModeValue('gray.600', 'blue.200');
   const headingColor = useColorModeValue('whiteAlpha.900', 'blue.200');
   return (
      // Come back and refactor code so that certain elements dont just change color but the whole app does
      <Flex
         w={{ base: '80%', md: '100%', lg: '100%' }}
         h={{ base: '80%', md: '100%', lg: '100%' }}
         flexDirection="column"
         pt={8}
         pl={6}
         spacing={12}
      >
         <VStack
            w={{ base: '80%', md: '90%', lg: '100%' }}
            h={{ base: '80%', md: '90%', lg: '100%' }}
         >
            <motion.h2
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 3 }}
            >
               <Heading
                  fontSize={{ base: '18px', md: '36px', lg: '36px' }}
                  fontStyle="oblique"
                  color={headingColor}
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
                  fontSize={{ base: '18px', md: '36px', lg: '36px' }}
                  fontStyle="oblique"
                  color={headingColor}
               >
                  Full-Stack Developer
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
               p={4}
               w="fit-content"
               h={{ base: '100%', md: '90%', lg: '100%' }}
               justifyContent="center"
            >
               <Text
                  fontSize={{ base: '12px', md: '16px', lg: '16px' }}
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
      </Flex>
   );
}
