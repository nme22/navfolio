import { Button, ButtonGroup, Link, Tooltip, Flex } from '@chakra-ui/react';

import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const PortFooter = () => {
   return (
      <Flex
         flexDirection="row"
         justifyContent="space-around"
         mb={20}
         width={{ base: '100%', md: '100%', lg: '100%' }}
      >
         <ButtonGroup variant="solid" spacing={1} size="sm">
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
         </ButtonGroup>
      </Flex>
   );
};

export default PortFooter;
