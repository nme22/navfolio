import { HStack, Button, Link, Box, Tooltip, VStack } from '@chakra-ui/react';

import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';

const PortFooter = () => {
  return (
    <HStack position="sticky" p="12px" mb={-50}>
      <Link href="https://www.facebook.com/navid.ebrahimi.10/">
        <Tooltip label="Facebook" hasArrow arrowSize={15}>
          <Button colorScheme="facebook" leftIcon={FaFacebook}>
            <FaFacebook size={30} />
          </Button>
        </Tooltip>
      </Link>
      <Link href="https://twitter.com/nme_22">
        <Tooltip label="Twitter" hasArrow arrowSize={15}>
          <Button colorScheme="twitter" leftIcon={FaTwitter}>
            <FaTwitter size={30} />
          </Button>
        </Tooltip>
      </Link>
      <Link href="https://github.com/nme22">
        <Tooltip label="Github" hasArrow arrowSize={15}>
          <Button colorScheme="gray" leftIcon={FaGithub}>
            <FaGithub size={28} />
          </Button>
        </Tooltip>
      </Link>
    </HStack>
  );
};

export default PortFooter;
