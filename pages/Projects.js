import {
  Heading,
  Box,
  Image,
  HStack,
  Link,
  Tooltip,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const bg = useColorModeValue('whiteAlpha.300', 'gray.700');
  return (
    /// Box instead of DIV, Same thing
    <VStack
      w={{ base: '100%', md: '100%', lg: '100%' }}
      h={{ base: '85%', md: '100%', lg: '100%' }}
      maxW={{ base: '100%', md: '100%', lg: '100%' }}
      maxH={{ base: '100%', md: '100%', lg: '100%' }}
      bg={bg}
      borderColor={'whiteAlpha.100'}
      borderWidth="2px"
      borderRadius="2xl"
      mb={2}
      p={1}
    >
      <Heading
        m={2}
        color="black.900"
        fontSize="4xl"
        fontWeight="extrabold"
        letterSpacing="wide"
      >
        {' '}
        Projects
      </Heading>

      <Box
        w={{ base: '45%', md: '45%', lg: '40%' }}
        h={{ base: '45%', md: '45%', lg: '30%' }}
        bgGradient="linear(to-r, whiteAlpha.300, blue.600 )"
        borderColor={'blackAlpha.500'}
        borderWidth="2px"
        borderRadius="2xl"
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
          <Link href="https://github.com/nme22/dateNight">DateNight</Link>
        </motion.button>
        <HStack p={4} justifyContent="space-around">
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
        w={{ base: '45%', md: '45%', lg: '40%' }}
        h={{ base: '45%', md: '45%', lg: '30%' }}
        bgGradient="linear(to-r, whiteAlpha.300, blue.600 )"
        borderColor={'blackAlpha.500'}
        borderWidth="2px"
        borderRadius="2xl"
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
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
      <Box
        w={{ base: '45%', md: '45%', lg: '40%' }}
        h={{ base: '45%', md: '45%', lg: '30%' }}
        borderColor={'blackAlpha.500'}
        borderWidth="2px"
        borderRadius="2xl"
        d="flex"
        flexDir="column"
        p={1}
        m={2}
        bgGradient="linear(to-r, whiteAlpha.300, blue.600 )"
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.0 }}
          fontWeight="semibold"
        >
          <Link href="https://todolist-nme.vercel.app/">Todo List App</Link>
        </motion.button>

        <HStack p={4} justifyContent="space-around">
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
            <Link href="https://nextjs.org/">
              <Tooltip label="Next JS" hasArrow arrowSize={15}>
                <Image
                  src="/next-js.svg"
                  alt="NextJs"
                  height={{ base: '40px', md: '36px', lg: '32px' }}
                  width={{ base: '40px', md: '36px', lg: '32px' }}
                  borderRadius="md"
                />
              </Tooltip>
            </Link>
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
        w={{ base: '45%', md: '45%', lg: '40%' }}
        h={{ base: '45%', md: '45%', lg: '30%' }}
        bgGradient="linear(to-r, whiteAlpha.300, blue.600 )"
        borderColor={'blackAlpha.500'}
        borderWidth="2px"
        borderRadius="2xl"
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
          <Link href="https://githubsearch-eta.vercel.app/">Github Search</Link>
        </motion.button>
        <HStack p={4} justifyContent="space-around">
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
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
    </VStack>
  );
};

export default Projects;
