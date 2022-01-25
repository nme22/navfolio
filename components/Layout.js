import PortNavbar from './Navbar';
import PortFooter from './Footer';
import { VStack } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <VStack>
      <PortNavbar />
      {children}
      <PortFooter />
    </VStack>
  );
};

export default Layout;
