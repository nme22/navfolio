import {
  Heading,
  Box,
  Center,
  Image,
  HStack,
  Link,
  Tooltip,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { motion } from 'framer-motion';

const Projects = () => {
  const bg = useColorModeValue('whiteAlpha.300', 'gray.600');
  return (
    /// Box instead of DIV, Same thing
    <Box
      w={{ base: '80%', md: '90%', lg: '100%' }}
      h={{ base: '80%', md: '90%', lg: '100%' }}
      bg={bg}
    >
      <Center>
        <Heading
          m={2}
          bgGradient="linear(to-r, orange.400, teal.400 )"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
        >
          {' '}
          Projects
        </Heading>
      </Center>
      <Center>
        <Box
          w={{ base: '45%', md: '35%', lg: '30%' }}
          h={{ base: '45%', md: '35%', lg: '30%' }}
          bgGradient="linear(to-r, orange.400, teal.400 )"
          borderRadius="5%"
          d="flex"
          flexDir="column"
          p={1}
          m={2}
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.0 }}
            fontWeight="semibold"
          >
            DateNight
          </motion.button>
          <HStack p={4} justifyContent="space-around">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Tooltip label="DateNight" hasArrow arrowSize={15}>
                <Image
                  src="/datingIMG.png"
                  alt="Heart"
                  height={{ base: '40px', md: '36px', lg: '32px' }}
                  width={{ base: '40px', md: '36px', lg: '32px' }}
                  borderRadius="50%"
                />
              </Tooltip>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Link href="https://nextjs.org/">
                <Tooltip label="Next JS" hasArrow arrowSize={15}>
                  <Image
                    src="/next-js.svg"
                    alt="NextJs"
                    height={{ base: '40px', md: '36px', lg: '32px' }}
                    width={{ base: '40px', md: '36px', lg: '32px' }}
                    borderRadius="50%"
                  />
                </Tooltip>
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Link href="https://vercel.com/">
                <Tooltip label="Vercel" hasArrow arrowSize={15}>
                  <Image
                    src="/vercellogo.png"
                    alt="Vercel"
                    height={{ base: '40px', md: '36px', lg: '32px' }}
                    width={{ base: '40px', md: '36px', lg: '32px' }}
                    borderRadius="50%"
                  />
                </Tooltip>
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Link href="https://chakra-ui.com/">
                <Tooltip label="Chakra-UI" hasArrow arrowSize={15}>
                  <Image
                    src="/chakraui.png"
                    alt="Chakra-UI"
                    height={{ base: '40px', md: '36px', lg: '32px' }}
                    width={{ base: '40px', md: '36px', lg: '32px' }}
                    borderRadius="50%"
                  />
                </Tooltip>
              </Link>
            </motion.button>
          </HStack>
        </Box>
        <Box
          w={{ base: '45%', md: '35%', lg: '30%' }}
          h={{ base: '45%', md: '35%', lg: '30%' }}
          bgGradient="linear(to-r, orange.400, teal.400 )"
          borderRadius="5%"
          d="flex"
          flexDir="column"
          p={1}
          m={2}
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.0 }}
            fontWeight="semibold"
          >
            <Link href="https://github.com/nme22/README-Generator">
              ReadMe Generator
            </Link>
          </motion.button>

          <HStack p={4} justifyContent="space-around">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Link href="https://www.javascript.com/">
                <Tooltip label="JavaScript v6" hasArrow arrowSize={15}>
                  <Image
                    src="/javascript-logo.svg"
                    alt="JavaScript"
                    height={{ base: '40px', md: '36px', lg: '32px' }}
                    width={{ base: '40px', md: '36px', lg: '32px' }}
                    borderRadius="50%"
                  />
                </Tooltip>
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Link href="https://nodejs.org">
                <Tooltip label="Node JS" hasArrow arrowSize={15}>
                  <Image
                    src="/nodejs-icon.svg"
                    alt="Node.Js"
                    height={{ base: '40px', md: '36px', lg: '32px' }}
                    width={{ base: '40px', md: '36px', lg: '32px' }}
                    borderRadius="50%"
                  />
                </Tooltip>
              </Link>
            </motion.button>
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Projects;
