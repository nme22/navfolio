import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Layout from '../components/Layout';
// change background to become either a nice picture or something cleaner
const theme = {
   styles: {
      global: {
         body: {
            bgImage: './portfolio-background.png',
            backgroundSize: 'cover',
            height: '150vh',
         },
      },
   },
};
const customTheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
   return (
      //
      <ChakraProvider theme={customTheme}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </ChakraProvider>
   );
}

export default MyApp;
