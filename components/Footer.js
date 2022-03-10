import { HStack, Button, Link, Tooltip } from '@chakra-ui/react';

import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const PortFooter = () => {
   return (
      <HStack position="sticky" mb={-50}>
         <Link
            href="https://www.facebook.com/navid.ebrahimi.10/"
            target="_blank"
         >
            <Tooltip label="Facebook" hasArrow arrowSize={15}>
               <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                  Facebook
               </Button>
            </Tooltip>
         </Link>
         <Link href="https://twitter.com/nme_22" target="_blank">
            <Tooltip label="Twitter" hasArrow arrowSize={15}>
               <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                  Twitter
               </Button>
            </Tooltip>
         </Link>
         <Link href="https://github.com/nme22" target="_blank">
            <Tooltip label="Github" hasArrow arrowSize={15}>
               <Button colorScheme="gray" leftIcon={<FaGithub />}>
                  Github
               </Button>
            </Tooltip>
         </Link>
         <Link
            href="https://www.linkedin.com/in/navid-ebrahimi-70b983204"
            target="_blank"
         >
            <Tooltip label="LinkedIn" hasArrow arrowSize={15}>
               <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
                  LinkedIn
               </Button>
            </Tooltip>
         </Link>
      </HStack>
   );
};

export default PortFooter;
