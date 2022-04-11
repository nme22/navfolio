import {
   Heading,
   Box,
   VStack,
   HStack,
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
   Badge,
} from '@chakra-ui/react';
import { FaCode, FaFutbol, FaGamepad, FaSnowboarding } from 'react-icons/fa';
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
            borderStyle="groove"
            borderWidth="2px"
            width="fit-content"
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
                        Technologies/Frameworks/Databases
                     </Box>
                     <AccordionIcon color={headingColor} />
                  </AccordionButton>

                  <AccordionPanel pb={4} color={headingColor}>
                     <Heading align="center" size="sm">
                        Languages
                     </Heading>
                     <br />
                     <HStack justifyContent="center">
                        <Badge colorScheme="blue">HTML5</Badge>
                        <Badge colorScheme="green">CSS3</Badge>
                        <Badge colorScheme="yellow">JAVASCRIPT v6</Badge>
                     </HStack>
                     <br />
                     <Heading align="center" size="sm">
                        Frameworks
                     </Heading>
                     <br />
                     <HStack justifyContent="center">
                        <Badge colorScheme="blue">REACT.JS</Badge>
                        <Badge colorScheme="green">NODE.JS</Badge>
                        <Badge colorScheme="black">NEXT.JS</Badge>
                        <Badge colorScheme="cyan">CHAKRA UI</Badge>
                        <Badge colorScheme="facebook">TAILWIND CSS </Badge>
                     </HStack>
                     <br />
                     <Heading align="center" size="sm">
                        Databases
                     </Heading>
                     <br />
                     <HStack justifyContent="center">
                        <Badge colorScheme="messenger">MySQL</Badge>
                        <Badge colorScheme="green">MongoDB</Badge>
                        <Badge colorScheme="black">Supabase</Badge>
                        <Badge colorScheme="red">Firebase</Badge>
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
                        allowFullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                     ></iframe>
                  </AccordionPanel>
               </AccordionItem>
            </Accordion>
         </VStack>
      </>
   );
}
