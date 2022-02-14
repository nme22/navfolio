import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Layout from '../components/Layout';
// change background to become either a nice picture or something cleaner
const theme = {
   styles: {
      global: {
         body: {
            background:
               'linear-gradient(270deg, rgba(0,144,255,1) 0%,rgba(255,255,255,1) 100% )',
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
