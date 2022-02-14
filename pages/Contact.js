import {
   Box,
   VStack,
   Heading,
   Text,
   Button,
   Link,
   Tooltip,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { motion } from 'framer-motion';

const Contact = () => {
   const bg = useColorModeValue('whiteAlpha.400', 'gray.700');
   const color = useColorModeValue('gray.600', 'blue.300');
   const buttonColor = useColorModeValue('whiteAlpha.700', 'gray.700');

   return (
      <Box
         bg={bg}
         w={{ base: '80%', md: '90%', lg: '100%' }}
         h={{ base: '80%', md: '90%', lg: '100%' }}
         d="flex"
      >
         <VStack justifyContent="space-between">
            <Heading color={color} p={2} fontSize="48px">
               Thank you for visiting the page!{' '}
            </Heading>
            <motion.h2
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 2 }}
            >
               <br />
               <Text
                  color={color}
                  fontSize="24px"
                  fontStyle="oblique"
                  p={2}
                  m={2}
               >
                  I Appreciate you taking the time to check out my personal
                  site! If you have any questions, comments, concerns, or you
                  just want to connect with me ,then click the button below to
                  send me an email! If you dont feel like doing that then feel
                  free to reach out via one of the social links in below!
               </Text>
            </motion.h2>
            <Link href="mailto:navidmebrahimi22@gmail.com">
               <Tooltip label="Email Navid!" hasArrow arrowSize={15}>
                  <Button
                     bg={color}
                     color={buttonColor}
                     _hover={{
                        bgColor: 'rebeccapurple',
                     }}
                  >
                     Reach Out!
                  </Button>
               </Tooltip>
            </Link>
         </VStack>
      </Box>
   );
};

export default Contact;
