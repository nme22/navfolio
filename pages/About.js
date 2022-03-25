import {
   Heading,
   Box,
   Image,
   VStack,
   HStack,
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
} from '@chakra-ui/react';
import {
   FaCode,
   FaFutbol,
   FaGamepad,
   FaSnowboarding,
   FaReact,
} from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';

export default function About() {
   const headingColor = useColorModeValue('whiteAlpha.900', 'blue.200');

   return (
      <>
         <Heading color={headingColor} size="2xl" p={4}>
            A little about Nav
         </Heading>
         <br />

         <VStack
            p={4}
            borderColor="white"
            borderRadius="2xl"
            borderStyle="dashed"
            borderWidth="2px"
            width="m"
            justifyContent="space-around"
         >
            <Accordion defaultIndex={[0]} allowMultiple maxW="contain">
               <AccordionItem p={2}>
                  <AccordionButton
                     _expanded={{
                        bg: 'rebeccapurple',
                        color: { headingColor },
                     }}
                  >
                     <Box flex="1" textAlign="left" color={headingColor}>
                        Origins
                     </Box>
                     <AccordionIcon color={headingColor} />
                  </AccordionButton>

                  <AccordionPanel pb={4} color={headingColor}>
                     Born in Queens, New York. However, I was raised in
                     Sicklerville, New Jersey.
                     <br />
                     My family lineage can be traced back to ancient Persia or
                     modern day Iran.
                  </AccordionPanel>
               </AccordionItem>

               <AccordionItem p={2}>
                  <AccordionButton
                     _expanded={{
                        bg: 'rebeccapurple',
                        color: { headingColor },
                     }}
                  >
                     <Box flex="1" textAlign="left" color={headingColor}>
                        Hobbies
                     </Box>
                     <AccordionIcon color={headingColor} />
                  </AccordionButton>

                  <AccordionPanel pb={4} color={headingColor}>
                     <HStack justifyContent="space-around" p={2}>
                        <FaCode size={50} />
                        <br />
                        <FaGamepad size={50} />
                        <br />
                        <FaFutbol size={50} />
                        <br />
                        <FaSnowboarding size={50} />
                     </HStack>
                  </AccordionPanel>
               </AccordionItem>
               <AccordionItem p={2}>
                  <AccordionButton
                     _expanded={{
                        bg: 'rebeccapurple',
                        color: { headingColor },
                     }}
                  >
                     <Box flex="1" textAlign="left" color={headingColor}>
                        Technologies/Frameworks/Databases
                     </Box>
                     <AccordionIcon color={headingColor} />
                  </AccordionButton>

                  <AccordionPanel pb={4} color={headingColor}>
                     <Heading align="center" size="sm">
                        Languages
                     </Heading>
                     <br />
                     <HStack justifyContent="space-evenly">
                        <Image src="/html.png" h={8} w={8} />
                        <Image src="/css3.png" h={8} w={8} />
                        <Image src="/javascript-logo.svg" height={8} w={8} />
                     </HStack>
                     <br />
                     <Heading align="center" size="sm">
                        Frameworks
                     </Heading>
                     <br />
                     <HStack justifyContent="space-evenly">
                        <FaReact size={32} />
                        <Image src="/nodejs-icon.svg" h={8} w={8} />
                        <Image
                           src="/next-js.svg"
                           h={8}
                           w={8}
                           bg="whiteAlpha.900"
                           borderRadius="2xl"
                        />
                        <Image
                           src="/chakraui.png"
                           h={8}
                           w={8}
                           borderRadius="2xl"
                        />
                     </HStack>
                     <br />
                     <Heading align="center" size="sm">
                        Databases
                     </Heading>
                     <br />
                     <HStack justifyContent="space-evenly">
                        <Image src="/MySQL-Logo.jpeg" h={8} w={8} />
                        <Image src="/MongoDB.jpeg" h={8} w={8} />
                        <Image src="/supabase.png" h={8} w={8} />
                     </HStack>
                  </AccordionPanel>
               </AccordionItem>
               <AccordionItem p={2}>
                  <AccordionButton
                     _expanded={{
                        bg: 'rebeccapurple',
                        color: { headingColor },
                     }}
                  >
                     <Box flex="1" textAlign="left" color={headingColor}>
                        Morals and beliefs
                     </Box>
                     <AccordionIcon color={headingColor} />
                  </AccordionButton>

                  <AccordionPanel pb={4} color={headingColor}>
                     <h2>
                        <u> Zoroastrianism</u>
                     </h2>
                     - A monotheistic pre-Islamic religion of ancient Persia
                     founded by Zoroaster in the 6th century bc.
                     <br />
                     <br />
                     <u>Morals instilled from my upbringing</u>
                     <br />
                     - Treat others how you would want to be treated
                     <br />
                     - Be kind to others, the world is harsh enough as is.
                     <br />- Practice being charitable, whether it be giving
                     money, food, council, or just a little bit of your time.
                     <br /> -Love your friends and die laughing
                  </AccordionPanel>
               </AccordionItem>
               <AccordionItem p={2}>
                  <AccordionButton
                     _expanded={{
                        bg: 'rebeccapurple',
                        color: { headingColor },
                     }}
                  >
                     <Box flex="1" textAlign="left" color={headingColor}>
                        Music I Enjoy
                     </Box>
                     <AccordionIcon color={headingColor} />
                  </AccordionButton>

                  <AccordionPanel pb={4} color={headingColor}>
                     <iframe
                        src="https://open.spotify.com/embed/playlist/4bx5c78CAquCWNE4tw1reY?utm_source=generator"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                     ></iframe>
                  </AccordionPanel>
               </AccordionItem>
            </Accordion>
         </VStack>
      </>
   );
}
