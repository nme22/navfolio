import { HStack, Button, Link, Box } from '@chakra-ui/react';

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
    <Box mb="-50px" position="sticky">
      <HStack mt={50} h="100%">
        <Link href="https://www.facebook.com/navid.ebrahimi.10/">
          <Button colorScheme="facebook" leftIcon={FaFacebook}>
            <FaFacebook size={30} />
          </Button>
        </Link>
        <Link href="https://twitter.com/nme_22">
          <Button colorScheme="twitter" leftIcon={FaTwitter}>
            <FaTwitter size={30} />
          </Button>
        </Link>
        <Link href="https://github.com/nme22">
          <Button colorScheme="gray" leftIcon={FaGithub}>
            <FaGithub size={30} />
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default PortFooter;
