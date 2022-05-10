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
         m={1}
         p={1}
         justifyContent="space-between"
         w={{ base: '100%', md: '100%', lg: '100%' }}
         mt={3}
      >
         <IconButton
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            isRound="true"
            size="sm"
            onClick={toggleColorMode}
            backgroundColor={color}
            aria-label="Color Switch"
            as="button"
         >
            Switch
         </IconButton>

         <Breadcrumb
            separator={<ChevronRightIcon color="gray.500" />}
            fontSize={{ base: '8px', md: '12px', lg: '16px' }}
         >
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
                  href="/About"
                  color={color}
                  fontWeight="extrabold"
               >
                  About
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
         </Breadcrumb>
      </HStack>
   );
};
export default PortNavbar;
