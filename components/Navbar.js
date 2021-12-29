import { HStack, Button, useColorMode, Box, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa';
import { withTheme } from '@emotion/react';

const PortNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('whiteAlpha.300', 'gray.700');
  const color = useColorModeValue('whiteAlpha.700', 'gray.700');
  return (
    <HStack
      m={3}
      mb={4}
      p={3}
      justifyContent="space-around"
      w={{ base: '100%', md: '100%', lg: '100%' }}
      bg={bg}
    >
      <Button
        onClick={toggleColorMode}
        bg="orange.300"
        color={color}
        _hover={{
          bgColor: 'rebeccapurple',
        }}
        _active={{
          borderColor: 'orange.400',
        }}
      >
        Toggle Light
      </Button>

      <Link href="/">Home</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="/Contact">Contact</Link>
    </HStack>
  );
};
export default PortNavbar;
