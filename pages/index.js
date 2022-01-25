import {
  Container,
  Heading,
  Image,
  Text,
  VStack,
  Box,
  Avatar,
  WrapItem,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { motion } from 'framer-motion';

export default function Home() {
  const bg = useColorModeValue('whiteAlpha.300', 'gray.600');
  const color = useColorModeValue('gray.600', 'orange.200');
  const headingColor = useColorModeValue('blue.400', 'gray.600');
  return (
    <Box
      w={{ base: '80%', md: '90%', lg: '100%' }}
      h={{ base: '80%', md: '90%', lg: '100%' }}
      borderRadius="50px"
      mb={3}
      d="flex"
      spacing={2}
    >
      <VStack
        w={{ base: '80%', md: '90%', lg: '100%' }}
        h={{ base: '80%', md: '90%%', lg: '100%' }}
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
            textShadow="3px 3px white"
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
            color={headingColor}
            textShadow="3px 3px white"
          >
            Full-Stack Junior Developer{' '}
          </Heading>
        </motion.h2>

        <WrapItem>
          <Image
            src="/youngshwap.png"
            alt="picture of a male with a beard"
            p={5}
            m={1}
            h="250px"
            w="350px"
          />
        </WrapItem>

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
            First generation Iranian web developer! Throughout my lifetime I
            never thought I'd catch fire coding! From learning HTML5, CSS, and
            basic JavaScript to utilizing frameworks and librarys from other
            developers to build stunning apps from start to finish! Feel free to
            checkout any projects im currently towards on Github and reach out
            on the socials or contact me via email if you want to collaborate on
            anything!
          </Text>
        </Container>
      </VStack>
    </Box>
  );
}
