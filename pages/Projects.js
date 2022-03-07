import {
   Heading,
   Image,
   HStack,
   Stack,
   LinkOverlay,
   LinkBox,
   Text,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

const Projects = () => {
   const bg = useColorModeValue('whiteAlpha.300', 'gray.700');
   return (
      // Box instead of DIV, same thing according to chakra docs
      // Display projects into a flexbox with a flex direction of column so that the projects line up neatly
      // Let the name of the project be a link to the deployed application or the github repo.
      // Come back and refactor the project divs into a resuseable component
      <Stack
         w={{ base: '100%', md: '100%', lg: '100%' }}
         h={{ base: '85%', md: '100%', lg: '100%' }}
         maxW={{ base: '100%', md: '100%', lg: '100%' }}
         maxH={{ base: '100%', md: '100%', lg: '100%' }}
         bg={bg}
         borderColor={'whiteAlpha.100'}
         justifyContent="flex-start"
         flexDir="column"
         align="center"
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

         <LinkBox
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            borderColor="black"
            bgGradient="linear(to-r, whiteAlpha.300, blue.600 )"
            rounded="md"
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
               A dating app designed to keep your romantic life from getting
               stale! Record the dates you go on, leave notes, and remember the
               good times!
            </Text>
         </LinkBox>
         <LinkBox
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            borderColor="black"
            bgGradient="linear(to-r, whiteAlpha.300, blue.600 )"
            rounded="md"
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
               A node.js application that creates a professional ReadMe in just
               a few minutes. Fork the application, download dependancies, and
               run node index.js to create!
            </Text>
         </LinkBox>
         <LinkBox
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            borderColor="black"
            bgGradient="linear(to-r, whiteAlpha.300, blue.600 )"
            rounded="md"
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
               A To Do list created with next.js and chakra-ui! Add things to do
               or delete things to do. Come back whenever and have your todo's
               saved in local storage!
            </Text>
         </LinkBox>
         <LinkBox
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            borderColor="black"
            bgGradient="linear(to-r, whiteAlpha.300, blue.600 )"
            rounded="md"
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
               A Github search application that allows you to search through the
               github users, pull any relevant users based on your search query,
               and display a paginated list of results with relevant data
               pertaining to that specific user. Created with Next.js,
               Chakra-Ui, and deployed with vercel!
            </Text>
         </LinkBox>
      </Stack>
   );
};

export default Projects;
