import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Layout from '../components/Layout';
// change background to become either a nice picture or something cleaner
const theme = {
   styles: {
      global: {
         body: {
            // bgImage: './portfolio-background.png',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'none',
            // height: '150vh',
            background:
               'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(48,25,52,1) 100%)',
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
