import {
   HStack,
   useColorMode,
   IconButton,
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ChevronRightIcon } from '@chakra-ui/icons';

const PortNavbar = () => {
   const { colorMode, toggleColorMode } = useColorMode();

   const color = useColorModeValue('whiteAlpha.900', 'blue.200');
   return (
      <HStack
         m={3}
         mb={4}
         p={3}
         justifyContent="space-around"
         w={{ base: '100%', md: '100%', lg: '100%' }}
         mt={-3}
      >
         <IconButton
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            isRound="true"
            size="sm"
            onClick={toggleColorMode}
            backgroundColor={color}
         />

         <Breadcrumb
            spacing={{ base: '36px', md: ' 72px', lg: '144px' }}
            separator={<ChevronRightIcon color="gray.500" />}
            fontSize="18px"
         >
            {' '}
            <BreadcrumbItem>
               <BreadcrumbLink href="/" color={color} fontWeight="extrabold">
                  Home
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
               <BreadcrumbLink
                  href="/Projects"
                  color={color}
                  fontWeight="extrabold"
               >
                  Projects
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
               <BreadcrumbLink
                  href="/Contact"
                  color={color}
                  fontWeight="extrabold"
               >
                  Contact
               </BreadcrumbLink>
            </BreadcrumbItem>
            {/* <Link href="/">Home</Link>
        <Link href="/Projects">Projects</Link>
        <Link href="/Contact">Contact</Link> */}
         </Breadcrumb>
      </HStack>
   );
};
export default PortNavbar;
