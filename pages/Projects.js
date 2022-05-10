import {
   Heading,
   Image,
   HStack,
   LinkOverlay,
   LinkBox,
   Text,
   Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Projects = () => {
   return (
      // Box instead of DIV, same thing according to chakra docs
      // Display projects into a flexbox with a flex direction of column so that the projects line up neatly
      // Come back and refactor the project divs into a resuseable component
      <>
         <Head>
            <title>Navs Portfolio Project Page</title>
            <meta
               name="description"
               content="initial=scale=1.0, width=device-width"
            />
         </Head>
         <Heading
            m={200}
            bgGradient="linear(to-r, whiteAlpha.900, blue.600 )"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            letterSpacing="wide"
            fontFamily="body"
         >
            {' '}
            Projects
         </Heading>

         <Flex
            w={{ base: '100%', md: '100%', lg: '100%' }}
            h={{ base: '85%', md: '100%', lg: '100%' }}
            maxW={{ base: '100%', md: '100%', lg: '100%' }}
            maxH={{ base: '100%', md: '100%', lg: '85%' }}
            justifyContent="space-around"
            flexDir="row"
            rowGap="25px"
            flexWrap="wrap"
            p={1}
         >
            <motion.div
               whileHover={{
                  scale: 1.05,
               }}
            >
               <LinkBox
                  as="div"
                  maxW="xs"
                  p="5"
                  borderWidth="1px"
                  borderColor="black"
                  bgGradient="linear(to-r, whiteAlpha.600, blue.600 )"
                  rounded="md"
                  opacity={0.7}
                  _hover={{ opacity: 1 }}
               >
                  <Heading size="md" my="8">
                     <LinkOverlay
                        href="https://github.com/nme22/dateNight"
                        target="_blank"
                     >
                        DateNight
                     </LinkOverlay>
                  </Heading>
                  <HStack p="2px" justifyContent="space-evenly">
                     <Image
                        src="/datingIMG.png"
                        alt="Heart"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                     <Image
                        src="/chakraui.png"
                        alt="Chakra-UI"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                     <Image
                        src="/next-js.svg"
                        alt="NextJs"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                     <Image
                        src="/vercellogo.png"
                        alt="Vercel"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                  </HStack>
                  <Text p={2}>
                     A dating app designed to keep your romantic life from
                     getting stale! Record the dates you go on, leave notes, and
                     remember the good times!
                  </Text>
               </LinkBox>
            </motion.div>
            <motion.div
               whileHover={{
                  opacity: 1,
                  scale: 1.05,
               }}
            >
               <LinkBox
                  as="div"
                  maxW="xs"
                  p="5"
                  borderWidth="1px"
                  borderColor="black"
                  bgGradient="linear(to-r, whiteAlpha.600, blue.600 )"
                  rounded="md"
                  opacity={0.7}
                  _hover={{ opacity: 1 }}
               >
                  <Heading size="md" my="8">
                     <LinkOverlay
                        href="https://github.com/nme22/README-Generator"
                        target="_blank"
                     >
                        README Generator
                     </LinkOverlay>
                  </Heading>
                  <HStack p="2px" justifyContent="space-evenly">
                     <Image
                        src="/javascript-logo.svg"
                        alt="JavaScript"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                     <Image
                        src="/nodejs-icon.svg"
                        alt="Node.Js"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                  </HStack>
                  <Text p={2}>
                     Creates a professional ReadMe in just a few minutes. Fork
                     the application, download dependancies, and run node
                     index.js to create!
                  </Text>
               </LinkBox>
            </motion.div>
            <motion.div
               whileHover={{
                  opacity: 1,
                  scale: 1.05,
               }}
            >
               <LinkBox
                  as="div"
                  maxW="xs"
                  p="5"
                  borderWidth="1px"
                  borderColor="black"
                  bgGradient="linear(to-r, whiteAlpha.600, blue.600 )"
                  rounded="md"
                  opacity={0.7}
                  _hover={{ opacity: 1 }}
               >
                  <Heading size="md" my="8">
                     <LinkOverlay
                        href="https://todolist-nme.vercel.app/"
                        target="_blank"
                     >
                        Todo List App!
                     </LinkOverlay>
                  </Heading>
                  <HStack p="2px" justifyContent="space-evenly">
                     <Image
                        src="/next-js.svg"
                        alt="Next.js"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                     <Image
                        src="/chakraui.png"
                        alt="chakra-ui"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                  </HStack>
                  <Text p={2}>
                     A To Do list created with next.js and chakra-ui! Add things
                     to do or delete things to do. Come back whenever and have
                     your todo's saved in local storage!
                  </Text>
               </LinkBox>
            </motion.div>
            <motion.div
               whileHover={{
                  opacity: 1,
                  scale: 1.05,
               }}
            >
               <LinkBox
                  as="div"
                  maxW="xs"
                  p="5"
                  borderWidth="1px"
                  borderColor="black"
                  bgGradient="linear(to-r, whiteAlpha.600, blue.600 )"
                  rounded="md"
                  opacity={0.7}
                  _hover={{ opacity: 1 }}
               >
                  <Heading size="md" my="8">
                     <LinkOverlay
                        href="https://githubsearch-eta.vercel.app/"
                        target="_blank"
                     >
                        Github Search
                     </LinkOverlay>
                  </Heading>
                  <HStack p="2px" justifyContent="space-evenly">
                     <Image
                        src="/next-js.svg"
                        alt="Next.js"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                     <Image
                        src="/vercellogo.png"
                        alt="Vercel"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                     <Image
                        src="/chakraui.png"
                        alt="chakra-ui"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                  </HStack>
                  <Text p={2}>
                     A Github search application that allows you to search
                     through the github users, pull user data based on your
                     search query, and display a paginated list of results.
                  </Text>
               </LinkBox>
            </motion.div>
            <motion.div
               whileHover={{
                  opacity: 1,
                  scale: 1.05,
               }}
            >
               <LinkBox
                  as="div"
                  maxW="xs"
                  p="5"
                  borderWidth="1px"
                  borderColor="black"
                  bgGradient="linear(to-r, whiteAlpha.600, blue.600 )"
                  rounded="md"
                  opacity={0.7}
                  _hover={{ opacity: 1 }}
               >
                  <Heading size="md" my="8">
                     <LinkOverlay
                        href="https://ezzatskitchen.vercel.app/"
                        target="_blank"
                     >
                        Ezzat's Kitchen (In Progress)
                     </LinkOverlay>
                  </Heading>
                  <HStack p="2px" justifyContent="space-evenly">
                     <Image
                        src="/vercellogo.png"
                        alt="Vercel"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                     <Image
                        src="/next-js.svg"
                        alt="Next.js"
                        height={{ base: '40px', md: '36px', lg: '32px' }}
                        width={{ base: '40px', md: '36px', lg: '32px' }}
                        borderRadius="50%"
                     />
                  </HStack>
                  <Text p={2}>
                     A Next.js application designed to bring you persian food to
                     your door!
                  </Text>
               </LinkBox>
            </motion.div>
         </Flex>
      </>
   );
};

export default Projects;
