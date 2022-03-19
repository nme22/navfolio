import {
   Heading,
   Box,
   VStack,
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

export default function About() {
   const headingColor = useColorModeValue('whiteAlpha.900', 'blue.200');

   return (
      <>
         <Heading color={headingColor} size="2xl" p={4}>
            A little about Nav
         </Heading>
         <VStack
            p={4}
            borderColor="white"
            borderRadius="2xl"
            borderStyle="dashed"
            borderWidth="2px"
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
                     -Practicing building things and watching coding videos
                     <br />
                     -Gaming with friends
                     <br />
                     -Playing Soccer and watching Soccer (MC fan)
                     <br />
                     -Snowboarding
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
                     <u> Languages</u>
                     <br /> - HTML5, CSS3, JS6
                     <br />
                     <u> Frameworks</u>
                     <br />- React.js, Node.js, Next.js
                     <br />
                     <u> Databases</u>
                     <br /> - MySQL, MongoDB, Supabase
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
                     <h2> Zoroastrianism</h2>
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
            </Accordion>
         </VStack>
      </>
   );
}
